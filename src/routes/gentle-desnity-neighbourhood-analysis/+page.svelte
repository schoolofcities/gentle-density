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

</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<!-- <link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' /> -->

    <title>Backyard housing in Toronto</title>
    <meta name="description" content="Mapping laneway and garden suite development, 2018–2025">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Backyard housing in Toronto" />
    <meta property="og:description" content="Mapping laneway and garden suite development, 2018–2025" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/toronto-backyard-housing" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-laneway.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/toronto-backyard-housing" />
    <meta name="twitter:title" content="Backyard housing in Toronto" />
    <meta name="twitter:description" content="Mapping laneway and garden suite development, 2018–2025" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-laneway.png" /> 

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('./blueprint-background-laneway.png');">

		<div class="title">
			<h1>
				Gentle Density, Rough Reality
			</h1>
			<h2>
				Quantitative analysis of additional dwelling unit permits in Toronto
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://mkbs-mkbs2000.github.io/Personal-Portfolio/" target="_blank">Muhammad Khalis bin Samion</a></p>
			<p>February 2026</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				Additional dwelling units (ADUs) are not always <a href="https://globalnews.ca/news/9847663/housing-canada-secondary-units-demand/" target="_blank">‘the low-hanging fruit’</a> in addressing the housing crisis. Some neighbourhoods have witnessed substantial growth in their number of ADUs, while others have seen very little growth. We analyzed ADU permits issued between 2022 and 2025 in Toronto neighbourhoods, hinting that ADU growth is strongly related to momentum and spillovers.
			</p>
			<p>	
				As the name suggests, ADUs are dwelling units that exist in addition to the primary residence on a residential lot, making them usually smaller. ADUs <a href="https://affordablemissingmiddle.ca/the-opportunity" target="_blank">promise to deliver more housing stock for cheap</a> (relative to new apartment complexes) without radically changing the built character of a neighbourhood, hence the term ‘gentle density’ that is often associated with ADU developments. Additionally, it offers homeowners an <a href="https://theinnovativegroup.ca/unlocking-the-potential-exploring-additional-dwelling-units-in-ontario/" target="_blank">opportunity to monetise their asset</a> by converting parts of their property into dwellings for rent. This would make ADUs an easy win for everyone, especially considering the dual crisis of cost-of-living and housing unaffordability in Canada that exacerbated post-pandemic. <a href="https://affordablemissingmiddle.ca/missing-little-toronto" target="_blank">Legislation permitting ADUs picked up steam in Toronto from late 2017 onwards</a>, following earlier adopters like California.
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
				Looking at both <a href="https://open.toronto.ca/dataset/building-permits-active-permits/" target="_blank">active</a> (i.e. in-progress) and <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/" target="_blank">completed</a> permits, there were <b>1,894 ADU permits</b> issued between 2022 and 2025.	
			</p>
			<p>	
				Permit activity also steadily increased during this period, from 375 issued permits in 2022 to 550 issued in 2025, <a href="https://schoolofcities.github.io/gentle-density/adu-development-in-canadian-cities" target="_blank">continuing the trend</a> from before COVID-19. 
			</p>
			<p>
				However, they show clustering in some areas, with the densest cluster of 562 permits located west of Downtown Toronto, stretching all the way to High Park and Lawrence Avenue. Although there is a larger cluster of 643 permits, it spans a much larger area from the Don River all the way to Scarborough. Conspicuously, there is little ADU permit activity, and therefore no clusters identified, in Midtown Toronto. 
			</p>
			
		</div>


	<MapPermitLocations/>



		<br><br>
		<div class="text">

			<p>

				What might explain clustering of ADU activity across Toronto? And what neighbourhood-level factors appear most closely associated with higher ADU rates? 

			</p>

			<p>
				To explore this, for each neighbourhood in Toronto, we calculated a proportion of ADU permits to all eligible dwellings (single-detached, semi-detached, row houses, and duplexes). We then compared this proportion to a set of accessibility, housing stock, and demographic indicators. We specifically inputting these characteristics into ordinary least squares regression models suggest that several neighbourhood characteristics are strongly associated with ADU activity. 
			</p>

			<p>
				INSERT MAP HERE OF NEIGHBOURHOODS SHADED BY PROPORTION OF ADU TO DWELLINGS USED IN MODEL
			</p>

			<p>
				We find that neighbourhoods with higher levels of non-car accessibility, a mix of housing types, a greater percentage of older housing stock, and higher proportions of young dependents and single-parent households are related to ADU rates. However, when the influence of ADU rates in surrounding neighbourhoods are controlled via a spatial lag model, the effect of non-car accessibility on ADU rates becomes statistically insignificant. For more information and technical details of this data, modelling, and results, check out this <a href="https://github.com/mkbs-mkbs2000/Toronto-Gentle-Density/" target="_blank">GitHub repository</a>.
			</p>

			<p>
				What this means is that neighbourhoods with high ADU rates are also neighbourhoods that have:
			</p>

			<ul>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> proportions of single-detached and duplex homes.</li>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> proportions of homes built before 1960.</li>
				<li><span style="background-color:#F1C500; padding: 2px; color: black;">Lower</span> proportions of young dependents.</li>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> proportions of single-parent households.</li>
				<li><span style="background-color:#8DBF2E; padding: 2px; color: black;">Higher</span> ADU rates in surrounding neighbourhoods.</li>
			</ul>

			<p>
				The models suggest that ADU activity in the surrounding neighbourhoods has a strong influence on a neighbourhood’s ADU rates. This means the growth of ADUs in Toronto could be due to diffusion, learning-by-seeing, or other unmeasured-but-spatially-patterned factors, which intensifies when there is good transit accessibility. Non-car accessibility alone cannot be taken as a factor because Midtown Toronto is also well served by public transit, but no clusters are identified there.
			</p>

			<p>
				While subject to further analysis, these patterns could reflect limited familiarity of homeowners, builders and/or planners in Toronto when initiating, planning and/or approving ADU projects. This is likely the case when looking at detached ADUs. Prior to 2022, such ADUs must be adjacent to laneways, which are more common in older neighbourhoods located closer to Downtown. This is where the ‘laneway suite’ label came from. <a href="https://affordablemissingmiddle.ca/missing-little-toronto" target="_blank">After 2022, that restriction was removed</a> and detached ADUs could be built anywhere on the same lot, thus the additional labels of ‘garden / rear-yard suite’. This should make detached ADUs possible even in newer neighbourhoods all over the City. However, the majority of backyard suites <a href="./toronto-backyard-housing" target="_blank">built recently</a> in 2024 and 2025 are still adjacent to laneways, even though the majority of residential properties do not have laneway access.
			</p>

			<p>
				Neighbourhoods of households with more young dependents have fewer ADUs, signalling that families without young children could likely spare some living space for ADU conversions. Meanwhile, the promise of additional rental income from ADUs, coupled with the likelihood that single parent households may rely more on community childcare facilities (thus requiring less living space), may explain the positive non-linear relationship between single parents and ADU rates. 
			</p>

			<p>
				These patterns differ from Californian cities, where it was found that ADUs were happening in <a href="https://www.aducalifornia.org/previous-research/" target="_blank">‘diverse, transit-accessible neighbourhoods where… homeowners… still have a mortgage’</a>. This is because rates of visible minority or owners with mortgages did not record significant relationships with ADU rates across Toronto Neighbourhoods . Perhaps, among other things, a cancelling-out effect is going on where despite the benefits, there are structural barriers that constrain the uptake of ADUs by homeowners, especially visible minority homeowners, which is also a concern in California.
			</p>

			<p>
				To an extent, the City has worked to address some of the issues. On top of approving for ADUs of up to sixplexes on one lot, the City has also published <a href="https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/pre-approved-garden-and-laneway-suite-plans/" target="_blank">pre-approved ADU plans</a> that homeowners and builders could easily adopt, and has undertaken <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/demonstration-plans-for-expanding-housing-options-in-neighbourhoods/" target="_blank">demonstration projects</a> to showcase the models. However, these projects are in areas where clusters have been identified, potentially further localising ADU permit activity in the future.
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
				Jeff Allen helped support creating the maps and graphics on this page.
			</p>
		</div>
		
	</div>

	<!-- <ReadMore currentPage = "toronto-backyard-housing"/> -->

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