<script>

	// import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	// import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";
	// import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

	import Top from "../../lib/TopSofC.svelte";
	import BarChartDouble from "./lib/BarChartSummaryAllCitiesDouble.svelte";
	import TrendsChartCity from "./lib/TrendsChartCity.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";

	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';
	import Select from 'svelte-select';

	import '../../assets/styles.css';

	const chartColours = {
		"Completed": "#002b8f",
		"Issued": "#F1C500"
	}

	let buttonSelected = "Totals";
	function buttonClick(input) {
		buttonSelected = input;
	};

	let citySummaryData = [];
	let filteredData = [];

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

	let cityNames = []
	$: cityNames = [...new Set(citySummaryData.map(item => item.CITY))];

    let selectedCity = 'Victoria'; 
	
	$: filteredData = citySummaryData.filter(row => row.CITY === selectedCity);


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
			Lorem ipsum odor amet, consectetuer adipiscing elit. Neque rutrum arcu interdum ante maecenas. Auctor pretium iaculis quisque porttitor condimentum facilisi tristique. Aptent ligula placerat eu litora urna tincidunt dis. Lacus taciti id; pretium est vitae erat taciti dictumst. Fusce lectus litora iaculis eros hendrerit mi. Curae justo dis ad; nisi dapibus ad ultrices. Aliquet conubia dignissim luctus phasellus habitasse maecenas.
		</p>
		<p>
			Fermentum ex aliquam consequat vulputate elit class tortor vehicula. Tortor mi faucibus, rutrum hendrerit facilisi orci facilisi. Curae etiam per varius tellus quisque feugiat vestibulum. Etiam quisque diam imperdiet nam libero nibh lectus dapibus. Facilisis aliquam donec tempor ornare; nibh platea placerat. Nullam massa phasellus sociosqu risus diam sem habitant euismod. Etiam arcu sollicitudin sit hendrerit ac suscipit. Etiam fermentum mi aliquet leo turpis ultricies. Dolor ante morbi aliquet vulputate, blandit vestibulum neque consectetur.
		</p>
	</div>

	<div class="text">
		<h3><span class="textLaneway">Detached Suites</span></h3>
		<p>
			Nec rhoncus consequat elit libero viverra aptent accumsan ullamcorper. Lorem praesent hendrerit est pellentesque nullam dolor elementum vestibulum. Lobortis aliquam suspendisse congue nulla sagittis lacinia est massa? Tristique ante tincidunt cras curabitur finibus mollis. Varius quisque ad neque lacinia congue. Nisl class pulvinar sem ultricies mollis laoreet hendrerit curae. Luctus adipiscing ultricies facilisis convallis viverra ultricies fringilla. Suscipit laoreet commodo habitasse sed conubia. Scelerisque ultricies vehicula vulputate luctus tristique taciti vitae donec lacinia.
		</p>
	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Detached"
		chartColours = {chartColours}
	/>

	<br><br><br>

	<div class="text">
		<h3><span class="textLaneway">Secondary Suites</span></h3>
		<p>
			Lorem ipsum odor amet, consectetuer adipiscing elit. Neque rutrum arcu interdum ante maecenas. Auctor pretium iaculis quisque porttitor condimentum facilisi tristique. Aptent ligula placerat eu litora urna tincidunt dis. Lacus taciti id; pretium est vitae erat taciti dictumst. Fusce lectus litora iaculis eros hendrerit mi. Curae justo dis ad; nisi dapibus ad ultrices. Aliquet conubia dignissim luctus phasellus habitasse maecenas.
		</p>

	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Secondary"
		chartColours = {chartColours}
	/>

	<div class="text">
		<br>
		<p>
			Nec rhoncus consequat elit libero viverra aptent accumsan ullamcorper. Lorem praesent hendrerit est pellentesque nullam dolor elementum vestibulum. Lobortis aliquam suspendisse congue nulla sagittis lacinia est massa? Tristique ante tincidunt cras curabitur finibus mollis. Varius quisque ad neque lacinia congue. Nisl class pulvinar sem ultricies mollis laoreet hendrerit curae. Luctus adipiscing ultricies facilisis convallis viverra ultricies fringilla. Suscipit laoreet commodo habitasse sed conubia. Scelerisque ultricies vehicula vulputate luctus tristique taciti vitae donec lacinia.
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




	<div class="background-white">

		<div class="text">
			<br>
			<br>

			<h3>City-By-City View</h3>

			<Select 	
				items={cityNames}
				value={selectedCity}
				on:input={e => selectedCity = e.detail.value}
				clearable={false}
				searchable={false}
				showChevron={true}
				--width="350px"
				--font-size="18px"
				--height="24px"
				--selected-item-color="#ab1269"
				--item-active-background="#F1C500"
			/>

			<p>
				
				Lorem ipsum odor amet, consectetuer adipiscing elit. Neque rutrum arcu interdum ante maecenas. Auctor pretium iaculis quisque porttitor condimentum facilisi tristique. Aptent ligula placerat eu litora urna tincidunt dis. Lacus taciti id; pretium est vitae erat taciti dictumst. Fusce lectus litora iaculis eros hendrerit mi. Curae justo dis ad; nisi dapibus ad ultrices. Aliquet conubia dignissim luctus phasellus habitasse maecenas.

			</p>

			
			
		</div>

		<TrendsChartCity
			citySummaryData = {citySummaryData}
			type = "Detached"
			city = {selectedCity}
			chartColours = {chartColours}
		/>

		<div class="text">

			<p>
				Felis arcu amet vitae lectus duis arcu purus nascetur. Cursus taciti tortor magnis tempor netus tortor! Sem vestibulum commodo posuere condimentum euismod euismod. Curae mattis maecenas a viverra maximus orci porttitor phasellus dolor. Inceptos imperdiet eleifend id lobortis varius per integer lobortis. Aptent vulputate eros inceptos scelerisque lacus nam vitae felis. Gravida libero auctor dignissim cubilia nam, porttitor inceptos eget.
			</p>

		</div>

		<TrendsChartCity
			citySummaryData = {citySummaryData}
			type = "Secondary"
			city = {selectedCity}
			chartColours = {chartColours}
		/>

		<div class="text">

			<p>
				Ad nam varius dignissim vehicula pellentesque cubilia tempus eros etiam. Donec in pharetra parturient id, cubilia eget ad. Sit venenatis dictum himenaeos enim iaculis blandit libero. Leo facilisis himenaeos sit auctor auctor penatibus. Finibus dictum est justo, tincidunt id ultrices auctor dignissim. Dictum morbi dis volutpat amet congue. Nibh placerat habitasse efficitur est praesent mollis porta inceptos. Duis et primis pharetra; purus urna mi.
			</p>

		</div>

		<br>

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


	<div class="background-white">

		<br>
		<div class="text">
			<h3>Data & Code</h3>
			<p>
				List sources for the data here.
			</p>
			<p>
				All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Maplibre, and D3. "svelte-range-slider-pips": "^2.1.1"
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