<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";

	import Map from "./lib/MapZoning.svelte";

	import svgMap from "../../assets/toronto/rooming-houses-etobicoke-york.svg";

	import oldOverlay from "../../assets/toronto/zoning_rooming_house_overlay_old.geo.json";
	import newOverlay from "../../assets/toronto/rooming_house_overlay_new_mapshaper30.geo.json";

</script>


<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<title>Toronto Rooming House Zoning | School of Cities</title>
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

	<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />

</svelte:head>





<Top/>

<main>

	<div class="blueprint" style="background-image: url('../gentle-density/blueprint-background.png');">

		<div class="title">
			<h1>
				Toronto's Opening Up to Multi-Tenant Houses
			</h1>
			<h2>
				Zoning for multi-tenant houses as part of the solution to Toronto's housing crisis
			</h2>
			<h2>
				
			</h2>
			<p>Qi-Sheng Chen</p>
			<p>May 2024</p>
		</div>

	</div>


	<div class="arrow">
		<p>▼</p>
	</div>

	<div class="text">
		<p>
			On March 31, 2024, a new regulatory framework for Multi-Tenant Houses, or Rooming Houses, came into effect.
			This <a href="https://www.toronto.ca/community-people/housing-shelter/multi-tenant-rooming-houses/new-framework-for-multi-tenant-rooming-houses/" target="_blank">new regulatory framework</a> was adopted by the Toronto City Council on December 14, 2022, and the Zoning
			Bylaw was amended to permit multi-tenant houses across Toronto. As part of this new framework, all operators
			of multi-tenant houses are now required to obtain a license and must meet consistent standards as described
			in the new Multi-Tenant Houses Licensing Bylaw, which also introduces regular oversight and effective enforcement.
		</p>
		<p>
			Before the implementation of this new framework, multi-tenant houses were only permitted in the former cities of
			Toronto, York, and Etobicoke (as lodging houses). Multi-tenant and lodging houses in the former City of Toronto
			and Etobicoke were required to be licensed, while York did not require such licensing. The former cities of East
			York, North York, and Scarborough did not permit multi-tenant houses at all. 
		</p>
		<p>
			This was from the 2022 Zoning Bylaw, which defined a multi-tenant house or rooming house as a “building
			in which living accommodation is provided for more than [two (C areas) or three (A & B areas)] persons in separate
			rooms, each of which may have food preparation facilities or sanitary facilities, but not both. A group home,
			residential care home, nursing home, retirement home, seniors community house, religious residence, student residence,
			tourist home, or hotel is not a rooming house.” 
		</p>
		<p>
			Below is a map of Toronto showing the old zoning bylaw, indicating where multi-tenant houses were permitted by
			their maximum number of rooms used for living accommodation. As the 2022 Zoning Bylaw indicates that each person
			must have their own separate room for living accommodation, it is assumed that areas A and C have a maximum of 
			10 rooms, as the buildings in these areas are defined to have no more than 10 occupants. 
		</p>
		<h3>Old zoning for multi-tenant housing</h3>
		<i>Before March 31, 2024</i>
	</div>

	

	<Map layer="old" oldOverlay={oldOverlay} newOverlay={newOverlay}/>

	<div class="text">
		<p>
			Under the new regulatory framework, however, the former cities of Etobicoke, North York, and Scarborough are
			permitted multi-tenant houses up to 6 rooms. The former cities of Toronto, East York, and York are permitted
			6, 12, or 25 rooms depending on the zoning code and other variables. The map below shows the updates to the zoning
			by maximum number of rooms permitted in a multi-tenant house (based on city staff description). 
		</p>
		<h3>New zoning for multi-tenant housing</h3>
		<i>After March 31, 2024</i>
	</div>

	<Map layer="new" oldOverlay={oldOverlay} newOverlay={newOverlay}/>

	<div class="text">
		<p>
			By comparing these two maps, we can see there have been two types of significant change: change in the areas that permit
			multi-tenant houses, and change in the maximum number of rooms permitted for the multi-tenant houses in those areas.
		</p>
		<p>
			The largest and most visible change is that multi-tenant houses are now permitted in the residential areas in the
			former cities of North York, East York, and Scarborough, all of which previously did not permit multi-tenant houses.
			The inclusion of the residential areas of these 3 former cities increased the total land permitting multi-tenant
			houses up by 192.3 km². Both North York and Scarborough now permit multi-tenant houses with a maximum of
			6 rooms. For East York, in addition to permitting up to 6 rooms, some areas were also zoned to permit up to 12 and 25 rooms. 
		</p>
		<p>
			In the former cities of Toronto, Etobicoke, and York, which all previously permitted multi-tenant houses in some form,
			there were a few changes. For the former city of Toronto, there were very few changes, as most of the zoning rules were
			carried over into the new framework. There are some areas in former Toronto that either previously did not allow rooming
			houses, or had permission for a maximum of 12 rooms, which now allow up to 25 rooms. There are more changes to Etobicoke
			and York compared to Toronto, and these can be seen in the map below, which visualizes the change in max rooms between
			the old zoning bylaw and new zoning bylaw. 
		</p>
		<h3>Change in zoning for multi-tenant housing</h3>
	</div>
	
	<Map layer="change" oldOverlay={oldOverlay} newOverlay={newOverlay}/>
	
	<div class="text">
		<p>
			Both former cities of Etobicoke and York added new areas that would permit multi-tenant houses, with Etobicoke adding
			areas that only allowed for a maximum of 6 rooms, and York adding areas permitting all three maximums of 6, 12, and 25
			rooms. These two former cities were the only ones in the older zoning bylaw that allowed a maximum of 10 rooms in their
			multi-tenant houses, but under the new framework, this cap of 10 rooms was eliminated, and either reduced to 6 rooms or
			increased to 12 rooms. 
		</p>
		<p>
			Of particular interest is Etobicoke, which saw a net total increase in residential areas permitting multi-tenant houses,
			from 4.3 km² to 56.3 km², but this appeared to be at the cost of reducing all of its max 10 room
			areas to 6 rooms. At this time, it is not clear as to why all the max 10 room areas in Etobicoke were reduced by 4 rather
			than having some increased by 2 to match the new cap intervals of the new regulatory framework. It would not be unprecedented
			as in York, those areas previously allowing a maximum of 10 rooms saw both increases and decreases in the cap. 
		</p>
		<p>
			Below is a map of Etobicoke and York to highlight that the changes that occurred for the areas that previously zoned
			for a maximum of 10 rooms in their multi-tenant houses. 
		</p>
		
		
		<div style="position: relative">
			<div id={"legend-" + "etobicoke-york-change"} class="legend">
				<h4>Change in max</h4>
				<h4>rooms allowable</h4>
				<div><span style="background-color: #e369b4"></span>-4 (10 → 6)</div>
				<div><span style="background-color: #acdb7b"></span>+2 (10 → 12)</div>
			</div>
		</div>
		<img src="{svgMap}"/>

		<p>
			Overall, there was an increase of total area zoned to permit multi-tenant houses, from 46.7 km² to 323.1 km²,
			or by almost 600% (591.8%). The area permitting up to a maximum of 6 rooms increased by 1072.2%, max 12 rooms by 30.6%,
			and max 25 rooms by 23.9%. Multi-tenant houses with up to 10 rooms were eliminated entirely, either converted up to
			12 rooms or down to 6 rooms, most notably in Etobicoke where all max 10 rooms were reduced to max 6 rooms, meaning 100%
			of the max 10 rooms areas were lost. 
		</p>

		<h3>
			Implications
		</h3>
		<p>
			With the dramatic increase in area available to license as multi-tenant housing, it appears that the City of Toronto is
			looking to enrich the diversity of housing options available across the city, namely to increase the amount of low-income
			housing and increase density in residential areas. Multi-tenant housing is one of the most affordable housing options
			available for single people (<a href="https://www.cbc.ca/news/canada/toronto/rooming-house-regulation-begins-1.7159181">Jeffords, 2024</a>). 
		</p>
		<p>
			With this new framework, the City of Toronto will be able to better support both the tenants and landlords of multi-tenant
			houses, as the new regulations will hopefully bring multi-tenant houses up to code and give tenants more rights when they
			seek support. With the new regulatory framework, owners of multi-tenant houses will now have to get a licence, will be
			subject to inspections, will need a property maintenance plan, and have a process for tenants to request service. While it
			will take time for the full framework to come into effect, as well as for landlords to adapt to the new framework, it is
			clear that the City is trying to make visible the unlicensed multi-tenant houses and harmonize the old multi-tenant housing
			bylaws that were not well adapted after amalgamation (<a href="http://neighbourhoodchange.ca/documents/2018/04/campsie-toronto-rooming-houses.pdf">Campsie, 2018</a>). 
		</p>
		<p>
			There are some concerns that the new regulatory framework will cause the landlords to pass on the costs of renovating up to
			code and licensing onto the tenants, which is a difficult situation as tenants of multi-tenant houses are often low-income
			individuals (<a href="https://www.cbc.ca/news/canada/toronto/rooming-house-regulation-begins-1.7159181">Jeffords, 2024</a>).
			Another concern is that tenants may be evicted in order for the multi-tenant houses to come into compliance, as some current
			licensed or unlicensed multi-tenant houses may exceed their maximum number of permitted	dwelling rooms based on their zoning
			that has changed under the new framework (<a href="https://www.cbc.ca/news/canada/toronto/rooming-house-regulation-begins-1.7159181">Jeffords, 2024</a>).
			These concerns may cause unintended consequences, such as landlords continuing to run their multi-tenant houses unlicensed
			and underground to avoid both the costs of renovation and eviction of their tenants. 
		</p>
		<p>
			The City has made funds available to help with renovations to meet the new standards and to reduce the chance of passing
			down these costs to tenants, but there is no funding that would cover operational costs of the multi-tenant houses that
			provide meals and other services for the personal care and health of residents
			(<a href="https://www.cbc.ca/news/canada/toronto/scarborough-group-house-funding-1.7162150">Jones, 2024</a>).
			The City has also promised to work closely with owners of multi-tenant houses in the suburbs with more than six dwelling
			rooms to ensure that they are not shut down and brought into compliance, and will look at each multi-tenant house on a
			case by case basis (<a href="https://www.cbc.ca/news/canada/toronto/rooming-house-regulation-begins-1.7159181">Jeffords, 2024</a>). 
		</p>
		<p>
			For more learnings and a deeper dive into the history and challenges behind Toronto’s rooming houses, please check out the
			<a href="http://neighbourhoodchange.ca/documents/2018/04/campsie-toronto-rooming-houses.pdf">Neighbourhood Change Research
				Partnership research paper by Philippa Campsie from 2018</a>.
		</p>
	</div>

</main>


<!-- if the screen width is < 400, change the legend position to below the svg map; not sure how to do this -->


<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 75%;
		height: auto;
	}

	.legend {
		background-color: #fff;
		height: 70px;
		border-radius: 3px;
		bottom: 25px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		font-family: UbuntuMonoRegular;
		font-size: 14px;
		padding: 10px;
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 1;
		color: var(--brandDarkBlue);
		line-height: 17px;
	}

	.legend h4 {
		margin: 0 0 10px;
		margin-bottom: 5px;
		margin-top: -5px;
	}

	.legend div span {
		/* border-radius: 50%; */
		display: inline-block;
		height: 10px;
		margin-right: 5px;
		width: 10px;
	}
</style>