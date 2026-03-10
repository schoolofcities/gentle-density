<script>



	import Top from "../../lib/TopSofC.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";
	import MapPermitLocations from "./lib/MapPermitLocations.svelte";
	import '../../assets/styles.css';

	import aduDetachedGarage from "./assets/adu-detached-garage.svg";
	import aduGarden from "./assets/adu-garden.svg";
	import aduAttachedGarage from "./assets/adu-attached-garage.svg";
	import aduBasement from "./assets/adu-basement.svg";
	import aduSplit from "./assets/adu-corner-split.svg";
	import aduAddition from "./assets/adu-rearside-addition.svg";

	import neighbourhoodMapADU from "./assets/toronto-neighbourhoods-adu-rate.png";

</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<!-- <link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' /> -->

    <title>Gentle density neighbourhood analysis</title>
    <meta name="description" content="Keeping up with the neighbours: Quantitative analysis of accessory dwelling unit permits in Toronto">
    <meta name="author" content="School of Cities">

	<meta property="og:title" content="Keeping up with the neighbours" />
    <meta property="og:description" content="Quantitative analysis of accessory dwelling unit permits in Toronto" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/toronto-neighbourhood-analysis" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-neighbourhoods.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/toronto-neighbourhood-analysis" />
    <meta name="twitter:title" content="Keeping up with the neighbours" />
    <meta name="twitter:description" content="Quantitative analysis of accessory dwelling unit permits in Toronto" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-neighbourhoods.png" /> 

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('./blueprint-background-neighbourhoods.png');">

		<div class="title">
			<h1>
				Keeping up with the neighbours: 
			</h1>
			<h2>
				Quantitative analysis of accessory dwelling unit permits in Toronto
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://mkbs-mkbs2000.github.io/Personal-Portfolio/" target="_blank">Muhammad Khalis bin Samion</a></p>
			<p>March 2026</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				Accessory dwelling units (ADUs) are often seen as <a href="https://globalnews.ca/news/9847663/housing-canada-secondary-units-demand/" target="_blank">‘the low-hanging fruit’</a> in addressing the housing crisis, but they are not materializing across all Toronto neighbourhoods. Some have witnessed substantial ADU growth, while others have little or none. We analyzed ADU permits issued between 2022 and 2025 in Toronto neighbourhoods,  and found that that growth is highly concentrated and related to local housing and household characteristics.
			</p>
			<p>
				As the name suggests, ADUs are dwelling units that exist as accessory to the primary residence on a residential lot. ADUs <a href="https://affordablemissingmiddle.ca/the-opportunity" target="_blank">promise to deliver more housing stock</a> at lower cost than units in new apartment complexes without radically changing the built character of a neighbourhood, hence the term ‘gentle density.’ Additionally, ADUs offer homeowners an <a href="https://theinnovativegroup.ca/unlocking-the-potential-exploring-additional-dwelling-units-in-ontario/" target="_blank">opportunity to monetise their asset</a> by converting parts of their property into dwellings for rent. These characteristics make ADUs a win-win for everyone, especially considering the dual post-pandemic crises of the cost of living and housing unaffordability in Canada. 
			</p>
			
		</div>
		<div class="schematic-diagrams">
			<div class="diagram">
				<img src="{aduBasement}" alt="Diagram of a basement suite ADU">
				<p>Basement ADU</p>
			</div>
			<div class="diagram">
				<img src="{aduAttachedGarage}" alt="Diagram of an attached garage ADU">
				<p>Attached Garage ADU</p>
			</div>
			<div class="diagram">
				<img src="{aduSplit}" alt="Diagram of a split dwelling ADU">
				<p>Split Dwelling ADU</p>
			</div>
			<div class="diagram">
				<img src="{aduAddition}" alt="Diagram of an addition to a dwelling for an ADU">
				<p>Side/Rear Addition ADU</p>
			</div>
			<div class="diagram">
				<img src="{aduDetachedGarage}" alt="Diagram of an detached garage-conversion ADU">
				<p>Converted Garage ADU</p>
			</div>
			<div class="diagram">
				<img src="{aduGarden}" alt="Diagram of a garden suite">
				<p>Garden/Laneway Suite ADU</p>
			</div>
		</div>

		<div class="text">

			<p>
				<a href="https://affordablemissingmiddle.ca/missing-little-toronto" target="_blank">Legislation permitting ADUs picked up steam in Toronto in 2017</a>, following earlier adopters like California.
				Permit activity picked up steadily during the period we analyzed,  from 375 issued permits in 2022 to 550 issued in 2025, <a href="https://schoolofcities.github.io/gentle-density/adu-development-in-canadian-cities" target="_blank">continuing a pre-pandemic trend</a>. 
				In total, there were <b>1,894 ADU </b> <a href="https://open.toronto.ca/dataset/building-permits-active-permits/" target="_blank">active</a> (i.e. in progress) and <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/" target="_blank">completed</a> permits issued between 2022 and 2025. 
				However, they reveal clustering in some areas, with the densest cluster just west of downtown Toronto.
			</p>
			
		</div>

	<MapPermitLocations/>

		<br><br>
		<div class="text">

			<p>

				What might explain clustering of ADU activity across Toronto? And which neighbourhood-level factors appear most closely associated with higher ADU rates? 

			</p>

			<p>
				To explore this, we calculated a proportion of ADU permits to all eligible dwellings (single-detached, semi-detached, row houses, and duplexes) for each neighbourhood in Toronto.
			</p>

			<img
				src={neighbourhoodMapADU}
				alt="My image"
				style="display: block; width: 100%; height: auto; opacity: 0.8;"
			/>

			<p>
				We then compared this proportion to a set of neighbourhood-level accessibility, housing stock, and demographic indicators. Specifically, we inputted these characteristics into ordinary least squares regression models to see which, all else being equal, are related to higher or lower rates of ADUs in neighbourhoods.
			</p>

			<p>
				Through these models, we found that a mix of housing types, older housing stock, and higher proportions of single-parent households are related to ADU rates. More younger dependents were associated with lower ADU rates.
				Via a spatial lag model, we also found that ADU rates were positively associated with ADU rates in surrounding neighbourhoods are controlled. For more information and for the technical details of this data, modelling, and results, check out this <a href="https://github.com/mkbs-mkbs2000/Toronto-Gentle-Density/" target="_blank">GitHub repository</a>.
			</p>

			<p>
				In summary, we found that neighbourhoods with high ADU rates are also neighbourhoods that have:
			</p>

			<ul>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> proportions of single-detached and duplex homes.</li>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> proportions of homes built before 1960.</li>
				<li><span style="background-color:#F1C500; padding: 2px; color: black;">Lower</span> proportions of young dependents.</li>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> proportions of single-parent households.</li>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> ADU rates in surrounding neighbourhoods.</li>
			</ul>

			<p>
				The models suggest that ADU activity in the surrounding neighbourhoods has a strong influence on a neighbourhood’s ADU rates. This means the growth of ADUs in Toronto could be due to diffusion, learning-by-seeing, or other unmeasured-but-spatially-patterned factors. This is a phenomenon seen in other cities like Portland, where the <a href="https://ternercenter.berkeley.edu/wp-content/uploads/pdfs/Jumpstarting_the_Market_--_ULI.pdf" target="_blank">availability of information (and even tours) about ADUs</a> led to an explosion of new construction in certain areas. 
			</p>

			<p>
				Further research might help to understand whether these patterns reflect the limited familiarity in Toronto of homeowners, builders and/or planners with ADU projects. This is likely the case when looking at detached ADUs. Prior to 2022, such ADUs had to be adjacent to laneways, which are more common in older neighbourhoods located closer to downtown (thus the monicker 'laneway suite'). <a href="https://affordablemissingmiddle.ca/missing-little-toronto" target="_blank">After 2022, that restriction was removed</a> and detached ADUs could be built anywhere on the same lot (thus the additional labels of ‘garden / rear-yard suite’). This should make detached ADUs possible even in newer neighbourhoods all over the city. However, the majority of <a href="./toronto-backyard-housing" target="_blank">backyard suites built</a> in 2024 and 2025 are still adjacent to laneways, even though the majority of residential properties do not have laneway access.
			</p>

			<p>
				Neighbourhoods of households with more young dependents have fewer ADUs, signalling either that these families lack the resources to build or that families without young children are better able to spare some living space for ADU conversions. Meanwhile, the promise of additional rental income from ADUs may explain the positive non-linear relationship between single parents and ADU rates. 
			</p>

			<p>
				These patterns differ from Californian cities, where it was found that many ADUs were concentrated in <a href="https://www.aducalifornia.org/previous-research/" target="_blank">‘diverse, transit-accessible neighbourhoods where… homeowners… still have a mortgage’</a> (e.g. the City of Los Angeles). In Toronto, concentrations of visible minorities or owners with mortgages were not significantly associated with ADU permitting rates. This suggests that there may be structural barriers that constrain the uptake of ADUs by homeowners, <a href="https://www.aducalifornia.org/wp-content/uploads/2022/08/ADUs_for_All.pdf" target="_blank">which is also a concern in California</a>.
			</p>

			<p>
				To an extent, the City of Toronto has worked to address some of the issues with low ADU take up in some neighbourhoods. As well as approving ADUs to up to six units on one lot, the City has also published <a href="https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/pre-approved-garden-and-laneway-suite-plans/" target="_blank">pre-approved ADU plans</a> that homeowners and builders could easily adopt, and has undertaken <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/demonstration-plans-for-expanding-housing-options-in-neighbourhoods/" target="_blank">demonstration projects</a> to showcase the models – both proven methods to increase uptake. However, in order to expand ADU permit activity across the city, it will be important to expand education efforts in Toronto neighbourhoods underserved by ADUs.
			</p>


		</div>

	</div>

	<div class="background-white">

		<br><br>
		<div class="text">
			<h3>Data and code</h3>
			<p>
				View <a href="https://github.com/mkbs-mkbs2000/Toronto-Gentle-Density/tree/main" target="_blank">this GitHub repository</a> for further details about the data, analysis, and model outputs.
			</p>
			<h3>Acknowledgements</h3>
			<p>
				Jeff Allen supported the creation of maps and graphics on this page.
			</p>
		</div>
		
	</div>

	<ReadMore currentPage = "toronto-neighbourhood-analysis"/>

</main>



<style>

	.schematic-diagrams {
		margin: 0 auto;
		background-color: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 0px;
		max-width: 1101px;
		margin-bottom: 20px;
	}

	.diagram {
		margin: 0 auto;
		max-width: 351px;
	}

	.diagram p {
		font-size: 15px;
		text-align: center;
		margin-top: -15px;
		color: var(--brandDarkBlue);
    	font-family: UbuntuMonoItalic;
	}

	@media (max-width: 1000px) {
		.schematic-diagrams {
			grid-template-columns: repeat(2, 1fr);
		}
	}


	@media (max-width: 700px) {
		.schematic-diagrams {
			grid-template-columns: 1fr;
		}
	}
	

	.line-chart {
		margin: auto 0;
		width: 100%;
		border-top: solid 1px var(--brandLightBlue);
		opacity: 1;
		background-color: var(--brandDarkBlue);
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
		padding-top: 25px;
		padding-bottom: 25px;
		min-width: 375px;
	}

	@media (max-width: 375px) {
		.line-chart {
			margin-left: -20px;
		}
	}


	h3 {
		font-weight: normal;
		font-family: UbuntuMonoBold;
		margin-bottom: 15px;
		text-decoration: none;
	}

</style>