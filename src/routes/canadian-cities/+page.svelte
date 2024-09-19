<script>

	// import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	// import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";
	// import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

	import Top from "../../lib/TopSofC.svelte";
	import BarChartDouble from "./lib/BarChartSummaryAllCitiesDouble.svelte";
	import TrendsChartCity from "./lib/TrendsChartCity.svelte";
	import ProvinceText from "./lib/ProvinceText.svelte";
	import CityContent from "./lib/CityContent.svelte";
	import CityMap from "./lib/CityMap.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";

	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';
	import Select from 'svelte-select';

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
			Residential neighbourhoods in major Canadian cities are dominated by single-family homes due to zoning regulations restricting everything from a building's height to the number of units permitted on a single-family lot.i Today, 8.1 million homes in Canada (54.1% of existing development) are single-family. The preference for single-family buildings has contributed to a massive supply shortfall in major cities, with rising demand putting upward pressure on prices.ii Housing typologies that use land efficiently and provide housing to more than one family on a single-family lot are urgently needed to bring prices down and provide more choice in well-located areas. 
		</p>
	</div>

	<div class="text">
		<h3><span class="textLaneway">Missing Middle and Missing Little </span></h3>
		<p>
			In 2010, Daniel Parolek coined the term “Missing Middle” to describe medium-density housing—duplexes, triplexes, bungalows, townhouses, cottage court, and more—that could be built between detached single-family homes and mid-rise apartments in order to restore housing affordability and address the need for walkable urban living. 
		</p>
		<p>
			At the smaller-scale of the missing middle is "missing little", a term coined by Michael Piper, which refers to owner-led efforts to build additional dwellings within their existing parcel of land as citizen developers. These strategies are also known as gentle density; they can increase property value and provide supplementary income for owners, but importantly, in aggregate, can incrementally scale up the density of a neighbourhood, allow for intergenerational living, and provide needed housing, particularly for those unable to afford larger homes. Relative to larger developments (e.g. larger multi-unit apartments and condominiums), gentle density is more compatible with the scale and character of existing neighbourhoods. Gentle density development is thus often seen as an approach to increase the housing supply in a way that is less disruptive to existing communities but can still help create more walkable, liveable neighbourhoods, that use existing infrastructure and services, which can save taxpayers' money and reduce harmful urban sprawl. 
		</p>
	</div>

	<div class="text">
		<h3><span class="textLaneway">What is an ADU? </span></h3>
		<p>
			Accessory dwelling units (ADUs), sometimes known as the ‘Missing Little’, are additional units on a lot already occupied by a main building.iii They are self-contained, with a kitchen and bathroom, and generally have a separate entrance. ADUs can be added to the main property or can be built separately
		</p>
	</div>

	<div class="text">
		<h3><span class="textLaneway">Detached Suites </span></h3>
		<p>
			These units are annexes or external suites at the rear end of a detached home, semidetached home, or townhome. They are generally smaller than the primary building. They can be a detached garage conversion, built on top of an existing detached garage, or a newly built independent unit in the yard. The design must include all code requirements, and considerations of access, tree protection, distances to other built structures and utility hookups.  
		</p>
	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Detached"
		chartColours = {chartColours}
	/>

	<br><br><br>

	<div class="text">
		<h3><span class="textLaneway">Secondary Suites </span></h3>
		<p>
			They are units attached to the primary dwelling unit. A common form is horizontal splitting of the building i.e. converting the basement or second floor into separate suite(s). Other types of conversions can include vertical splitting, rear or side additions, attached garage conversions etc. or a combination. The design must include all code requirements, and considerations of height, access, floor levels, and utility hook ups. 
		</p>
	</div>

	<BarChartDouble
		citySummaryData = {citySummaryData}
		type = "Secondary"
		chartColours = {chartColours}
	/>

	<div class="text">
		<br>
		<br>
		<h3><span class="textLaneway">Advantages</span></h3>
		<p>
			<b>Affordability:</b> Single-family homes are nearly three times more expensive in overall price than multiplex units that could be built by upzoning.v Adding a unit to an existing property has the potential to cover mortgage payments if the costs of construction, including costs of financing and development taxes, are less than what that property owner could charge in rent.vi Property owner landlords are more likely to charge below-market rent,vii particularly if the tenant is a family member or friend. For seniors who are homeowners, even if they have paid off their mortgage, renting a unit may assist in paying for home maintenance and supplementing pension income as well as providing companionship and possible assistance, a significant enabler for aging in place. 
		</p>
		<p>
			<b>Housing Diversity and Sociability:</b> It is argued that smaller scale apartment buildings, multiplexes, cottage clusters and ADUs encourage social interaction, thereby creating a sense of belonging, community and support among residents.ix They can offer opportunities to integrate and serve multiple generations or households (co-housing): i.e., these units enable people of all ages to live together and share space in different ways. Accessible ADUs allow seniors to ‘age in place’, grow older without moving to bigger scale or institutional settings.
		</p>
		<p>
			<b>Environment, Local Economies, and Health:</b> ‘Smart growth’ or intensification of existing communities has been advocated by all levels of government since the 1990s.xi On average, Missing Middle buildings have significantly lower embodied greenhouse gas (GHG) emissions per bedroom when compared to single-family and mid/high-rise buildings.xii The closer families are to schools and playgrounds, and the closer seniors are to green spaces and health services, the more that transportation costs and time can be saved.xiii Walkability can also improve mental and physical health through improved ‘sense of place’ and local economic vitality.
		</p>
	</div>

	<div class="text">
		
		<h3>Provincial Policy</h3>

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

		<h3>City-By-City Analysis</h3>

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

	

	<div class="background-white">

		<br>
		<div class="text">
			<h3>Data & Code</h3>
			<p>
				For each municipality, we downloaded building permit data from their respective open data portals or elsewhere on their websites. Other data for the map (streets, transit, etc.) are from OpenStreetMap. All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density">GitHub</a>. It was built with the help of Python, Svelte, MapLibre, and D3.
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