<script>

	import BarChartSecondary from "../lib/BarChartSecondary.svelte";
	import BarChartLaneway from "../lib/BarChartLaneway.svelte";
	import Map from "../lib/Map.svelte";

	import Top from "../lib/TopSofC.svelte";
	import '../styles.css';

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
				Swaths of Toronto consists of land only zoned for low-density single family homes (often called the <a href="https://schoolofcities.github.io/yellowbelt-canadian-cities-2022/">Yellowbelt</a>). There has been a big push among housing advcoates, academics, and planners to increase housing supply in these neighbourhoods. 
				
				At the lower end of the missing middle is the opportunity to add <span class="italic">gentle density</span> to a single-family home neighbourhoods. 
				
				Gentle density refers to building additional dwellings to existing parcels of land with single-family homes, scaling up the density of a neighbourhood incrementally at the parcel level. This can involve subdividing an existing dwelling (e.g. renovating a basement into a separate apartment, converting from a duplex to a triplex, etc.), or constructing separate dwellings on the same property (e.g. building a garden suite, converting a garage into an accessory dwelling, etc.). 
			</p>
			<p>
				We've looked at 10 years of building permit data in the City of Toronto (01/2013 to 12/2022) to see how and where forms of gentle density have (or have not) been built across the city.
				The City of Toronto shares building permits as open data. Building permits can either be active (i.e. in progress), cancelled, or closed. Those that are closed, we can assume the construction has finished. We queried closed building permits by their year for the following two types of gentle density construction to track how they're increasing over time.
			</p>
			
			<p><span class="textSecondary">"Second Suite (New)"</span></p>
			<p>
				These are renovations to an existing residential structures where separate dwelling unit is added. The most common form is converting a basement into a separate apartment, but can include other types of conversions (e.g. converting from a duplex to a triplex). They may or may not include building additions (i.e. expanding the volume) of the dwelling.
			</p>
			<p>"Second Suite (New)"</p>
			<p>
				"Laneway / Rear Yard Suite" - Often called Accessory Dwelling Units (ADUs) in other cities. Toronto legalized separate dwellings that abut laneways in ??/2018 and Garden Suites in all other residentially zoned neighbourhoods in ??/2022
			</p> 	

		</div>
	</div>

	<div class="line-chart">
		
		<BarChartSecondary/>

		<BarChartLaneway/>

	</div>

	<div class="background-white">

		<div class="text">
			<p>
				At the lower end of the “missing middle” is the opportunity to add <span class="italic">gentle density</span> to a single-family home and optimize its single parcel of land. This could include converting a basement, retrofitting a garage, building a garden suite or laneway house, adding one or more units to a principal dwelling, and/or subdividing and converting a principal dwelling into a duplex or triplex or more.  
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
