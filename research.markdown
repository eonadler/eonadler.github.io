---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
cover:  true
title: Research
---

## Galaxy Formation

How did the smallest galaxies form and evolve? Recent surveys have revealed a large population of nearby dwarf galaxies, the faintest of which only have hundreds of stars; facilities including the <a href="https://www.lsst.org/">Vera C. Rubin Observatory</a> will discover thousands of these ultra-faint galaxies. In parallel, the ancestors of bright dwarf galaxies are being detected at high redshifts by <a href="https://webb.nasa.gov/">JWST</a>, providing a link between nearby and early galaxy populations.

My work in this area addresses the following key questions:

* What is the halo mass threshold for galaxy formation?

* When and how does gas cool to form stars in ultra-faint dwarf galaxies?

* How does our local reionization history impact dwarf galaxy evolution?

## Dark Matter

What is the fundamental nature of dark matter? Ultra-faint dwarf galaxies inhabit the smallest dark matter halos that form stars, and are therefore extremely sensitive to dark matter's fundamental properties. Meanwhile, observations of strong gravitational lenses and stellar streams are beginning to probe halos below the galaxy formation threshold, opening a new avenue for tests of dark matter.

My work in this area addresses the following key questions:

* Do completely dark (galaxy-free) halos exist?

* What are the unique astrophysical signatures of dark matter microphysics?

* Can we combine small-scale structure observables to detect a deviation from CDM?

## Near-field Cosmology

How can observations of the local universe inform cosmology? Our galaxy and its surroundings grew out of primordial density fluctuations set by early-universe dynamics and inflation. Reconstructing these *linear* initial conditions is challenging because they are processed by *nonlinear* structure formation. For the first time, it is becoming possible to address this bottleneck using empirical, semi-analytic, and simulation-based models.

My work in this area addresses the following key questions:

* Are there features in the small-scale linear power spectrum?

* How can we efficiently and accurately model structure in the local universe?

* What can near-field cosmology reveal about early universe dynamics and inflation?

## Products

### Cosmological Simulations of Small-scale Structure

#### COZMIC

<p style="margin-bottom: 35px">
I am leading COZMIC: <b>CO</b>smological <b>Z</b>oo<b>M</b>-in simulations with <b>I</b>nitial <b>C</b>onditions beyond CDM. COZMIC includes hundreds of simulations with initial conditions for warm, ultra-light, and interacting dark matter; many of these simulations include dark matter self-interactions. COZMIC is the largest collection of beyond-CDM zoom-in simulations to date, and accurately captures the impact of dark matter physics on small-scale structure.
</p>

<p align="center">
<img src="https://eonadler.github.io/assets/img/cozmic_viz.jpeg" alt="cozmic" width="75%">
</p>
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -20px"><sub> 
COZMIC simulations with initial conditions for warm dark matter (first row), ultra-light "fuzzy" dark matter (second row), and dark matter--proton scattering models (bottom rows). Adapted from E. O. Nadler et al., in preparation.
</sub></p>

#### [Milky Way-est](https://web.stanford.edu/group/gfc/gfcsims/build/html/mwest_overview.html)

<p style="margin-bottom: 35px">
I co-developed <a href="https://arxiv.org/abs/2404.08043">Milky Way-est</a>: a cosmological dark matter-only zoom-in simulation suite of 20 systems that specifically resemble the Milky Way. Milky Way-est provides a realistic template for modeling our galaxy's substructure in CDM, including its satellite galaxy and stellar stream population.
</p>

![Halo004]({{eonadler.github.io}}/assets/img/frame__halo_004_mwest_00000.png){:width="19.5%"}
![Halo113]({{eonadler.github.io}}/assets/img/frame__halo_113_mwest_00000.png){:width="19.5%"}
![Halo222]({{eonadler.github.io}}/assets/img/frame__halo_222_mwest_00000.png){:width="19.5%"}
![Halo659]({{eonadler.github.io}}/assets/img/frame__halo_659_mwest_00000.png){:width="19.5%"}
![Halo756]({{eonadler.github.io}}/assets/img/frame__halo_756_mwest_00000.png){:width="19.5%"}
<p style="line-height: 1.0; margin-top: -10px; margin-bottom: -10px"><sub> 
Dark matter distributions in five Milky Way-est simulations. Each image is centered on a Milky Way-mass host halo; analogs of the Milky Way's largest satellite, the LMC, are visible near the center of each system. Adapted from <a href="https://arxiv.org/abs/2404.08043">Buch & Nadler et al. 2024</a>.
</sub></p>

#### [Symphony](https://web.stanford.edu/group/gfc/gfcsims/build/html/symphony_overview.html)

<p style="margin-bottom: 35px">
I led <a href="https://arxiv.org/abs/2209.02675">Symphony</a>, a compilation of 262 cosmological dark matter-only zoom-in simulations spanning four decades of host halo mass. Symphony includes host halos with masses similar to the LMC, Milky Way, galaxy group systems (e.g., strong gravitational lenses), low-mass galaxy clusters, and massive galaxy clusters.
</p>

### Empirical and Semi-analytic Models

#### Constrained Merger Trees

<p style="margin-bottom: 32px">
I am expanding the open-source structure and galaxy formation model <a href="https://github.com/galacticusorg/galacticus/wiki">GALACTICUS</a> to efficiently and accurately generate constrained realizations of the Milky Way's subhalo and satellite galaxy population. This tool will be thousands of times faster than existing methods and calibrated on COZMIC simulations. In <a href="https://academic.oup.com/mnras/article/521/3/3201/7068109?login=false">Nadler et al. 2022</a>, I introduced the constrained merger tree technique to model high-redshift JWST galaxies.
</p>

![galacticus]({{eonadler.github.io}}/assets/img/galacticus.png){:width="100%"}
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -20px"><sub> 
Example of a Milky Way system's merger tree (left panel) and dark matter substructure (right panel) generated using GALACTICUS. The constrained merger tree technique guarantees that the Milky Way host (black) accretes an LMC analog (red).
</sub></p>

#### Faint-end Galaxy--Halo Connection

<p style="margin-bottom: 32px">
I have developed an empirical model and inference framework for the galaxy--halo connection that extends to the faintest dwarf galaxies. This framework includes a <a href="https://arxiv.org/abs/1712.04467">machine-learning model for satellite disruption due to central galaxies</a> and an <a href="https://arxiv.org/abs/1809.055427">empirical model for the subhalo--satellite galaxy connection</a>.
</p>

<p style="margin-bottom: 30px">
In <a href="https://arxiv.org/abs/1912.03303">Nadler et al. 2020</a>, I applied this framework to Milky Way satellites observed by the <a href="https://www.darkenergysurvey.org/">Dark Energy Survey</a> and <a href="https://www2.ifa.hawaii.edu/research/Pan-STARRS.shtml">Pan-STARRS1</a> to reveal the impact of LMC-associated satellites and constrain the faint-end galaxy--halo connection.
</p>

![galhalo]({{eonadler.github.io}}/assets/img/galhalo.png){:width="100%"}
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -15px"><sub>
The fraction of low-mass halos that host galaxies (left panel) and the corresponding stellar mass--halo mass relation (right panel), derived by combining a galaxy--halo connection model with observations of the Milky Way dwarf satellite galaxy population. Blue regions are allowed by the data. The smallest halos consistent with hosting ultra-faint dwarf galaxies weigh ~100 million solar masses, and may have formed stars through molecular hydrogen cooling. Adapted from <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ab846a">Nadler et al. (2020)</a>.
</sub></p>

### Dark Matter Constraints and Predictions

#### Small-scale Structure Limits

<p style="margin-bottom: 32px">
In <a href="https://arxiv.org/abs/2008.00022">Nadler et al. (2020)</a>, I used the galaxy--halo connection framework described above to constrain dark matter's production mechanism, particle mass, and Standard Model interactions. In <a href="https://arxiv.org/abs/2101.07810">Nadler et al. (2021)</a>, I combined these Milky Way satellite constraints with strong gravitational lensing flux ratio statistics to set the most stringent warm dark matter limit to date.
</p>

![dm]({{eonadler.github.io}}/assets/img/dm_constraints.png){:width="100%"}
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -15px"><sub> 
Constraints on sterile neutrino warm dark matter (left panel) and dark matter--Standard Model interactions (right panel) derived using the population of ultra-faint dwarf galaxies near the Milky Way. Red and blue regions are excluded by our analysis, which improves upon other astrophysical limits and complements direct detection experiments. Adapted from <a href="https://arxiv.org/abs/2008.00022">Nadler et al. (2021)</a>.
</sub></p>

#### Self-interacting Dark Matter Predictions

## Miscellaneous

I have led and advised the projects in the following areas (see [mentoring](./mentorship.markdown) for more information about student projects):

* Dwarf galaxy star formation history modeling ([Wang & Nadler et al. 2021](https://arxiv.org/abs/2102.11876), [2024](https://arxiv.org/abs/2404.14500));

* Dwarf galaxy detection using GAIA data ([Darragh-Ford & Nadler et al. 2021](https://arxiv.org/abs/2012.00099));

* Halo clustering predictions in the effective field theory of large-scale structure ([Nadler et al. 2018](https://arxiv.org/abs/1710.10308));

* Hydrodynamic simulations of halo formation ([Nadler et al. 2017](https://arxiv.org/abs/1701.01449)).