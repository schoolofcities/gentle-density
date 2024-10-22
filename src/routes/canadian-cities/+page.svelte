<script>

	// import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	// import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";
	// import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

	import Top from "../../lib/TopSofC.svelte";
	import BarChartDouble from "./lib/BarChartSummaryAllCitiesDouble.svelte";
	// import TrendsChartCity from "./lib/TrendsChartCity.svelte";
	import ProvinceText from "./lib/ProvinceText.svelte";
	import CityContent from "./lib/CityContent.svelte";
	import CityMap from "./lib/CityMap.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";

	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';
	import Select from 'svelte-select';

	import aduPics from "./assets/4pics.png";

	import aduDetachedGarage from "./assets/adu-detached-garage.svg";
	import aduGarden from "./assets/adu-garden.svg";
	import aduAttachedGarage from "./assets/adu-attached-garage.svg";
	import aduBasement from "./assets/adu-basement.svg";
	import aduSplit from "./assets/adu-corner-split.svg";
	import aduAddition from "./assets/adu-rearside-addition.svg";

	import '../../assets/styles.css';

	const chartColours = {
		"Secondary": {
			"Completed": "#5cffd9",
			"Issued": "#f6fffd"
		},
		"Detached": {
			"Completed": "#FFD700",
			"Issued": "#fffced"
		}
	}

	const provinceNames = ["British Columbia","Alberta","Saskatchewan","Manitoba","Ontario","New Brunswick","Nova Scotia"]
	let selectedProvince = 'British Columbia'; 


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

	<div class="blueprint" style="background-image: url('./blueprint-background-20cities.png');">

		<div class="title">
			<h1>
				Gentle Density Across Canada
			</h1>
			<h2>
				Tracking development of accessory dwelling units
			</h2>
			<h2>
				
			</h2>
			<p>
				Ahmad Al-Musa, Priya Perwani, Muhammad Khalis Bin Samion, Jeff Allen
			</p>
			<br>
			<p>
				October 2024
			</p>
		</div>

	</div>

	<div class="arrow">
		<p>▼</p>
	</div>

	<!-- <div class="text">
		<p class="construction">
			Page under construction <br><br> Feel free to take a look, but please do not share without permission :)
		</p>
	</div> -->

	<div class="text">
		<p>
			The research focuses on Accessory or Additional Dwelling Units (ADUs) across various municipalities in Canada. The purpose of the research is to track ADU local building permit data in order to locate their uptake, and simultaneously, to push municipalities to track relevant data to further aid in uptake.   
		</p>
		<p>
			We conducted a scan of the 63 Housing Accelerator Fund (HAF) recipient cities under the large/urban stream, and selected cities based on population and national coverage. The final list of cities in this article are those with publicly available permit data i.e. with issue and/or closing dates for ADU permit applications, for the period 2014-2023. A few cities are mentioned to honour their recent work towards ADU uptake, despite the lack of available data.
		</p>
		<br>
		<h3><span class="textLaneway">What is an ADU? </span></h3>
		<p>
			ADUs, sometimes known as the ‘Missing Little’, are additional units on a lot already occupied by a main dwelling. They are self-contained, with a kitchen and bathroom, and generally have a separate entrance. ADUs can be added to the main dwelling or can be built as a seperate unit on the same lot, usually on the yard. ADUs can be added to a house, for example a basement suite, or they can be added on the yard as a detached suite, such as a laneway house.
		</p>
	</div>

	<div class="photograph960">
		<p>Four ADUs in Ontario</p>
		<img src={aduPics} alt="Photographs of four ADUs in Toronto">
		<br><br><br>
	</div>

	<div class="text">
		<h3><span class="textLaneway">Detached ADUs </span></h3>
		<p>
			These units are annexes or external suites at the rear end of a detached home, semidetached home, or townhome. They are generally smaller than the primary building. They can be a detached garage conversion, built on top of an existing detached garage, or a newly built independent unit in the yard. The design must include all code requirements, and considerations of access, tree protection, distances to other built structures and utility hookups.  
		</p>
	</div>

	<div class="schematic-diagrams">
		<div class="diagram">
			<img src="{aduDetachedGarage}" alt="Diagram of an detached garage-conversion ADU">
			<p>Converted Garage ADU</p>
		  </div>
		  <div class="diagram">
			<img src="{aduGarden}" alt="Diagram of a garden suite">
			<p>Garden/Laneway Suite ADU</p>
		  </div>
	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Detached"
		chartColours = {chartColours}
	/>

	<br><br><br>

	<div class="text">
		<h3><span class="textLaneway">Attached ADUs</span></h3>
		<p>
			They are units attached to the primary dwelling unit. A common form is horizontal splitting of the building i.e. converting the basement or second floor into separate suite(s). Other types of conversions can include vertical splitting, rear or side additions, attached garage conversions etc. or a combination. The design must include all code requirements, and considerations of height, access, floor levels, and utility hook ups. 
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
	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Secondary"
		chartColours = {chartColours}
	/>

	<br>
	<br>
	<br>
	


	
	




	<div class="text">

		<h3>City-By-City Analysis</h3>

		<p>
			Select a city from the dropdown list to view an overview of municipal policies, see charts illustrating the uptake of detached and attached ADUs, and explore a map showing the location of the units for the selected city.
        </p>

		<Select 	
			items={cityNames}
			value={selectedCity}
			on:input={e => selectedCity = e.detail.value}
			clearable={false}
			searchable={false}
			showChevron={true}
			--width="250px"
			--font-size="18px"
			--height="24px"
			--selected-item-color="#ab1269"
			--item-active-background="#F1C500"
		/>
		
	</div>

	<CityContent
		citySummaryData = {citySummaryData}
		type = "Detached"
		city = {selectedCity}
		chartColours = {chartColours}
	/>

	<br>

	<CityMap
		city = {selectedCity}
		colours = {chartColours}
	/>

	<br>
	<br>

	<div class="text">
		
		<h3>Provincial Policy</h3>

		<p>
            Provincial legislation plays a crucial role in directing municipal policy, and sometimes impactful change cannot happen without provincial direction. As such, we are listing how different provinces are encouraging ADUs in their jurisdictions. Select a province from the dropdown menu to explore its ADU policy.
        </p>

		<Select 	
			items={provinceNames}
			value={selectedProvince}
			on:input={e => selectedProvince = e.detail.value}
			clearable={false}
			searchable={false}
			showChevron={true}
			--width="250px"
			--font-size="18px"
			--height="24px"
			--selected-item-color="#ab1269"
			--item-active-background="#F1C500"
		/>

		<ProvinceText
			selectedProvince = {selectedProvince}
		/>

	</div>

	

		<div class="text">
			<div class="definition">
				<h4>Data & Methodology</h4>
				<p>
					For each municipality, we downloaded building permit data from their respective open data portals or elsewhere on their websites, filtering the data to only ADUs. The specifics of this process varied by city, since each city has differences in how they code and structure their building permit data.
				</p>
				<p>
					For the maps, the data on population density and income are from the 2021 Canadian Census (Statistics Canada), at the Dissemination Area geography. Low population density is less than 2,000 people per square kilometre, high population density is greater than 6,000. Low income is an after-tax median household income of less than $70,000 in 2020, while high-income is greater than $90,000. All other data shown on the map (streets, transit, buildings, etc.) are from OpenStreetMap. 
				</p>
				<p>
					All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density">GitHub</a>. It was built with the help of Python, Svelte, MapLibre, and D3.
				</p>
				<p>
					Big thanks to Remus Herteg who helped compile the census data (on population and income) for the maps, and to Irene Chang who helped with early conceptual versions of the visualizations shown on this page.
				</p>
			</div>
		</div>

		<br>
		<br>

		<ReadMore currentPage = "canadian-cities"/>

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





	
</style>