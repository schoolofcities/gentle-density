<script>

	import BarChartLanewayCompleted from "./lib/BarChartLanewayCompleted.svelte";
	import BarChartLanewayActive from "./lib/BarChartLanewayActive.svelte";
	import Map from "./lib/MapTorontoLaneway.svelte";

	import Top from "../../lib/TopSofC.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";
	import '../../assets/styles.css';

	import aduDetachedGarage from "./assets/adu-detached-garage.svg";
	import aduGarden from "./assets/adu-garden.svg";

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
				Backyard housing in Toronto
			</h1>
			<h2>
				Mapping laneway and garden suite development, 2018–2025
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://jamaps.github.io" target="_blank">Jeff Allen</a></p>
			<p>January 2026</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				Small, self-contained dwelling units built in the backyards of existing houses are increasingly a form of housing in Toronto. They are typically owner-led and can incrementally increase housing and density in a neighbourhood.
			</p>
			<p>
				In Toronto, these units are often known as laneway suites when they back onto a public laneway, and garden suites otherwise. In other cities and planning contexts, similar housing is often referred to as accessory dwelling units (ADUs), backyard units, or rear-yard housing.
			</p>
			<p>
				Toronto’s approach to permitting these units has expanded through the City’s <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/" target="_blank">Expanding Housing Options in Neighbourhoods</a> (EHON) program, which is a broader set of strategies aiming to reduce exclusive zoning and increase density in residential areas. In 2018, these types of backyard units were permitted in parts of the former Toronto and East York District, limited to properties adjacent to laneways. This permission was extended city-wide in 2019 for all laneway-adjacent lots. In 2022, the City took a further step by allowing garden suites across most low-density residential zones, even where no laneway is present, significantly broadening where small backyard homes could be built.
			</p>
			<p>
				Together, laneway and garden suites represent a form of <a href="https://affordablemissingmiddle.ca/" target="_blank">gentle density</a>: small-scale, incremental additions to existing neighbourhoods that do not substantially alter their built form. These units can provide rental income or flexible living arrangements for homeowners, support intergenerational households, and expand housing options for people who may not need or be able to afford larger homes. For cities facing housing shortages, they offer a way to add housing supply within established neighbourhoods while making more efficient use of existing land, parcel geography, and infrastructure.
			</p>

		</div>


		<div class="schematic-diagrams">
			<div class="diagram">
				<img src="{aduDetachedGarage}" alt="Diagram of an detached garage-conversion ADU">
				<p>Converted garage ADU</p>
			</div>
			<div class="diagram">
				<img src="{aduGarden}" alt="Diagram of a garden suite">
				<p>Garden suite</p>
			</div>
		</div>

		<div class="text">

			<p>
				A few years ago, we looked at both <a href="toronto-building-permits" target="_blank">growth</a> and <a href="toronto-renoductions" target="_blank">decline</a> of different types of gentle density in Toronto (including secondary suites and multiplexes), as well as <a href="adu-development-in-canadian-cities" target="_blank">compared cities across Canada</a>.
			</p>
			<p> 
				This page takes an updated and bit more in-depth look at laneway and garden suites using the City's building permit data. First we chart out trends of how many "New Laneway / Rear Yard Suite" have been built over time based on counting 'closed' (i.e. completed) building permits in the data. We then chart out how many are currently active (i.e. have not been completed or cancelled) to show how many might be completed in the coming year or two.
			</p>
			<p>	
				Note that building permit data isn't a perfect accurate representation of construction, there can be the occasional error in how the data are classified based on permit type, as well as varying lag when a project is complete and when the permit closes. However, it is probably the best open data we have to track this type of development.
			</p>
			<br>
			<h3>
				<span style="background-color: var(--brandVeryDarkBlue); color: white; padding-left: 5px; padding-right: 5px;padding-bottom: 3px; padding-top: 2px;">621</span> laneway and garden suites have been completed in the City of Toronto from 2019 to 2025.
			</h3>
			<div class="line-chart">
				<BarChartLanewayCompleted />
			</div>
		
		</div>

		<div class="text">

			
			<br>
			<h3>
				There are <span style="background-color: var(--brandVeryDarkBlue); color: white; padding-left: 5px; padding-right: 5px; padding-bottom: 3px; padding-top: 2px;">1,082</span> in-progress laneway and garden suite building permits in the City of Toronto (as of 01/2026)
			</h3>

			<div class="line-chart">
				<BarChartLanewayActive />
			</div>
			<br>
			<p>
				Overall, while the rate of increase is substantive year-over-year, it is still only scratching the surface of what could be built. According to <a href="https://adusearch.ca/" target="_blank">ADUsearch.ca</a> the estimated number of properties within Toronto that could add internal or external ADUs range between 261,000 to 317,000 lots. The current uptake (as of 01/2026) of 621 complete and 1,082 in-progress, far less than even 1% of properties.
			</p>
			<p>
				Note as well that not all issued and active permits will lead to completions. Likely some of those permits issued in earlier years may have likely stalled out, even if the permit is still active. As well, a number of permits (265 in total) were cancelled and are such not included in our charts even though they were issued between 2018 and 2025. Based on these trends, it would be expected that up to 30% of the active permits in the chart above won't be completed.
			</p>
			<p>
				Of those that are complete, the median time it takes from when a permit for a new laneway or garden suite is issued to when it is 'closed' (i.e. complete) is just over 1 year (385 days), but this can vary quite a bit with approximately 15% take more than 2 years.
			</p>
			<p>
				Another question is where these housing units are built across the City. Development is constrained by residential zoning and historically, prior to 2022, by needing to be adjacent to a laneway. But beyond that, there is some variation in where units have been built, as well as those that are in-progress. Check out the map below to explore. Below the map is a time slider and layers to toggle what is being shown on the map. 
			</p>

		</div>

	</div>

	<Map/>

	<div class="background-white">

		<br><br>
		<div class="text">
			<h3>Data & Code</h3>
			<p>
				Data on the location, type, and status of <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/" target="_blank">building permits</a> are from the City of Toronto's Open Data portal. To create these charts and maps, we filtered for all permits that were classified as "New Laneway / Rear Yard Suite" while being careful not to double count permits that had revisions. However, there may be some error if building permits were misclassified.
			</p>
			<p>
				The residential <a href="https://open.toronto.ca/dataset/zoning-by-law/" target="_blank">zoning layer</a> is also from the City's Open Data portal. The permitted zones are [R, RD, RM, RS, & RT]. 
			</p>
			<p>
				The location of laneways is also from the City of Toronto's Open Data portal. It was filtered and extracted from the City's <a href="https://open.toronto.ca/dataset/toronto-centreline-tcl/" target="_blank">Centreline</a> dataset.
			</p>
			<p>
				The <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm" target="_blank">income data</a> is from the 2021 Canadian census. The low category are census tracts with a median after-tax household income of less then $75,000, the medium range is between $75,000 and $100,000, and the high is above $100,000.
			</p>
			<p>
				All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density" target="_blank">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Maplibre, pmtiles, and D3.
			</p>
		</div>
		
	</div>

	<ReadMore currentPage = "toronto-building-permits"/>

</main>



<style>

	.schematic-diagrams {
		margin: 0 auto;
		background-color: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 0px;
		max-width: 701px;
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

	h3 {
		font-weight: normal;
		font-family: UbuntuMonoBold;
		margin-bottom: 15px;
		text-decoration: none;
	}

</style>