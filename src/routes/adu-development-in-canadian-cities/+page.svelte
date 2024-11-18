<script>

	// import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	// import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";
	// import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

	import Top from "../../lib/TopSofC.svelte";
	import BarChartDouble from "./lib/BarChartSummaryAllCitiesDouble.svelte";
	// import TrendsChartCity from "./lib/TrendsChartCity.svelte";
	import ProvinceText from "./lib/ProvinceText.svelte";
	import CityContent from "./lib/CityContent1.svelte";
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
    <meta name="description" content="Tracking development of accessory dwelling units across Canada via visualizing and mapping building permit data">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Gentle Density in Canadian Cities" />
    <meta property="og:description" content="Tracking development of accessory dwelling across Canada units via visualizing and mapping building permit data" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/canadian-cities" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-mulit-city.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/canadian-cities" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Gentle Density in Canadian Cities" />
    <meta name="twitter:description" content="Tracking development of accessory dwelling units across Canada via visualizing and mapping building permit data" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-multi-city.png" /> 

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
				November 2024
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
			Our research focuses on accessory dwelling units (ADUs) in major urban centres across Canada. Many Canadian cities received federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">Housing Accelerator Fund (HAF)</a> funding to increase its housing stock in light of population growth and the housing affordability crisis. We track the types, take-up, and location of ADUs using permit data, and examine provincial and local planning policies and zoning regulations, to provide a foundation for on-going analysis and to encourage municipalities to consider ADUs as part of the solution and to track relevant data. 
		<p>
			We conducted a scan of the 63 cities that received federal HAF funding under its “large/urban” stream. We then developed a shortlist based on population size and location across Canada, and with publicly available permit data (issued and closed) from 2014 to 2023. Several additional cities are included to honour their recent work to encourage ADU uptake, despite the lack of available data to-date. The 16 shortlisted cities that were included in this analysis are: Calgary, Edmonton, Guelph, Halifax, Hamilton, Kingston, Kitchener, Mississauga, Moncton, Ottawa, Regina, Toronto, Vancouver, Victoria, Waterloo, and Winnipeg.  
		</p>
		<br>
		<h3><span class="textLaneway">What are ADUs? </span></h3>
		<p>
			ADUs, sometimes known as the “Missing Little,” are additional units on a lot already occupied by a main dwelling. They are self-contained units with a kitchen and bathroom, and generally have a separate entrance. ADUs can be attached to the main dwelling (e.g. a basement suite) or a separate, detached unit on the same lot, usually in the backyard (e.g. a laneway house). 
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
			Detached ADUs are annexes or external suites, usually located at the rear of a detached or semi-detached house or townhouse, and generally smaller than the primary building. They may also be a detached garage conversion, built on top of an existing detached garage, or a newly built independent unit in the yard. The design must meet all building code requirements and other requirements related to access, tree protection, distances to other built structures, and utility hookups.  
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
			Attached ADUs are attached to a primary dwelling unit. A common form is a horizontal split of a house, in a basement or on a second floor, providing a separate unit(s). Other types of conversions include vertical splitting, rear or side additions, attached garage conversions, or a combination thereof. The design must meet all building code requirements and other requirements related to access, tree protection, distances to other built structures, and utility hookups. 
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
			Select a city from the dropdown list for an overview of municipal policies, charts illustrating the uptake of detached and attached ADUs (2014–2023), and maps showing the locations of the units for the selected city.
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
            Provincial legislation plays a crucial role in directing municipal policy, and sometimes, impactful change cannot happen without provincial direction. While municipalities are encouraging ADUs through changes in zoning, approvals processes, incentives, raising awareness, and more, the importance of provincial policy to encourage and support local adoption cannot be understated. Across Canada, provincial policies vary. Select a province from the dropdown menu to explore its ADU policy.
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
				For each municipality, we downloaded building permit data from the respective open data portals or elsewhere on their websites, filtering the data to focus exclusively on ADUs. The specifics of this process varied by city, as each has differences in how it codes and structures building permit data.
									
			</p>
			<p>
				For the maps, the data on population density and income are from the 2021 Census (Statistics Canada), at the dissemination area level. Low population density is less than 2,000 people per km2; high population density is greater than 6,000 per km2. Low income is after-tax median household income of less than $70,000 in 2020; high income is greater than $90,000. All other data shown on the maps (streets, transit, buildings, etc.) are from OpenStreetMap.
									
			</p>
			<p>
				All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density">GitHub</a>. It was built with Python, Svelte, MapLibre, and D3.
				
			</p>
			<p>
				Big thanks to Ali Qureshey and Lauren Shiga for helping with research and writing the city profiles; to Remus Herteg for helping to compile census data on population and income for the maps; to Mia Wang for creating the schematic examples of ADUs; and to Irene Chang for helping with early conceptual versions of the maps and charts. We also extend our sincere gratitude to Cherise Burda for providing direction and feedback on this work.
									
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