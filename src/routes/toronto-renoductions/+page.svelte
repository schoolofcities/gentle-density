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
				Reno-ductions
			</h1>
			<h2>
				Loss of <span class="italic">Gentle Density</span> in Toronto
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://jamaps.github.io">Jeff Allen</a>, <a href="">Remus Herteg</a>,  <a href="https://www.linkedin.com/in/ahmad-al-musa/">Ahmad Al-Musa</a></p>
			<p>December 2023</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				UNDER CONSTRUCTION! PLEASE DO NOT SHARE WITHOUT PERMISSION :)
			</p>

			<p>
				Many Canadian cities are changing their bylaws to allow for more gentle density. For example, the City of Toronto now allows up to four units per lot in residential zones, as of right. Hamilton allows the conversion of single-family homes into up to four units. On the West Coast, cities like Victoria allows between four and six units per lot. Vancouver also allows up to six units per lot, and that number could be increased up to eight units for purpose-built rentals.  
			</p>
			<p>
				Why are cities making these changes, and why are they targeting more gentle density?  
			</p>
			<p>
				Such changes came into place in response to the current housing crisis, and as an easy and fast way to provide more housing supply that answers to the diverse housing needs. In addition to providing fast supply, such changes also provide units with less carbon footprint by utilizing existing buildings and infrastructure and by using less new materials to create more units. Gentle density reduces sprawl, uses urban space more efficiently, and creates more walkable, and connected neighborhoods.  In other words, gently densifying neighbourhoods can provide more sustainable communities and can create more inclusive, diverse, and resilient community fabric, all while striking the balance between growth and preservation.   
			</p>
			<p>
				But how often is the opposite happening? how often is a city losing dwelling units due to conversion of small multi-family structures such as duplexes and triplexes into single-family homes? 
			</p>
			<p>
				To try to answer this, we looked at building permit application data in Toronto, flagging all records where a multi-family residential structure was converted into a structure with fewer dwelling units. For example, a duplex being converted into a single-family home or a triplex being converted into a duplex… 
			</p>
			<p>
				Some more details about the building permit data
			</p>
			
		</div>

	</div>

	<div class="line-chart">
		<BarChartLoss/>
	</div>

	<div class="text">
		<p>
			Between 2017 and 2023 the city has lost around 188 units due to converting multi-family homes into single-family homes, with an average of 27 units per year. The maximum loss of 33 units per year seem to have occurred in 2020 and in 2023. The trend seems to have dropped down in 2021 then it picked up again over the past three years to witness an increase in loss of units from 22 in 2021 to 33 in 2023, indicating a 50% increased loss.  
		</p>
		<p>
			We've also plotted each reno-duction that we've identified on a map of Toronto. Each point is reno-duction that occurred between 2017 and 2023. Clicking on a point will print out below the details of the building permit and the change that occured.
	</div>

	<Map/>

	<div class="text">
		<p>
			Hello I am some text describing the map above and such
		</p>
	</div>


</main>




<style>
	

</style>