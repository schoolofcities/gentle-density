<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";

	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';

	let data = [];

	async function loadData() {
        try {
            const response = await fetch('conversions-canada-2018-to-2024.csv');
            const csvData = await response.text();
            data = csvParse(csvData);
        } catch (error) {
            console.error('Error loading CSV data:', error);
        }
    }

    onMount(() => {
        loadData();
    });

	$: console.log(data);


</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<title>Residential Conversions Across Canada | School of Cities</title>
    <meta name="description" content="Analyzing how often Toronto is losing dwelling units due to reno-ductions of small multi-family structures such as duplexes and triplexes being converted into single-family homes">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Reno-ductions: Loss of Gentle Density in Toronto" />
    <meta property="og:description" content="Analyzing how often Toronto is losing dwelling units due to reno-ductions of small multi-family structures such as duplexes and triplexes being converted into single-family homes" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/toronto-renoductions" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-renoductions-toronto.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/toronto-renoductions" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Reno-ductions: Loss of Gentle Density in Toronto" />
    <meta name="twitter:description" content="Analyzing how often Toronto is losing dwelling units due to reno-ductions of small multi-family structures such as duplexes and triplexes being converted into single-family homes" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-renoductions-toronto.png" /> 

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('../gentle-density/blueprint-background-loss.png');">

		<div class="title">
			<h1>
				Residential Conversions Across Canada
			</h1>
			<h2>
				2018 to 2023
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://jamaps.github.io" target="_blank">Jeff Allen</a>
			<p>July 2024</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				Canada needs housing. Sprawl is generally bad. Intensificaiton better. One form, on the lower end of the density scale, is coversions and expansion of existing housing to hold more dwelling units. This can take the form of a  single-family home adding a basement apartment or a du-plex undergoing additions to be converted into a tri-plex or four-plex
			</p>
			<p>
				Summary of Stats Can survey data
			</p>
			<p>
				Here, I take a look at the 5 years of this data. Overall across Canada
			</p>
			
		</div>

	</div>


</main>




<style>

</style>