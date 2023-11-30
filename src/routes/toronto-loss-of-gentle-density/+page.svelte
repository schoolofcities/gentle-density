<script>

	import "../assets/styles.css";

	import Top from "../lib/TopSofC.svelte";

	import BarChartLoss from "../lib/BarChartLoss.svelte";
	import Map from "../lib/MapTorontoLoss.svelte";



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

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('https://schoolofcities.github.io/gentle-density/blueprint-background.png');">

		<div class="title">
			<h1>
				Loss of <span class="italic">Gentle Density</span> in Toronto
			</h1>
			<h2>
				via building conversions
			</h2>
			<h2>
				
			</h2>
			<p><a href="">Remus Herteg</a>, <a href="https://jamaps.github.io">Jeff Allen</a>, <a href="https://www.linkedin.com/in/ahmad-al-musa/">Ahmad Al-Musa</a></p>
			<p>December 2023</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				High level on the importance of gentle density and diverse forms of housing in a neighbourhood, particularly duplexes, triplexes, etc.
			</p>
			<p>
				But how often is a city losing dwelling units due to conversion of small multi-family structures such as duplexes and triplexes into single-family homes?
			</p>
			<p>
				To try to answer this, we looked at building permit application data in Toronto, flagging all records where a multi-family residential strucutre was converted into a structure with fewer dwelling units. For example a duplex being converted into a single-family home or a triplex being converted into a duplex. 
			</p>
			<p>
				Describe data, filtering process, and limitations, what could be missing, etc.
			</p>
			<p>
				How often are ..
			</p>
			
		</div>
		
		<!-- Chart over time -->

		<!-- Describ -->

		<!-- Comparison to 'Gain' based on previous data -->

		<!-- Describe -->

		<!-- Map -->

		<!-- Describ -->

	</div>

	<div class="line-chart">
		<BarChartLoss/>
	</div>

	<div class="text">
		<p>
			Hello I am some text describing the above chart
		</p>
		<p>
			We've also plotted them on a map!
	</div>

	<Map/>

</main>




<style>
	

</style>