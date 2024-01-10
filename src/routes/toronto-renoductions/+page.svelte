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

	<title>Reno-ductions: Loss of Gentle Density in Toronto</title>
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
				Reno-ductions
			</h1>
			<h2>
				Loss of <span class="italic">Gentle Density</span> in Toronto
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://jamaps.github.io" target="_blank">Jeff Allen</a>, <a href="">Remus Herteg</a>,  <a href="https://www.linkedin.com/in/ahmad-al-musa/" target="_blank">Ahmad Al-Musa</a></p>
			<p>January 2023</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

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
				<b>But how often is the opposite happening? how often is a city losing dwelling units due to <u><span class="red">reno-ductions</span></u> of small multi-family structures such as duplexes and triplexes being converted into single-family homes? </b>
			</p>
			<p>
				To try to answer this, we looked at <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/" target="_blank">building permit application data</a> in Toronto, flagging all records where a multi-family residential structure was converted into a structure with fewer dwelling units. For example, a duplex being converted into a single-family home or a triplex being converted into a duplex. Specifically we filtered only for residential projects and then compared two columns, "CURRENT_USE" and "PROPOSED_USE". We also tried to validate our findings by looking at the "DESCRIPTION" column of each filtered record, which describes in varying level of detail the work being done.
			</p>
			<p>
				The main limitation with the City of Toronto's building permit data is that the inputs for the "CURRENT_USE" and "PROPOSED_USE" columns are not standardized, i.e. it seems like applicants are able input whatever they want when they apply for a building permit and the data are not classified when being inputted into this database. There are 100s of unique values in each of these two columns, many pertaining to the same type of use, but with different spellings (e.g. "Detached SFD", "Detached-Sfd", "Sfd - Detached", etc.). So it is likely that we are under reporting the true number of reno-ductions due to a combination of applicants inputting incorrect information and our own error of missing some records (we tried our best!). But therefore, the following results should be thought of as more of an exploratory analysis rather than exact numbers.
			</p>
			
		</div>

	</div>

	<div class="line-chart">
		<BarChartLoss/>
	</div>

	<div class="text">
		<p>
			Based on this building permit data, we find that between 2017 and 2023 the City of Toronto has lost at least 200 units due to converting multi-family homes into single-family homes, with an average of 28 units per year. The trend seems to have dropped down in 2021 then it picked up again over the past three years. There has been an increase in reno-ductions from just 22 in 2021 to 43 in 2023, almost doubling in this two year period. These numbers are still quite a bit lower than <a href="https://schoolofcities.github.io/gentle-density/toronto-building-permits" target="_blank">the number of rear-yard and secondary suites built in Toronto</a> during the same time period. 
		</p>
		<p>
			We've also plotted each reno-duction that we've identified on a map of Toronto. Each point is reno-duction that occurred between 2017 and 2023. Clicking on a point will print out below the details of the building permit and the change that occurred.
	</div>

	<Map/>

	<div class="text">
		<p>
			There is a clear concentration of reno-ductions that have occurred in the south-central part of the City, the older part of Toronto, that historically have allowed for multi-family dwellings (rather than only single-family homes). Only until recently have multi-plexes been allowed in much of the City's low-density residential neighbourhoods. Many of these central areas that we see greater clustering of reno-ductions have gentrified / are gentrifying. They have also undergone <a href="https://schoolofcities.github.io/urban-growth-canada/1996-to-2021#population" target="_blank">population loss</a> over longer periods of time.
		</p>
	</div>
	<div class="text">
		<h3>Data & Methods</h3>
		<p>
			Our filtered dataset can be downloaded <a href="./lost-units-2017-2023.geojson" target="_blank">here</a>. The code used to create this webpage is on <a href="https://github.com/schoolofcities/gentle-density" target="_blank">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Mapbox, and D3.
		</p>
	</div>


</main>




<style>
	
	.red {
		color: #DC4633;
	}

</style>