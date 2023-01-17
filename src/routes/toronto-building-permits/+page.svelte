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
				We've looked at 10 years of <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits-prior-years/">building permit data</a> in the City of Toronto (from 01/2013 to 12/2022) to see how and where forms of gentle density have (or have not) been built across the city during this period. At any point in time, building permits can either be active (i.e. build in progress), cancelled, or closed. Those that are closed, we can assume construction has finished. We counted building permits by the year they were closed for the following two types of gentle density construction, to then chart their trends over time.
			</p>
			
			<h3><span class="textSecondary">Secondary Suites</span></h3>
			<div class="typeWrapper">
				<div class="isometric-mobile"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
				<div class="typeText"><p>
					Sub-dividing an existing residential structure creating one or more additional dwelling units. The most common form is converting a basement into a separate apartment, but this can include other types of conversions as well (e.g. converting from a duplex to a triplex). These conversions may or may not include building additions (i.e. expanding the volume) of the structure.
				</p></div>
				<div class="isometric"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
			</div>

			<h3><span class="textLaneway">Rear Yard Suites</span></h3>
			<div class="typeWrapper">
				<div class="isometric-mobile"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
				<div class="typeText"><p>
					Building a small detached dwelling unit that is located on the same property as a single-family home. They are often called Accessory Dwelling Units (ADUs) or Garden Suites. Toronto legalized rear year suites that abut laneways in ??/2018 (these can include garage conversions) and then in all other residentially zoned neighbourhoods in ??/2022 (i.e. for residential properties without laneways).
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
				The construction of secondary suites hovered between 100 and 120 per year, and then jumped in 2020.
			</p>
			<p>
				While Laneway suites were legalized in 2018, none were completed according to building permit data until 2020 and only a few dozen since then. Almost all concentrated in pre-war Toronto, where most of the laneways in the city are located (post-war neighbourhoods tend to not have laneways with garages facing the street). 
			</p>
			<p>
				The completion of secondary suites and rear-year suites is quite lackluster given the need for housing in Toronto. Summing the bars above, only QQQ secondary suites and QQQQ rear-yard suites have been built in Toronto in this 10 year period. Recent QQQQ that Toronto needs to build QQQ more dwelling units in the next QQQQ years. 
			</p>
			<p>
				There are QQQ number of gentle density projects in process though. There are . These are at various stages 
			</p>

		</div>

	</div>

	<div class="background-white">

		<div class="text">
			
			<p>
				To explore further, we map where secondary suites and rear year suites have been built in the city from 2013 to 2022. 
			</p>
			<p>	
				These highlight clustering of development in pre-war neighbourhoods just east and particularly west of the downtown core. All rear yard suites cluster in these neighbourhoods since these are where the majority of the City's laneways are located (post-war development focused garage construction towards the street rather than to a back laneway like pre-war housing). 
			</p>
			<p>
				There is far less gentle density construction in the centre of the city, despite this area mostly consisting of single-detached homes. This part is home to some of the city's wealthiest neighbourhoods. 
			</p>
			
		</div>
		
	</div>

	<Map/>

	<div class="background-white">

		<div class="text">
			<p>
				More text?
			</p>
		</div>
		
	</div>

</main>
