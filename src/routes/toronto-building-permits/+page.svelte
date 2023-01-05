<script>

	import BarChartSecondary from "../lib/BarChartSecondary.svelte";
	import BarChartLaneway from "../lib/BarChartLaneway.svelte";
	import Map from "../lib/Map.svelte";

	import Top from "../lib/TopSofC.svelte";
	import '../styles.css';

	import isometricSecondary from '../assets/isometric-secondary.svg';
	import isometricLaneway from '../assets/isometric-laneway.svg';


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

	<link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />

    <!-- <title>Place and Politics in Toronto</title>
    <meta name="description" content="Place and Politics in Toronto">
    <meta name="author" content="Zack Taylor & Jeff Allen">

	<meta property="og:title" content="Place and Politics in Toronto" />
    <meta name="og:description" content="Mapping Toryland and Ford Nation" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/place-and-politics-toronto/torontos-two-rights" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/place-and-politics-toronto/sveltekit/src/routes/assets/web-card-2.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/place-and-politics-toronto/torontos-two-rights" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Place and Politics in Toronto" />
    <meta name="twitter:description" content="Mapping Toryland and Ford Nation" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/place-and-politics-toronto/sveltekit/src/routes/assets/web-card-2.png" /> -->

</svelte:head>



<Top/>

<main>

	<div class="blueprint">

		<div class="title">
			<h1>
				Tracking <span class="italic">Gentle Density</span> in Toronto
			</h1>
			<h2>
				Via Visualizing Building Permit Data
			</h2>
			<p><a href="https://jamaps.github.io">Jeff Allen</a></p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">
			<p>
				Swaths of Toronto consists of land only zoned for low-density single family homes (often called the <a href="https://schoolofcities.github.io/yellowbelt-canadian-cities-2022/">Yellowbelt</a>). There has been a big push among housing advocates, academics, and planners to increase housing supply in these neighbourhoods via buidling <a href="https://missingmiddlehousing.com/">missing middle</a> housing (a range of housing types that fall between single-family homes and high-rise apartments), in aims make our urban areas more affordable, inclusive, and sustainable. 
			</p>
			<p>
				At the smaller-scale of the missing middle are 
				<a href="https://www.gentledensity.ca/">gentle density</a> strategies, which refers to owner-led efforts to build additional dwellings within their existing parcel of land. These can increase property value and provide supplmentary income, but importantly, in aggregate, can incrementally scale up the density of a neighbourhood and provide needed housing.
				Relative to larger developments (e.g. larger multi-unit apartments and condominiums), gentle density is designed to be more compatible with the scale and character of existing neighborhoods. Gentle density development is often seen as a way to increase the housing supply in a way that is less disruptive to existing communities and can help to create more walkable, livable neighborhoods.
			</p>
			<p>
				We've looked at 10 years of building permit data in the City of Toronto (01/2013 to 12/2022) to see how and where forms of gentle density have (or have not) been built across the city during this period. At any point in time, building permits can either be active (i.e. build in progress), cancelled, or closed. Those that are closed, we can assume construction has finished. We counted building permits by the year they were closed for the following two types of gentle density construction, to track their trends over time.
			</p>
			
			<h3><span class="textSecondary">Secondary Suites</span></h3>

			<div class="typeWrapper">

				<div class="typeText"><p>
					Sub-dividing an existing residential structure to adding an dwelling unit. The most common form is converting a basement into a separate apartment, but this can include other types of conversions as well (e.g. converting from a duplex to a triplex). These conversions may or may not include building additions (i.e. expanding the volume) of the structure.
				</p></div>

				<div class="isometric"><img src = {isometricSecondary} alt="isometricSecondary"/></div>

			</div>

			<h3><span class="textLaneway">Rear Yard Suites</span></h3>
			

			<div class="typeWrapper">

				<div class="typeText"><p>
					Building a small detached dwelling unit that is located on the same property as a single-family home. They are often called Accessory Dwelling Units (ADUs) or Garden Suites. Toronto legalized rear year suites that abut laneways in ??/2018 (some are garage conversions) and then in all other residentially zoned neighbourhoods in ??/2022 (i.e. for residential properties without laneways).
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
				Secondary suites ...
			</p>
			<p>
				While Laneway suites were legalized in 2018, none were completed according to building permit data until 2020 and only a few dozen since. With the allowance of Garden Suites across the city in 2022, it will be important to continue to track development going forward.
			</p>
			<p>
				For reference, the City of Toronto has QQQQQ parcels of land in low-density residential zones. In sum, only 

			</p>
			<p>
				Below we also map where gentle density is being built in the city.
			</p>
			
		</div>
		
	</div>

	<Map/>

	<div class="background-white">

		<div class="text">
			<p>
				At the lower end of the “missing middle” is the opportunity to add <span class="italic">gentle density</span> to a single-family home and optimize its single parcel of land. This could include converting a basement, retrofitting a garage, building a garden suite or laneway house, adding one or more units to a principal dwelling, and/or subdividing and converting a principal dwelling into a duplex or triplex or more.  
			</p>
		</div>
		
	</div>

</main>
