/* eonadler.github.io: site interactions. No dependencies. */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };

  /* ---------------------------------------------------------- theme */
  var doc = document.documentElement;
  var toggle = $('#theme-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var next = doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    doc.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------------------------------------------------------- nav: mobile menu, over-hero state */
  var nav = $('#nav'), menuBtn = $('#menu-btn');
  if (menuBtn) menuBtn.addEventListener('click', function () {
    var open = nav.getAttribute('data-menu') !== 'open';
    nav.setAttribute('data-menu', open ? 'open' : 'closed');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('#nav-links a').forEach(function (a) { a.addEventListener('click', function () { if (nav) nav.setAttribute('data-menu', 'closed'); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav) nav.setAttribute('data-menu', 'closed'); });
  var hero = $('.zoom') || $('.page-hero');
  function updateNav() {
    if (!nav || !hero) return;
    nav.setAttribute('data-over-hero', String(hero.getBoundingClientRect().bottom > nav.offsetHeight + 40));
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; updateNav(); });
  }, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();

  /* ---------------------------------------------------------- zoom hero: scroll position sets the zoom level */
  var HOLD = 0.06;  // fraction of the scroll span held still at each end
  var FADE = 0.85;  // zoom levels over which the next, sharper frame fades in at the center
  var EASE = 0.14;  // per-frame smoothing toward the scroll position, so wheel steps glide
  var WHAT = ['the cosmic web', 'filaments and halos', 'a Milky Way–mass halo', 'subhalos hosting the faintest galaxies'];
  var zoom = $('#top.zoom');
  if (zoom) initZoom(zoom);

  function initZoom(zoom) {
    var Z = { s: 0, target: 0, raf: 0, level: -1, frame: $('.zoom-sticky', zoom), layers: $$('.zoom-layer', zoom), steps: $$('#hud-steps button', zoom), copy: $('#hero-copy'), mpc: $('#hud-mpc'), what: $('#hud-what') };
    function fmtMpc(w) { return (w >= 10 ? Math.round(w) : w >= 1 ? w.toFixed(1) : w.toFixed(2)) + ' Mpc'; }
    function render(s) {
      if (Z.frame.scrollTop) Z.frame.scrollTop = 0; // fallback for browsers without overflow: clip
      Z.layers.forEach(function (img, i) {
        var st = img.style;
        if (i > 0) {
          var t = clamp((s - (i - FADE)) / FADE, 0, 1);
          st.opacity = String(Math.min(1, t * 1.8));
          if (t >= 1) { st.webkitMaskImage = st.maskImage = 'none'; }
          else {
            var m1 = 28 + 72 * t, m2 = m1 + 26;
            st.webkitMaskImage = st.maskImage = 'radial-gradient(circle at 50% 50%, #000 ' + m1 + '%, transparent ' + m2 + '%)';
          }
        }
        st.visibility = (s - i > 1.35 || (i > 0 && s < i - FADE)) ? 'hidden' : 'visible';
        st.transform = 'translate(-50%, -50%) scale(' + Math.pow(10, s - i).toFixed(4) + ')';
      });
      var fade = clamp(s / 0.5, 0, 1);
      if (Z.copy) {
        Z.copy.style.opacity = String(1 - fade);
        Z.copy.style.transform = 'translateY(calc(-50% - ' + (fade * 30).toFixed(1) + 'px))';
        Z.copy.style.pointerEvents = fade > 0.9 ? 'none' : '';
      }
      if (Z.mpc) Z.mpc.textContent = fmtMpc(200 / Math.pow(10, s));
      var lvl = Math.round(s);
      if (lvl !== Z.level) {
        Z.level = lvl;
        if (Z.what) Z.what.textContent = WHAT[lvl];
        Z.steps.forEach(function (b, k) { b.classList.toggle('is-active', k === lvl); });
      }
    }
    function span() { return zoom.offsetHeight - window.innerHeight; }
    function target() { return 3 * clamp((clamp(-zoom.getBoundingClientRect().top / span(), 0, 1) - HOLD) / (1 - 2 * HOLD), 0, 1); }
    function step() {
      Z.s += (Z.target - Z.s) * EASE;
      if (Math.abs(Z.target - Z.s) < 0.001) Z.s = Z.target;
      render(Z.s);
      Z.raf = Z.s === Z.target ? 0 : requestAnimationFrame(step);
    }
    Z.steps.forEach(function (b) {
      b.addEventListener('click', function () {
        var k = +b.getAttribute('data-level');
        var top = zoom.getBoundingClientRect().top + window.scrollY + (HOLD + k / 3 * (1 - 2 * HOLD)) * span();
        window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
    var cue = $('.scroll-cue', zoom), next = cue && document.querySelector(cue.getAttribute('href'));
    if (cue && next) cue.addEventListener('click', function (e) { e.preventDefault(); next.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); });
    if (reduceMotion) { render(2); return; }
    function onScroll() { Z.target = target(); if (!Z.raf) Z.raf = requestAnimationFrame(step); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    Z.s = Z.target = target();
    render(Z.s);
  }

  /* ---------------------------------------------------------- dark matter comparison: drag to wipe, tabs pick the model */
  $$('[data-dial]').forEach(function (root) {
    var data = JSON.parse($('[data-dial-json]', root).textContent);
    var dir = root.getAttribute('data-dir');
    var stage = $('[data-dial-stage]', root), base = $('.dial-base', stage), alt = $('.dial-alt', stage);
    var range = $('input[type="range"]', stage);
    function setSplit(v) { stage.style.setProperty('--split', v + '%'); }
    range.addEventListener('input', function () { setSplit(+range.value); });
    stage.addEventListener('pointerdown', function (e) {
      var r = stage.getBoundingClientRect();
      var v = clamp((e.clientX - r.left) / r.width * 100, 0, 100);
      range.value = v; setSplit(v);
    });
    setSplit(+range.value);
    data.families.forEach(function (f) { (new Image()).src = dir + f.img; });
    $$('[data-family]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var f = data.families.filter(function (x) { return x.id === b.getAttribute('data-family'); })[0];
        base.src = dir + (f.cdm || data.cdm);
        alt.src = dir + f.img; alt.alt = 'The same halo in ' + f.title;
        $('[data-left]', root).textContent = '← ' + f.left;
        $('[data-right]', root).textContent = f.right + ' →';
        range.setAttribute('aria-label', 'Slide from ' + f.left + ' (left) to ' + f.right + ' (right)');
        $('[data-title]', root).textContent = f.title;
        $('[data-what]', root).textContent = f.what;
        var paper = $('[data-paper]', root); paper.textContent = f.suite; paper.href = f.url;
        $$('[data-family]', root).forEach(function (o) { o.setAttribute('aria-selected', String(o === b)); });
      });
    });
  });

  /* ---------------------------------------------------------- sketch -> figure, row by row */
  // Once in view, each row of the sketch turns into the published row (1 -> 4). Afterwards the
  // pointer scrubs all rows together: published figure to the left of it, sketch to the right.
  $$('[data-sketch]').forEach(function (el) {
    var rows = $$('.sketch-row', el), timer = 0, played = false;
    function set(v) { rows.forEach(function (r) { r.style.setProperty('--s', v + '%'); }); }
    function at(e) { var r = el.getBoundingClientRect(); return clamp((e.clientX - r.left) / r.width * 100, 0, 100); }
    function play() { if (played) return; played = true; set(100); }
    el.addEventListener('pointerenter', function (e) {
      if (e.pointerType !== 'mouse') return;
      played = true; el.classList.add('is-hover'); set(at(e));
      clearTimeout(timer); timer = setTimeout(function () { el.classList.add('is-tracking'); }, 350);
    });
    el.addEventListener('pointermove', function (e) { if (el.classList.contains('is-tracking') || e.buttons) set(at(e)); });
    el.addEventListener('pointerdown', function (e) { played = true; el.classList.add('is-hover', 'is-tracking'); set(at(e)); });
    el.addEventListener('pointerleave', function (e) {
      if (e.pointerType !== 'mouse') return;
      clearTimeout(timer); el.classList.remove('is-tracking'); set(100);
      timer = setTimeout(function () { el.classList.remove('is-hover'); }, 400);
    });
    if (reduceMotion || !('IntersectionObserver' in window)) { el.classList.add('is-tracking'); set(100); played = true; return; }
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      io.disconnect(); setTimeout(play, 700);
    }, { threshold: 0.6 });
    io.observe(el);
  });

  /* ---------------------------------------------------------- research pop-ups (<dialog class="pop">); #id opens one */
  function openPop(id) {
    var d = id && document.getElementById(id);
    if (!d || !d.classList || !d.classList.contains('pop')) return false;
    $$('dialog.pop[open]').forEach(function (o) { if (o !== d) o.close(); });
    if (!d.open) d.showModal();
    d.scrollTop = 0;
    try { history.replaceState(null, '', '#' + id); } catch (e) {}
    return true;
  }
  $$('[data-open]').forEach(function (a) {
    a.addEventListener('click', function (e) { if (openPop(a.getAttribute('data-open'))) e.preventDefault(); });
  });
  $$('dialog.pop').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    $$('[data-close]', d).forEach(function (b) { b.addEventListener('click', function () { d.close(); }); });
    d.addEventListener('close', function () {
      $$('video', d).forEach(function (v) { v.pause(); });
      if (location.hash === '#' + d.id) { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
    });
  });
  if (location.hash) openPop(decodeURIComponent(location.hash.slice(1)));
  window.addEventListener('hashchange', function () { openPop(decodeURIComponent(location.hash.slice(1))); });

  /* ---------------------------------------------------------- lightbox for figures */
  var lb = $('#lightbox');
  if (lb && lb.showModal) {
    lb.addEventListener('click', function () { lb.close(); });
    $$('img.zoomable').forEach(function (img) {
      img.setAttribute('tabindex', '0');
      var open = function () {
        $('img', lb).src = img.getAttribute('data-full') || img.src;
        $('img', lb).alt = img.alt;
        $('p', lb).textContent = img.getAttribute('data-caption') || '';
        if (!lb.open) lb.showModal();
      };
      img.addEventListener('click', open);
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
    });
  }

  /* ---------------------------------------------------------- click-to-load YouTube */
  $$('button.yt[data-yt]').forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-yt'), start = b.getAttribute('data-start');
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1' + (start ? '&start=' + start : '');
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      f.title = b.getAttribute('aria-label') || 'Talk video';
      b.replaceWith(f);
    });
  });

  /* ---------------------------------------------------------- publications: show (all / first author), papers under review */
  var app = $('#pub-app');
  if (app) initPubs(app);

  function initPubs(app) {
    var items = $$('.pub', app), groups = $$('.pub-group', app);
    var review = $('#pub-review');
    var params = new URLSearchParams(location.search);
    var state = { show: ['all', 'first'].indexOf(params.get('show')) >= 0 ? params.get('show') : 'all', review: params.get('review') === '1' };
    review.checked = state.review;

    function matches(li) {
      if (!state.review && li.getAttribute('data-status') === 'submitted') return false;
      if (state.show === 'first' && li.getAttribute('data-role') !== 'first') return false;
      return true;
    }
    function apply() {
      var n = 0;
      items.forEach(function (li) { var m = matches(li); li.hidden = !m; if (m) n++; });
      groups.forEach(function (g) { g.hidden = !$$('.pub', g).some(function (li) { return !li.hidden; }); });
      $('#pub-empty').hidden = n > 0;
      // number the refereed papers in the current view, so each filter shows its own count
      var shown = items.filter(function (li) { return !li.hidden && li.getAttribute('data-status') !== 'submitted'; });
      shown.forEach(function (li, i) { var num = $('.pub-num', li); if (num) num.textContent = '(' + (shown.length - i) + ')'; });
      $$('[data-show]', app).forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-show') === state.show)); });
      app.setAttribute('data-view', state.show);
      var p = new URLSearchParams();
      if (state.show !== 'all') p.set('show', state.show);
      if (state.review) p.set('review', '1');
      var qs = p.toString();
      try { history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash); } catch (e) {}
    }
    $$('[data-show]', app).forEach(function (b) { b.addEventListener('click', function () { state.show = b.getAttribute('data-show'); apply(); }); });
    review.addEventListener('change', function () { state.review = review.checked; apply(); });
    apply();
  }
})();
