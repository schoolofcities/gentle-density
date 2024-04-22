<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";

	import Map from "./lib/MapZoning.svelte";



</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('../gentle-density/blueprint-background-loss.png');">

		<div class="title">
			<h1>
				Zoning Changes to Toronto's Multi-Tenant Houses
			</h1>
			<h2>
				How changes in the zoning for Toronto's multi-tenant houses can encourage density
			</h2>
			<h2>
				
			</h2>
			<p>Qi-Sheng Chen</p>
			<p>April 2024</p>
		</div>

	</div>


	<div class="arrow">
		<p>▼</p>
	</div>

	<div class="text">

		<p>
			On March 31, 2024, a new regulatory framework for Multi-Tenant Houses, or Rooming Houses, came into effect.
			This new regulatory framework was adopted by the Toronto City Council on December 14, 2022, and the Zoning
			Bylaw was amended to permit multi-tenant houses across Toronto. As part of this new framework, all operators
			of multi-tenant houses are now required to obtain a license and must meet consistent standards as described
			in the new Multi-Tenant Houses Licensing Bylaw, which also introduces regular oversight and effective enforcement.
			You can read more about the new regulatory framework
			<a href="https://www.toronto.ca/community-people/housing-shelter/multi-tenant-rooming-houses/new-framework-for-multi-tenant-rooming-houses/">here</a>. 
		</p>

		<p>
			Before the implementation of this new framework, multi-tenant houses were only permitted in the former cities of
			Toronto, York, and Etobicoke (as lodging houses). Multi-tenant and lodging houses in the former City of Toronto
			and Etobicoke were required to be licensed, while York did not require such licencing. The former cities of East
			York, North York, and Scarborough did not permit multi-tenant houses at all. 
		</p>
		
		<p>
			A multi-tenant house or rooming house as per the previous (2022) Zoning Bylaw explained that it was a “building
			in which living accommodation is provided for more than [two (C areas) or 3 (A & B areas)] persons in separate
			rooms, each of which may have food preparation facilities or sanitary facilities, but not both. A group home,
			residential care home, nursing home, retirement home, seniors community house, religious residence, student residence,
			tourist home, or hotel is not a rooming house.” 
		</p>

		<p>
			Below is a map of Toronto of rooming house following the 2022 zoning, indicating where multi-tenant houses were
			permitted by their maximum number of rooms used for living accommodation. As the Zoning Bylaw indicates that each
			person must have their own separate room for living accommodation, we assume that areas A and C have a maximum of
			10 rooms. 
		</p>
	</div>



	<Map layer="old"/>





	<div class="text">
		<p>
			Then we have a map updated for the new regulatory framework, also indicating zoning areas by the maximum number
			of rooms permitted in a multi-tenant house. In the new framework, the former cities of Etobicoke and North York
			and Scarborough are permitted rooming houses up to six rooms. The former cities of Toronto, East York, and York
			are permitted 6, 12, or 25 rooms depending on the zoning code and other variables. 
		</p>
	</div>

	<Map layer="new"/>

	<div class="text">
		<p>
			By comparing these two maps, we can see there have been some significant changes in the areas that permit multi-tenant
			houses and the maximum number of rooms for the multi-tenant houses. 
		</p>
		<p>
			The largest change is that multi-tenant houses are now permitted in several zoning areas in the former cities of
			North York, East York, and Scarborough, all of which previously did not permit rooming houses. The inclusion of
			the residential areas of these 3 former cities increased the total land permitting rooming houses up by (192.3)
			km2. Both North York and Scarborough now permit rooming houses with a maximum of 6 rooms. In addition to
			permitting rooming houses with a max of 6 rooms, East York also has zoning areas with permission for up to
			12 and 25 rooms. 
		</p>
		<p>
			The former city of Etobicoke has also amended many residentially zoned areas to permit multi-tenant houses, with
			a net total increase of area permitting multi-tenant houses with 6 maximum rooms, from (4.3) km<sup>2</sup> to (56.3) km<sup>2</sup>. 
			However, this net total increase came at the cost of reducing the cap on number of rooms of its already permissible
			areas from a maximum of 10 rooms to 6 rooms. At this time it is not clear as to which these areas had their maximum
			number of rooms reduced by 4 rather than increased by 2, to match the new cap intervals of the new regulatory
			framework. It would not be unprecedented, as in the former city of York, similar changes were seen for the areas
			previously allowing a maximum of 10 rooms—some of these were reduced to a maximum of 6 rooms, while others increased
			to 12 rooms. Other small changes in York were all increases, with residential areas previously not permitting
			multi-tenant houses now allowing up to 6, 12, and 25 rooms. 
		</p>
		<p>
			For the former city of Toronto, there were very few changes, as most of the permissions were carried over in the new
			framework. Some areas in former Toronto previously not permitting rooming houses or rooming houses of a maximum of
			12 rooms now allow up to 25 rooms. 
		</p>
		<p>
			Overall, there was an increase of total area zoned to permit multi-tenant houses, from (46.7) km<sup>2</sup> to (323.1) km<sup>2</sup>, or
			by almost 600% (591.8%). The area permitting up to a maximum of 6 rooms increased by (1072.2) %, max 12 rooms by (30.6) %,
			and max 25 rooms by (23.9) %. Multi-tenant houses with up to 10 rooms were eliminated entirely, either converted up to
			12 rooms or down to 6 rooms, most notably in Etobicoke where all max 10 rooms were reduced to max 6 rooms, meaning 100%
			of the max 10 rooms areas were lost. 
		</p>
	</div>


</main>




<style>
	
	.red {
		color: #DC4633;
	}

</style>