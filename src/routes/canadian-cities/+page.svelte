<script>

	// import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	// import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";

	import BarChartSecondary from "./lib/BarChartSecondaryAllCities.svelte";

    // import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

    import Top from "../../lib/TopSofC.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";

	import '../../assets/styles.css';

	import isometricSecondary from '../../assets/isometric-secondary.svg';
	import isometricLaneway from '../../assets/isometric-laneway.svg';

	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';


	let citySummaryData = [];

	async function loadData() {
		try {
			const response = await fetch('canadian-cities-gentle-density-summary.csv');
			const csvData = await response.text();
			citySummaryData = csvParse(csvData);
		} catch (error) {
			console.error('Error loading CSV data:', error);
		}
	}

	onMount(() => {
		loadData();
	});

	// $: console.log(citySummaryData);

    // let selectedCity = 'Victoria'; // Set the default city

</script>


<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />

    <title>Gentle Density in Canadian Cities | School of Cities</title>
    <!-- <meta name="description" content="Visualizing a decade (2013 to 2023) of Secondary Suite and Laneway / Garden Suite building permits in Toronto">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Tracking Gentle Density in Toronto" />
    <meta property="og:description" content="Visualizing a decade (2013 to 2023) of Secondary Suite and Laneway / Garden Suite building permits in Toronto" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/toronto-building-permits" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/toronto-building-permits" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Tracking Gentle Density in Toronto" />
    <meta name="twitter:description" content="Visualizing a decade (2013 to 2023) of Secondary Suite and Laneway / Garden Suite building permits in Toronto" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card.png" />  -->

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('https://schoolofcities.github.io/gentle-density/blueprint-background.png');">

		<div class="title">
			<h1>
				Growth of <span class="italic">Gentle Density</span> across Canada
			</h1>
			<h2>
				Tracking secondary and detached suites from local building permit data
			</h2>
			<h2>
				
			</h2>
			<p>Author Names</p>
			<p>August 2024</p>
		</div>

	</div>


	<div class="arrow">
		<p>▼</p>
	</div>

	<div class="text">

		<p>
			Hello I am some introductory text
		</p>
		
		
		<h3><span class="textSecondary">Secondary Suites</span></h3>
		<div class="typeWrapper">
			<div class="isometric-mobile"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
			<div class="typeText"><p>
				Are self-contained living accommodation for an additional person or persons living together as a separate single housekeeping unit, in which both food preparation and sanitary facilities are provided for the exclusive use of the occupants of the suite, located in and subordinate to a dwelling unit.
			</p>
			</div>
			<div class="isometric"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
		</div>


	</div>

	
	<div class="text">

		<h3><span class="textLaneway">Rear-Yard Suites</span></h3>
		<div class="typeWrapper">
			<div class="isometric-mobile"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
			<div class="typeText"><p>
				Building a small detached dwelling unit that is located on the same property as a single-family home. They are sometimes called Accessory Dwelling Units (ADUs), Garden Suites, or Laneway Houses. Toronto legalized rear yard suites that abut laneways in 06/2018, called Laneway Suites in city bylaws (these are often garage conversions), and then legalized them in all other residential zones in 02/2022 without the need to abut a laneway. The latter are often called Garden Suites. DESCRIBE DATES ON OTHER CITIES,

			</p></div>
			<div class="isometric"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
		</div>
	</div>

	<div class="text">
		<p>
			Hello I am some more text maybe also showing a simple regulation timeline of different cities (when things were approved)
		</p>
	</div>

	OKAY 4 charts showing (buttons totals / per capita) of issued/completed and secondary/detached

	<div class="line-chart">
		<h3>Completed Suites</h3>
		<BarChartSecondary 
			citySummaryData = {citySummaryData}
			type = "Secondary"
			date = "Issued"
		/>
		<BarChartSecondary 
			citySummaryData = {citySummaryData}
			type = "Secondary"
			date = "Issued"
		/>
	</div>

	
	OKAY! small multiple by city trends of detached (lines for completed and issued)

	--

	OKAY! small multiple by city trends of secondary (lines for completed and issued) - highlight missing data, maybe line for when policy allowed?


	Dropdown select city and zoom to map
	- on map?
	- - toggles for completed and issued
	- - two colours for two types
	Note about policy?


	<!-- <div class="line-chart">
		<BarChartSecondary/>
		<BarChartLaneway/>
	</div> -->

    <!-- <div id="top-bar">
        <div class="buttons">
			<button class:selected={selectedCity === 'Victoria'} on:click={() => selectedCity = 'Victoria'}>City of Victoria</button>
			<button class:selected={selectedCity === 'Edmonton'} on:click={() => selectedCity = 'Edmonton'}>City of Edmonton</button>
			<button class:selected={selectedCity === 'Calgary'} on:click={() => selectedCity = 'Calgary'}>City of Calgary</button>
			<button class:selected={selectedCity === 'Toronto'} on:click={() => selectedCity = 'Toronto'}>City of Toronto</button>
		</div>
    </div> -->

	<!-- <CanadianCitiesMap city={selectedCity}/> -->

	<div class="text">
		<p>
			Final text
 
		</p>
	</div>

	<div class="background-white">

		<div class="text">
			<h3>Data & Code</h3>
			<p>
				List sources for the data here.
			</p>
			<p>
				All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Maplibre, and D3.
			</p>
		</div>

		<ReadMore currentPage = "canadian-cities"/>
		
	</div>

</main>



<style>
	
	.typeWrapper {
		overflow: hidden;
		display: flex;
	}

	.isometric {
		float: left;
		width: 300px;
	}
	.isometric-mobile {
		display: none;
		width: 300px;
	}

	.typeText {
		float: left;
		max-width: 500px;

	}

	@media only screen and (max-width: 692px) {
		.typeWrapper {
			overflow: hidden;
			display: contents;
		}
		
		.isometric {
			display: none;
		}
		.isometric-mobile {
			display: contents
		}
		
		.typeText {
			float: none;
			max-width: 700px;
		
		}
	}

    .selected {
    background-color: var(--brandLightBlue);
    color: white;
    }

	.buttons {
		max-width: 685px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
	}
	@media screen and (max-width: 500px) {
		.buttons {
			max-width: 250px;
		}
	}

	button {
		font-family: UbuntuMonoBold;
		text-align: center;
		font-size:18px;
		width: 165px;
		color: var(--brandLightBlue);
        background-color: var(--brandDarkBlue);
        border: 1px solid var(--brandGray);
		padding: 10px;
		margin-bottom: 1px;
		margin-top: 10px;
		cursor: pointer;
	}

	button:hover {
		opacity: 1;
		color: white;
		background-color: var(--brandLightBlue);
	}

    #top-bar {
        width: 100%;
		/* width: calc(100% - 36px); */
		background-color: var(--brandDarkBlue);
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
		color: white;
		font-size: 17px;
		font-family: UbuntuMonoRegular, monospace;
		padding-top: 10px;
		padding-bottom: 8px;
		font-weight: bold;
	}
</style>