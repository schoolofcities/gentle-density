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
				At the lower end of the “missing middle” is the opportunity to add <span class="italic">gentle density</span> to a single-family home and optimize its single parcel of land. This could include converting a basement, retrofitting a garage, building a garden suite or laneway house, adding one or more units to a principal dwelling, and/or subdividing and converting a principal dwelling into a duplex or triplex or more.  
			</p>
			<p>
				In Toronto, <span class="textSecondary">secondary suites</span>, <span class="textLaneway">laneway/garden</span> suites.

				Closed building permits have. Building permits can either be active, cancelled, or closed. Those that are closed, we can assume the work has finished. In the building permit data, we thus query by type of work and if they are closed. Then we can see development over time blah a
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
