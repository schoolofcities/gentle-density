<script>

	import BarChartSecondary from "./lib/BarChartSecondaryCities.svelte";
	import BarChartLaneway from "./lib/BarChartLanewayCities.svelte";
    import CanadianCitiesMap from './lib/MapCanadianCities.svelte';

    import Top from "../lib/TopSofC.svelte";
	import '../assets/styles.css';

	import isometricSecondary from '../assets/isometric-secondary.svg';
	import isometricLaneway from '../assets/isometric-laneway.svg';

    let selectedCity = 'Victoria'; // Set the default city
</script>


<svelte:head>

	<link
		href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/> 

	<link 
		href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&display=swap" rel="stylesheet"
	/>
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
				<span class="italic">Gentle Density</span> Across Four Canadian Cities
			</h1>
			<h2>
				Visualizing building permit data in Victoria, Edmonton, Calgary, and Toronto
			</h2>
			<h2>
				
			</h2>
			<p>Author Names</p>
			<p>April 2024</p>
		</div>

	</div>

	<div class="background-white">

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
					Are “self-contained living accommodation for an additional person or persons living together as a separate single housekeeping unit, in which both food preparation and sanitary facilities are provided for the exclusive use of the occupants of the suite, located in and subordinate to a dwelling unit.” (Click <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/secondary-suites/overview-secondary-suites/">here</a> for further information from the City of Toronto)
				</p>
				</div>
				<div class="isometric"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
			</div>

			<h3><span class="textLaneway">Rear-Yard Suites</span></h3>
			<div class="typeWrapper">
				<div class="isometric-mobile"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
				<div class="typeText"><p>
					Building a small detached dwelling unit that is located on the same property as a single-family home. They are sometimes called Accessory Dwelling Units (ADUs), Garden Suites, or Laneway Houses. Toronto legalized rear yard suites that abut laneways in 06/2018, called Laneway Suites in city bylaws (these are often garage conversions), and then legalized them in all other residential zones in 02/2022 without the need to abut a laneway. The latter are often called Garden Suites. DESCRIBE DATES ON OTHER CITIES,
 
				</p></div>
				<div class="isometric"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
			</div>

			

			

		</div>
	</div>

	<div class="line-chart">
		<BarChartSecondary/>
		<BarChartLaneway/>
	</div>

	<div class="background-white">

		<div class="text">

			<p>
				more text
			</p>
			
		</div>
		
	</div>

    <div id="top-bar">
        <div class="buttons">
			<button class:selected={selectedCity === 'Victoria'} on:click={() => selectedCity = 'Victoria'}>City of Victoria</button>
			<button class:selected={selectedCity === 'Edmonton'} on:click={() => selectedCity = 'Edmonton'}>City of Edmonton</button>
			<button class:selected={selectedCity === 'Calgary'} on:click={() => selectedCity = 'Calgary'}>City of Calgary</button>
			<button class:selected={selectedCity === 'Toronto'} on:click={() => selectedCity = 'Toronto'}>City of Toronto</button>
		</div>
    </div>

	<CanadianCitiesMap city={selectedCity}/>

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