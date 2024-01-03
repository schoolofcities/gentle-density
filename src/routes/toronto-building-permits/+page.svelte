<script>

	import BarChartSecondary from "../lib/BarChartSecondary.svelte";
	import BarChartLaneway from "../lib/BarChartLaneway.svelte";
	import Map from "../lib/MapTorontoSecondaryLaneway.svelte";

	import Top from "../lib/TopSofC.svelte";
	import '../assets/styles.css';

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

    <title>Tracking Gentle Density in Toronto</title>
    <meta name="description" content="Visualizing a decade (2013 to 2023) of Secondary Suite and Laneway / Garden Suite building permits in Toronto">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Tracking Gentle Density in Toronto" />
    <meta property="og:description" content="Visualizing a decade (2013 to 2023) of Secondary Suite and Laneway / Garden Suite building permits in Toronto" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/toronto-building-permits" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/toronto-building-permits" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Tracking Gentle Density in Toronto" />
    <meta name="twitter:description" content="Visualizing a decade (2013 to 2023) of Secondary Suite and Laneway / Garden Suite building permits in Toronto" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card.png" /> 

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('https://schoolofcities.github.io/gentle-density/blueprint-background.png');">

		<div class="title">
			<h1>
				Tracking <span class="italic">Gentle Density</span> in Toronto
			</h1>
			<h2>
				Visualizing Building Permit Data From 2013 To 2023
			</h2>
			<h2>
				
			</h2>
			<p><a href="https://jamaps.github.io">Jeff Allen</a> and <a href="https://www.linkedin.com/in/ahmad-al-musa/">Ahmad Al-Musa</a></p>
			<p>Created February 2023</p>
			<p>Updated January 2024</p>
		</div>

	</div>

	<div class="background-white">

		<div class="arrow">
			<p>▼</p>
		</div>

		<div class="text">

			<p>
				Swaths of Toronto consists of low-density single family homes (these lands are often called the <a href="https://schoolofcities.github.io/yellowbelt-canadian-cities-2022/">Yellowbelt</a> due to the historical exclusionary zoning of these neighbourhoods). 
				There has been a big push among housing advocates, academics, and planners to increase housing supply in these neighbourhoods via building <a href="https://missingmiddlehousing.com/">missing middle</a> housing (a range of housing types that fall between single-family homes and high-rise apartments), in aims to provide more housing options and to make our urban areas more affordable, inclusive, and sustainable. 
			</p>
			<p>
				Around 2018-2019, the City of Toronto started taking accelerating actions to increase missing middle housing supply, in what is now the <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/">Expanding Housing Options</a> program. 

				At the smaller-scale of the missing middle are 
				<a href="https://affordablemissingmiddle.ca/">gentle density</a> (or "missing little") strategies, which refers to owner-led efforts to build additional dwellings within their existing parcel of land as citizen developers. 
				Some of these accelerated actions addressed Secondary Suites, allowed Laneway Suites and Garden Suites, and most recently starting May 2023, allowed multiplexes across the City’s residential zones. You can read more about the regulatory timeline, along with implementation stories <a href="https://affordablemissingmiddle.ca/missing-little-toronto">here</a>.
			</p>
			<p>
				Gentle density can increase property value and provide supplementary income for owners, but importantly, in aggregate, can incrementally scale up the density of a neighbourhood, allow for intergenerational living, and provide needed housing, particularly for those unable to afford larger homes. Relative to larger developments (e.g. larger multi-unit apartments and condominiums), gentle density is more compatible with the scale and character of existing neighbourhoods. Gentle density development is thus often seen as an approach to increase the housing supply in a way that is less disruptive to existing communities but can still help create more walkable, liveable neighbourhoods, that use existing infrastructure and services, which can save tax payers' money and reduce harmful urban sprawl.
			</p>
			<p>
				<b>But what is the recent uptake in gentle density housing in the City of Toronto?</b>
			</p>
			<p>	
				To answer this, we've looked at 10+ years of <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/">building permit data</a> in the City of Toronto (from 01/2013 to 01/2024) to see how and where forms of gentle density have (or have not) been built across the city during this period. At any point in time, building permits can either be active (i.e. building in progress), cancelled, or closed. Those that are closed, we can assume construction has finished. We first counted building permits by the year they were closed for the following two types of gentle density construction, to then chart their trends over time. 
			</p>
			
			<h3><span class="textSecondary">Secondary Suites</span></h3>
			<div class="typeWrapper">
				<div class="isometric-mobile"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
				<div class="typeText"><p>
					Are “self-contained living accommodation for an additional person or persons living together as a separate single housekeeping unit, in which both food preparation and sanitary facilities are provided for the exclusive use of the occupants of the suite, located in and subordinate to a dwelling unit.” (Click <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/secondary-suites/overview-secondary-suites/">here</a> for further information from the City of Toronto)
				</p>
				</div>
				<div class="isometric"><img src = {isometricSecondary} alt="isometricSecondary"/></div>
			</div>

			<p>	
				The most common form is converting a basement into a Secondary Suite separate apartment, but this can include other types of conversions as well (e.g. carving out a Secondary Suite within the main dwelling unit of a Single Detached, Semi Detached or a Townhouse  converting from a duplex to a triplex). The creation of these suites through conversions may or may not include building additions (i.e. expanding the volume) of the structure. They have been permitted since 2000 city-wide, with some restrictions. It is noteworthy that under the new Multiplex bylaw, Secondary Suites are not allowed in the semi-detached or townhouse portion of a converted four-unit multiplex.
			</p>

			<h3><span class="textLaneway">Rear-Yard Suites</span></h3>
			<div class="typeWrapper">
				<div class="isometric-mobile"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
				<div class="typeText"><p>
					Building a small detached dwelling unit that is located on the same property as a single-family home. They are sometimes called Accessory Dwelling Units (ADUs), Garden Suites, or Laneway Houses. Toronto legalized rear yard suites that abut laneways in 06/2018, called Laneway Suites in city bylaws (these are often garage conversions), and then legalized them in all other residential zones in 02/2022 without the need to abut a laneway. The latter are often called Garden Suites.
 
				</p></div>
				<div class="isometric"><img src = {isometricLaneway} alt="isometricLaneway"/></div>
			</div>

			<h3><span class="textLaneway">Multiplexes</span></h3>
			<p>
				Allowing for multiplexes was passed in May 2023 in neighbourhoods city-wide. However, at the time of writing, it is too early to track their completion from building permit data. We are planning on updating this website, including tracking multiplex development across the city, in mid-2024.
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
				The construction of secondary suites hovered between 100 and 130 per year from 2015 up until 2019. It has since increased steadily, to up to 243 new units created in 2023. While laneway suites were legalized in 2018, none were completed according to building permit data until 2020. While uptake was slow initially, it has since increased. In 2023 there were 102 new laneway and garden suites constructed, more than all prior years combined. 
			</p>
			<p>
				Overall, the completion of secondary suites and rear-yard suites are still quite lacklustre given the need for housing in Toronto, where the expected population growth is about 500,000 from 2023 to 2030. <b>Summing the bars above, only 1,525 secondary suites and 192 rear-yard suites have been built in Toronto from January 2013 to December 2023</b>. 
			</p>
			<p>
				Despite this sluggish uptake to date in Toronto, there are an increasing number of ongoing projects. <b> As of December 31, 2023 there were 684 secondary suite and 706 rear-yard suite building permits that were open and ongoing</b>. These totals are based on counting building permits with unique addresses and that have an initial or revised application date from the six year period of January 2018 to December 2023. However, these numbers are still quite low compared to uptake in other cities like <a href="https://xtown.la/2022/09/20/adus-los-angeles-housing-numbers/"> Los Angeles</a>, where the number of issued ADU permits from 2017 to 2021 was over 25,000.
			</p>
			<p>
				To explore further, we have also mapped below where secondary suites and rear-yard suites have been built in the city from 2013 to 2023, as well as the location of active building permits.
			</p>
			<p>	
				These highlight clustering of development in pre-war neighbourhoods just east and particularly west of the downtown core. Almost all completed rear-yard suites cluster in these neighbourhoods since these are where the majority of the City's laneways are located. Post-war development focused garage construction towards the street rather than to a back laneway like pre-war housing. Looking at the active permits, there are now several popping up elsewhere in more suburban neighbourhoods.
			</p>
			<p>
				One notable pattern is that there is far less gentle density construction in and around North Toronto, despite this area mostly consisting of single-detached homes. This area is home to some of the city's wealthiest neighbourhoods (toggle on the income layer to check this out). Downtown Toronto also only has a few projects, but this is because it is mostly zoned for higher density development.
			</p>
			
		</div>
		
	</div>

	<Map/>

	<div class="text">
		<p>
			According to <a href="https://adusearch.ca/">ADUsearch.ca</a> the estimated number of properties within Toronto that could add internal or external ADUs range between 370,000 to 390,000 lots. This emphasizes the fact that with the current uptake of a humble 1,717, Toronto is barely scratching the surface of hidden housing supply within its existing neighbourhoods. Practical steps need to be taken by all stakeholders to remove the various barriers and to find solutions to make best use of this opportunity to easily provide much-needed dwelling units during the current housing crisis.
 
		</p>
	</div>

	<div class="background-white">

		<div class="text">
			<h3>Data & Code</h3>
			<p>
				Data on the location, type, and status of <a href="https://open.toronto.ca/dataset/building-permits-cleared-permits/">building permits</a> are from the City of Toronto's Open Data portal. To create these charts and maps, we filtered for all permits that were classified as "Second Suite (New)" and "New Laneway / Rear Yard Suite" while being careful not to double count permits that had revisions. However, there may be some error if building permits were misclassified.
			</p>
			<p>
				The historical residential <a href="https://open.toronto.ca/dataset/zoning-by-law/">zoning layer</a> is also from the City's Open Data portal. The single-detached only zones are those classified as [RD] while the other low-density zones are classified as [R, RM, RS, RT]. The latter also include semi-detached, townhouses, and smaller multi-unit dwellings, depending on the zone classification.
			</p>
			<p>
				The location of laneways is also from the City of Toronto's Open Data portal. It was filtered and extracted from the City's <a href="https://open.toronto.ca/dataset/toronto-centreline-tcl/">Centreline</a> dataset.
			</p>
			<p>
				The <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm">income data</a> is from the 2021 Canadian census. The low category are census tracts with a median after-tax household income of less then $75,000, the medium range is between $75,000 and $100,000, and the high is above $100,000.
			</p>
			<p>
				All code used to analyze this data and make this website and its graphics are on <a href="https://github.com/schoolofcities/gentle-density">GitHub</a>. It was built with the help of Python (pandas, geopandas), Svelte, Mapbox, and D3.
			</p>
		</div>
		
	</div>

</main>



<style>
	
	.typeWrapper {
		overflow: hidden;
		display: flex;
	}

	.isometric {
		float: left;
		width: 300px;
	}
	.isometric-mobile {
		display: none;
		width: 300px;
	}

	.typeText {
		float: left;
		max-width: 500px;

	}

	@media only screen and (max-width: 692px) {
		.typeWrapper {
			overflow: hidden;
			display: contents;
		}
		
		.isometric {
			display: none;
		}
		.isometric-mobile {
			display: contents
		}
		
		.typeText {
			float: none;
			max-width: 700px;
		
		}
	}

</style>