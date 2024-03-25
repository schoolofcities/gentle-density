<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";

	import BarChartLoss from "./lib/BarChartLoss.svelte";
	import Map from "./lib/MapTorontoLoss.svelte";



</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />

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
			<p>January 2024</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				Many Canadian cities are changing their bylaws to allow for more gentle density. For example, the City of Toronto now allows up to four units per lot in residential zones. Hamilton allows the conversion of single-family homes into up to four units. On the West Coast, cities like Victoria allows between four and six units per lot. Vancouver also allows up to six units per lot, and that number could be increased to up to eight units for purpose-built rentals.  
			</p>
			<p>
				Why are cities making these changes, and why are they targeting more gentle density?  
			</p>
			<p>
				Such changes came into place in response to the current housing crisis, and as relatively easy and fast way to provide more housing supply that answers to the diverse housing needs. In addition to providing fast supply, such changes also generate less of a carbon footprint by utilizing existing buildings and infrastructure and by using fewer new materials to create more units. Gentle density reduces sprawl, uses urban space more efficiently, and creates more walkable, and connected neighborhoods.  In other words, gently densifying neighbourhoods can provide more sustainable communities and can create more inclusive, diverse, and resilient community fabric, all while striking the balance between growth and preservation.   
			</p>
			<p>
				<b>But how often is the opposite happening? How often is a city losing dwelling units due to <u><span class="red">reno-ductions</span></u> of small multi-family structures such as duplexes and triplexes, into single-family homes? </b>
			</p>
			<p>
				To try to answer this, we looked at <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/" target="_blank">building permit application data</a> in Toronto, flagging all records where a multi-family residential structure was converted into a structure with fewer dwelling units - for example, a duplex being converted into a single-family home or a triplex being converted into a duplex. Specifically, we first filtered only for residential projects, and then compared two columns; "CURRENT_USE" and "PROPOSED_USE". We also tried to validate our findings by looking at the "DESCRIPTION" column of each filtered record, which describes in varying levels of detail the work being done. 
			</p>
			<p>
				The main limitation with the City of Toronto's building permit data is that the inputs for the "CURRENT_USE" and "PROPOSED_USE" columns are not standardized: i.e. it would appear that permit applicants are able to include whatever information they want when they apply for a building permit, and the data are not classified when being inputted into the database. There are hundreds of unique values in each of these two columns, many pertaining to the same type of use but with different spellings (e.g. "Detached SFD", "Detached-Sfd", "Sfd - Detached", etc.). So it is likely that we are underreporting the true number of reno-ductions, as a result of incorrectly-inputted information and records missed by us during the analysis (we tried our best!). The following results should therefore be thought of as more of an exploratory analysis rather than exact numbers. 
			</p>
			
		</div>

	</div>

	<div class="line-chart">
		<BarChartLoss/>
	</div>

	<div class="text">
		<p>
			Based on this building permit data, we conclude that between 2017 and 2023 the City of Toronto has lost at least 200 units due to the conversion of multi-family homes into single-family homes, an average of 28 units per year. The trend seems to have dropped in 2021, then picked up again over the past two years. There has been an increase in reno-ductions from just 22 in 2021 to 43 in 2023, almost doubling in this two year period. These numbers are quite a bit lower than <a href="https://schoolofcities.github.io/gentle-density/toronto-building-permits" target="_blank">the number of rear-yard and secondary suites built in Toronto</a> during the same time period. 
		</p>
		<p>
			We've also plotted each reno-duction identified by us on a map of Toronto. Each point is a reno-duction that occurred between 2017 and 2023. Clicking on a point will display below the details of the building permit and the change that occurred.
	</div>

	<Map/>

	<div class="text">
		<p>
			There is a clear concentration of reno-ductions in the south-central part of the city – an area that historically has allowed for multi-family dwellings (many of the city's low-density residential neighbourhoods have only recently been permitted for multiplexes). Many of the central areas where we are seeing a greater clustering of reno-ductions have gentrified / are gentrifying, and have undergone <a href="https://schoolofcities.github.io/urban-growth-canada/1996-to-2021#population" target="_blank">population loss</a> over long periods of time.
		</p>
	</div>
	<div class="text">
		<h3>Data & Methods</h3>
		<p>
			Our filtered building permit dataset can be downloaded <a href="./lost-units-2017-2023.geojson" target="_blank">here</a>. The code used to create this webpage is on <a href="https://github.com/schoolofcities/gentle-density" target="_blank">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Maplibre, and D3.
		</p>
		<p>
			The data filtering process was conducted as follows: After taking the original permit data, it was filtered out through Python to only show residential units. Since many buildings had several permits for the same project, all multiples were removed to only show one permit per project. To identify loss in units we used the current and proposed use columns in the permits file. These columns don't seem to have a system to them so it proved difficult to write a script to identify them. For this reason we had to manually go through each row and look at whether or not the permit changed into anything else, and if that change led to a loss in units. For example, a permit may have a current use as “triplex” but its proposed use is “single family home”, in this case there was a loss of 2 units. A new column was also added to show the apparent decrease in units, and all other permits that did not have a loss of units were then removed. There was a column already in the dataset noting change in units, but it was very sparse and unreliable upon initial inspection, so we created our own.
		</p>
	</div>


</main>




<style>
	
	.red {
		color: #DC4633;
	}

</style>