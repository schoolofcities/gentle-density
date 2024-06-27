<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";
	import BarTotal from "./lib/BarTotal.svelte";
	import TrendCharts from "./lib/TrendCharts.svelte";
	import BoxPercentChart from "./lib/BoxPercentChart.svelte";


	import { onMount } from 'svelte';
	import { csvParse } from 'd3-dsv';

	let data = [];

	async function loadData() {
        try {
            const response = await fetch('conversions-canada-2018-to-2024.csv');
            const csvData = await response.text();
            data = csvParse(csvData);
			data = data.filter((d) => !d.REF_DATE.includes("2024"));
			data = data.filter((d) => !d.REF_DATE.includes("2018"));
			data.forEach((d) => {
				d.VALUE = parseFloat(d.VALUE);
			});
        } catch (error) {
            console.error('Error loading CSV data:', error);
        }
    }

    onMount(() => {
        loadData();
    });

	let cities = [
		"All Canada",
		"Abbotsford-Mission, British Columbia",
		"Barrie, Ontario",
		"Belleville-Quinte West, Ontario",
		"Brantford, Ontario",
		"Calgary, Alberta",
		"Chilliwack, British Columbia",
		// "Drummondville, Quebec",
		"Edmonton, Alberta",
		"Fredericton, New Brunswick",
		"Greater Sudbury, Ontario",
		"Guelph, Ontario",
		"Halifax, Nova Scotia",
		"Hamilton, Ontario",
		"Kamloops, British Columbia",
		"Kelowna, British Columbia",
		"Kingston, Ontario",
		"Kitchener-Cambridge-Waterloo, Ontario",
		"Lethbridge, Alberta",
		"London, Ontario",
		"Moncton, New Brunswick",
		"Montréal, Quebec",
		"Nanaimo, British Columbia",
		"Oshawa, Ontario",
		"Ottawa-Gatineau, Ontario-Quebec",
		"Québec, Quebec",
		"Peterborough, Ontario",
		// "Red Deer, Alberta",
		"Regina, Saskatchewan",
		"Saguenay, Quebec",
		"Saint John, New Brunswick",
		"Saskatoon, Saskatchewan",
		"Sherbrooke, Quebec",
		"St. Catharines-Niagara, Ontario",
		"St. John's, Newfoundland and Labrador",
		"Thunder Bay, Ontario",
		"Toronto, Ontario",
		"Trois-Rivières, Quebec",
		"Vancouver, British Columbia",
		"Victoria, British Columbia",
		"Windsor, Ontario",
		"Winnipeg, Manitoba"
	]

	

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

	<div class="blueprint" style="background-image: url('../gentle-density/blueprint-background-conv.png');">

		<div class="title">
			<h1>
				Tracking Residential Conversions Across Canada
			</h1>
			<h2>
				An Exploration Building Permit Survey Data (2019 to 2023)
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
				Canada needs housing. Sprawl is generally bad. Intensificaiton better. One form, on the lower end of the density scale, is coversions and expansion of existing housing to hold more dwelling units. 
			</p>
			<p>
				This can take the form of a  single-family home adding a basement apartment or a du-plex undergoing additions to be converted into a tri-plex or four-plex, or a previously non-residential building being converted into residential units. Using much of the existing built/construction material to create new units.
			</p>
			<p>
				Summary of Stats Can survey data
			</p>
			<p>
				Here, I take a look at the 5 years of this data. 
			</p>
			<p>
				Of the new units created via building conversions. YY from single-to-multiple dwellings, YY from multiple-to-multiple conversions, and YY previous non-residential buildings converted to residential units. The chart below shows, by urban region, the total number of new dwelling units created from these types of conversions.
			</p>
			<p>
				Overall across Canada there were 104,425 new dwelling units created via conversions. This is about 7% of all new residential dwelling units created during this period, based on the data recorded in the building permit survey. Here's a distribution, where each square is an urban region.
			</p>

			<BarTotal data={data} cities={cities}/>

		</div>

		<div class="text">

			<h3>New dwellings from building conversions, 01/2019 to 12/2023</h3>

			<p style="font-size: 15px">
				<svg height={15} width={28}>
					<text
						x="14" 
						y="11" 
						text-anchor="middle" 
						font-size="12"
						style="fill: #ab1269;"
					>100</text>
					<line
						x1="0" 
						y1="14"
						x2="28" 
						y2="14" 
						style="stroke: #ab1269; stroke-width: 3;" 
					/>
				</svg>
				Yearly totals
				<svg height={25} width={25}>
					<line
						x1="{5}" 
						y1="{20}" 
						x2="{5}" 
						y2="{25}" 
						style="stroke:#F1C500; stroke-width:5; opacity: 0.42" 
					/>
					<line 
						x1="{10}" 
						y1="{15}" 
						x2="{10}" 
						y2="{25}" 
						style="stroke:#F1C500; stroke-width:5; opacity: 0.42" 
					/>
					<line 
						x1="{15}" 
						y1="{5}" 
						x2="{15}" 
						y2="{25}" 
						style="stroke:#F1C500; stroke-width:5; opacity: 0.42" 
					/>
					<line 
						x1="{20}" 
						y1="{10}" 
						x2="{20}" 
						y2="{25}" 
						style="stroke:#F1C500; stroke-width:5; opacity: 0.42" 
					/>
					
				</svg>
				Monthly trends
			</p>

		</div>

		<TrendCharts data={data} cities={cities}/>

		<div class="text">

			<h3>Proportion of new dwellings by type of building conversion</h3>

			<div style="margin-top: -15px">
				<svg height="25" width="300">
					<text 
						x="0"
						y="12"
						id="years" 
						text-anchor="start" 
						font-size="16"
					>01/2019 to 12/2023 (5 years total)</text>
				</svg>
			</div>

			<p style="font-size: 15px; margin-bottom: -25px">
				
				<svg height={100} width={400}>
					
					<text
						x="0" 
						y="12" 
						text-anchor="start" 
						font-size="16"
						style="fill: #1470ad;"
					>One square = 1% of new dwellings from conversions</text>

					<rect 
						x="0" 
						y="27" 
						width="9" 
						height="9" 
						fill="#3597CE" 
					/>
					<text
						x="15" 
						y="37" 
						text-anchor="start" 
						font-size="16"
						style="fill: #1470ad;"
					>Non-residential to residential</text>

					<rect 
						x="0" 
						y="52" 
						width="9" 
						height="9" 
						fill="#F1C500" 
					/>
					<text
						x="15" 
						y="62" 
						text-anchor="start" 
						font-size="16"
						style="fill: #1470ad;"
					>Single dwelling to multiple dwellings</text>

					<rect 
						x="0" 
						y="77" 
						width="9" 
						height="9" 
						fill="#ce6c35" 
					/>
					<text
						x="15" 
						y="87" 
						text-anchor="start" 
						font-size="16"
						style="fill: #1470ad;"
					>Multiple dwellings to multiple dwellings</text>
					
				</svg>
			</p>

		</div>

		<BoxPercentChart data={data} cities={cities}/>

	</div>


</main>




<style>

	#years {
		fill: var(--brandDarkBlue);
	}

</style>