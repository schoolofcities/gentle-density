<script>

	// import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	// import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";

	import BarChartSecondary from "./lib/BarChartSummaryAllCities.svelte";
	import BarChartDouble from "./lib/BarChartSummaryAllCitiesDouble.svelte";

	import MiniCharts from "./lib/MiniCharts.svelte";

    // import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

    import Top from "../../lib/TopSofC.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";

	import '../../assets/styles.css';

	import isometricSecondary from '../../assets/isometric-secondary.svg';
	import isometricLaneway from '../../assets/isometric-laneway.svg';

	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';


	let buttonSelected = "Totals";
	function buttonClick(input) {
		buttonSelected = input;
	};

	let citySummaryData = [];

	async function loadData() {
		try {
			const response = await fetch('municipality-summary-count.csv');
			const csvData = await response.text();
			citySummaryData = csvParse(csvData);
		} catch (error) {
			console.error('Error loading CSV data:', error);
		}
	}

	onMount(() => {
		loadData();
	});

	$: console.log(citySummaryData);

    let selectedCity = 'Victoria'; // Set the default city

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
				<span class="italic">Gentle Density</span> Across Canada
			</h1>
			<h2>
				Tracking development of secondary and detached suites from local building permit data
			</h2>
			<h2>
				
			</h2>
			<p>
				Author Names
			</p>
			<p>
				September 2024
			</p>
		</div>

	</div>

	<div class="arrow">
		<p>▼</p>
	</div>

	<div class="text">
		<p>
			Some intro text here
		</p>
	</div>

	<div class="text">
		<h3><span class="textLaneway">Detached Suites</span></h3>
		<p>
			Some intro text here
		</p>
		<div class="typeWrapper">
			<div class="isometric-mobile"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
			<div class="typeText"><p>
				Building a small detached dwelling unit that is located on the same property with an existing dwelling (e.g. a single family home). They are sometimes called Accessory Dwelling Units (ADUs), Garden Suites, Coach Houses, or Laneway Houses. 
			</p></div>
			<div class="isometric"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
		</div>
		<p>
			Some more text here
		</p>
	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Detached"
	/>

	<br><br><br>

	<div class="text">

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

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Secondary"
	/>

	<div class="text">
		<p>
			Hello I am some more text
		</p>
		<!-- <p>
			OKAY 4 charts showing (buttons totals / per capita) of issued/completed and secondary/detached for a set time period - 2021, 2022 and 2023? I guess
		</p>
		<p>
			Here we show the total completed building permits, over a three year period of 2021 to 2023. We are only showing cities that A) note the completed or closing date in their building permit data, many do not, and B) have at least 1 building permit for the specified category. Moncton, for example, includes completed date, but has no detached suites in their data.
		</p> -->

		<!-- <div class="buttons-wrapper">
			<button 
				class="{buttonSelected === "Totals" ? 'buttonSelected' : 'buttonNotSelected'}"
				on:click={() => buttonClick('Totals')}>
				Totals
			</button>
			<button 
				class="{buttonSelected === "Per Capita" ? 'buttonSelected' : 'buttonNotSelected'}"
				on:click={() => buttonClick('Per Capita')}>
				Per Capita
			</button>
		</div> -->

	</div>
		
		<!-- <BarChartSecondary 
			citySummaryData = {citySummaryData}
			type = "Secondary"
			date = "COMPLETED"
		/>
		<br>
		<BarChartSecondary 
			citySummaryData = {citySummaryData}
			type = "Detached"
			date = "COMPLETED"
		/> -->

<!-- 
	<div class="text">

		<h3>Issued Permits</h3>
		<p>
			Here we show the total issued building permits, over a three year period of 2021 to 2023. There are more cities here than above, simply because issued date is the main date that are included in city data, usually.
		</p>

	</div> -->

	<!-- <BarChartSecondary 
		citySummaryData = {citySummaryData}
		type = "Secondary"
		date = "ISSUED"
	/>
	<br>
	<BarChartSecondary 
		citySummaryData = {citySummaryData}
		type = "Detached"
		date = "ISSUED"
	/> -->

	
	<!-- <BarChartDouble 
		citySummaryData = {citySummaryData}
		type = "Detached"
		date = "COMPLETED"
	/> -->

	<!-- <MiniCharts 
		citySummaryData = {citySummaryData}
		type = "Secondary"
	/> -->

	<div class="text">

	<p>
		"svelte-range-slider-pips": "^2.1.1"
		OKAY! small multiple by city trends of detached (lines for completed and issued)

		--

		OKAY! small multiple by city trends of secondary (lines for completed and issued) - highlight missing data, maybe line for when policy allowed?


		Dropdown select city and zoom to map
		- on map?
		- - toggles for completed and issued
		- - two colours for two types
		Note about policy?

	</p>
		
	</div>
	
	


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

	.buttons-wrapper {
		display: flex;
	}

	.buttonSelected {
		height: 30px;
		width: 150px;
		border: solid 1px var(--brandLightBlue);
		border-radius: 5px;
		background-color: var(--brandDarkBlue);;
		text-align: center;
		margin-right: 10px;
		color: white;
		font-size: 16px;
		font-family: UbuntuMonoRegular;
		font-weight: 400;
	}
	
	.buttonNotSelected {
		height: 30px;
		width: 150px;
		border: solid 1px var(--brandLightBlue);
		border-radius: 5px;
		background-color: white;
		text-align: center;
		margin-right: 10px;
		color: var(--brandDarkBlue);
		font-size: 16px;
		font-family: UbuntuMonoRegular;
		font-weight: 400;
		opacity: 1;
	}
	.buttonSelected:hover {
		cursor: pointer;
	}
	.buttonNotSelected:hover {
		cursor: pointer;
		background-color: #eaf5ff;
	}
	
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

    /* .selected {
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
	} */


	
</style>