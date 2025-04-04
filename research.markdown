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

#### [COZMIC](https://zenodo.org/records/14649137)

<p style="margin-bottom: 35px">
I am leading COZMIC: <b>CO</b>smological <b>Z</b>oo<b>M</b>-in simulations with <b>I</b>nitial <b>C</b>onditions beyond CDM. COZMIC includes hundreds of simulations with initial conditions for warm, ultra-light, interacting, and mixed dark matter. COZMIC is the largest collection of beyond-CDM zoom-in simulations to date, and accurately captures how dark matter physics impacts Milky Way substructure. See the <a href="https://arxiv.org/abs/2410.03635">COZMIC I</a>, <a href="https://arxiv.org/abs/2411.03431">COZMIC II</a>, and <a href="https://arxiv.org/abs/2412.13065">COZMIC III</a> papers.
</p>

<p align="center">
<img src="https://eonadler.github.io/assets/img/cozmic_viz.jpeg" alt="cozmic" width="75%">
</p>
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -20px"><sub> 
COZMIC simulations with initial conditions for warm dark matter (first row), ultra-light "fuzzy" dark matter (second row), and dark matter--proton scattering models (bottom rows). Adapted from <a href="https://arxiv.org/abs/2410.03635">Nadler et al. 2024</a>.
</sub></p>

#### [SIDM Concerto](https://zenodo.org/records/14933624)

<p style="margin-bottom: 1em;">
I am leading SIDM Concerto: cosmological zoom-in simulations of strong, velocity-dependent self-interacting dark matter (SIDM) models spanning seven decades of subhalo mass. These simulations provide a benchmark for testing SIDM predictions with astrophysical observations of dwarf galaxies, strong lenses, and stellar streams.
</p>

<p align="center" style="margin-top: 0;">
<img src="https://eonadler.github.io/assets/img/concerto_viz.jpeg" alt="concerto" width="75%">
</p>

<p style="line-height: 1.3; margin-top: 1em; margin-bottom: 0; text-align: center;">
<sub>
SIDM Concerto simulations of an LMC-mass (top left), Milky Way-mass (top right), group-mass (bottom left), and cluster-mass (bottom right) host. Adapted from <a href="https://arxiv.org/abs/2503.10748">Nadler et al. 2025</a>.
</sub>
</p>


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
I led <a href="https://iopscience.iop.org/article/10.3847/1538-4357/acb68c">Symphony</a>, a compilation of 262 cosmological dark matter-only zoom-in simulations spanning four decades of host halo mass. Symphony includes host halos with masses similar to the LMC, Milky Way, group-mass systems (e.g., strong gravitational lenses), low-mass galaxy clusters, and massive galaxy clusters.
</p>

### Empirical and Semi-analytic Models

#### Galaxy Formation Threshold

I am developing predictions for the mass spectrum of dark matter halos that form stars. By including molecular hydrogen cooling and relative streaming motion between dark matter and baryons, this model predicts that halos down to 10 million solar masses today form stars, while smaller systems remain dark. This threshold is significantly smaller than previous predictions that were based only on atomic hydrogen cooling and reionization.

<p align="center">
<img src="https://eonadler.github.io/assets/img/fgal_viz.jpeg" alt="fgal" width="125%">
</p>
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -20px"><sub> 
The fraction of dark matter halos that form galaxies (left panel) and a sample of halo growth histories (right panel). Blue lines show predictions including molecular hydrogen cooling and dark matter--baryon streaming; the orange lines only include atomic hydrogen cooling and reionization. Halos that pass above the thick lines in the right panel form stars. Adapted from <a href="https://arxiv.org/abs/2503.04885">Nadler 2025</a>.
</sub></p>

#### Faint-end Galaxy--Halo Connection

<p style="margin-bottom: 32px">
I have developed an empirical model and inference framework for the galaxy--halo connection that extends to the faintest dwarf galaxies. This framework includes a <a href="https://iopscience.iop.org/article/10.3847/1538-4357/aac266">machine-learning model for satellite disruption due to central galaxies</a>, an <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ab040e">empirical model for the subhalo--satellite galaxy connection</a>, and <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ad3bb1">forecasts for future surveys</a>.
</p>

<p style="margin-bottom: 30px">
In <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ab846a">Nadler et al. (2020)</a>, I applied this framework to Milky Way satellites observed by the <a href="https://www.darkenergysurvey.org/">Dark Energy Survey</a> and <a href="https://www2.ifa.hawaii.edu/research/Pan-STARRS.shtml">Pan-STARRS1</a> to reveal the impact of LMC satellites and constrain the faint-end galaxy--halo connection.
</p>

![galhalo]({{eonadler.github.io}}/assets/img/galhalo.png){:width="100%"}
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -15px"><sub>
The fraction of low-mass halos that host galaxies (left panel) and the corresponding stellar mass--halo mass relation (right panel), derived by combining a galaxy--halo connection model with observations of the Milky Way dwarf satellite galaxy population. Blue regions are allowed by the data. The smallest halos consistent with hosting ultra-faint dwarf galaxies weigh ~100 million solar masses, and may have formed stars through molecular hydrogen cooling. Adapted from <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ab846a">Nadler et al. (2020)</a>.
</sub></p>

#### Constrained Merger Trees

<p style="margin-bottom: 32px">
I am expanding the open-source structure and galaxy formation model <a href="https://github.com/galacticusorg/galacticus/wiki">GALACTICUS</a> to efficiently and accurately generate constrained realizations of the Milky Way's subhalo and satellite galaxy population. This tool will be thousands of times faster than existing methods and calibrated on COZMIC simulations. In <a href="https://academic.oup.com/mnras/article/521/3/3201/7068109?login=false">Nadler et al. 2022</a>, I introduced the constrained merger tree technique to model high-redshift JWST galaxies.
</p>

![galacticus]({{eonadler.github.io}}/assets/img/galacticus.png){:width="100%"}
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -20px"><sub> 
Example of a Milky Way system's merger tree (left panel) and dark matter substructure (right panel) generated using GALACTICUS. The constrained merger tree technique guarantees that the Milky Way host (black) accretes an LMC analog (red).
</sub></p>

### Dark Matter Constraints and Predictions

#### Small-scale Structure Limits

<p style="margin-bottom: 32px">
In <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.091101">Nadler et al. (2021a)</a>, I used the Milky Way satellite framework described above to constrain dark matter's production mechanism, particle mass, and Standard Model interactions. In <a href="https://iopscience.iop.org/article/10.3847/1538-4357/abf9a3">Nadler et al. (2021b)</a>, I combined these constraints with strong lensing flux ratio statistics to set the most stringent warm dark matter limit to date.
</p>

![dm]({{eonadler.github.io}}/assets/img/dm_constraints.png){:width="100%"}
<p style="line-height: 1.0; margin-top: -15px; margin-bottom: -15px"><sub> 
Constraints on sterile neutrino warm dark matter (left panel) and dark matter--Standard Model interactions (right panel) derived using the population of ultra-faint dwarf galaxies near the Milky Way. Red and blue regions are excluded by our analysis, which improves upon other astrophysical limits and complements direct detection experiments. Adapted from <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.091101">Nadler et al. (2021a)</a>.
</sub></p>

#### Self-interacting Dark Matter Predictions

In <a href="https://iopscience.iop.org/article/10.3847/2041-8213/ad0e09">Nadler, Yang, & Yu (2023)</a>, I ran the first cosmological simulation with strong, velocity-dependent dark matter self-interactions in a strong lens analog. The predicted halo and subhalo populations explain the extremely dense substructure in the strong lens SDSSJ0946+1006 and the rotation curves of isolated ultra-diffuse galaxies.

## Miscellaneous

I have led and advised projects in the following areas (see [mentoring](./mentorship.markdown) for more information about student projects):

* Dwarf galaxy star formation history modeling ([Wang & Nadler et al. 2021](https://iopscience.iop.org/article/10.3847/1538-4357/ac024a), [2024](https://arxiv.org/abs/2404.14500));

* Milky Way satellite constraints on dark matter's formation epoch ([Das & Nadler 2021](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.103.043517)), particle lifetime ([Mau & Nadler et al. 2022](https://iopscience.iop.org/article/10.3847/1538-4357/ac6e65)), and interactions with radiation ([Crumrine & Nadler et al. 2024](https://arxiv.org/abs/2406.19458);

* Tidal disruption and dynamical friction modeling in self-interacting ultra-light dark matter ([Glennon & Nadler et al. 2022](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.105.123540); [Glennon, Musoke, Nadler et al. 2024](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.109.063501));

* Effects of dark matter--baryon interactions on 21-cm cosmology ([Driskell & Nadler et al. 2022](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.106.103525));

* Dwarf galaxy detection using GAIA ([Darragh-Ford & Nadler et al. 2021](https://iopscience.iop.org/article/10.3847/1538-4357/ac0053));

* Halo clustering in the effective field theory of large-scale structure ([Nadler et al. 2018](https://iopscience.iop.org/article/10.1088/1475-7516/2018/02/058));

* Hydrodynamic simulations of halo formation ([Nadler et al. 2017](https://academic.oup.com/mnras/article/470/1/500/3837819?login=false)).