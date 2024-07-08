<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";
	import ReadMore from "../../lib/ReadMore.svelte";
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
    <meta name="description" content="Tracking residential dwelling conversions. An exploration of Canadian building permit survey data">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Residential Conversions Across Canada" />
    <meta property="og:description" content="Tracking residential dwelling conversions. An exploration of Canadian building permit survey data" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density/canadian-residential-conversions" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-conversions.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density/canadian-residential-conversions" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Residential Conversions Across Canada" />
    <meta name="twitter:description" content="Tracking residential dwelling conversions. An exploration of Canadian building permit survey data" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-conversions.png" /> 

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('../gentle-density/blueprint-background-convert.png');">

		<div class="title">
			<h1>
				Tracking Residential Dwelling Conversions
			</h1>
			<h2>
				An Exploration of Canadian Building Permit Survey Data
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
				Many Canadian cities need more housing, both now and in the near future. While urban sprawl consumes green spaces and strains resources, the conversion and expansion of existing buildings offer a more sustainable path forward. Research in Canada has shown that <a href="https://imfg.org/research/doc/?doc_id=637" target="_blank">urban sprawl has far worse impacts on climate change than infill development</a>. Moreover, <a href="https://csbe.civmin.utoronto.ca/wp-content/uploads/2023/11/khr_Saxe_FIG2023.pdf" target="_blank">maintaining existing building stock</a> to help construct new units can reduce emissions related to procuring and transporting new building material.
			</p>
			<p>
				There are a variety of building conversions: altering a single-family home to create additional dwelling units (a basement apartment for example); a duplex expanding into a triplex or fourplex; or converting a previously non-residential building into residential units.
			</p>
			<p>
				On this page, we chart how different Canadian urban regions are doing in terms of creating new residential dwelling units from building conversions, over the five year period of 2019 to 2023.
			</p>
			<p>
				The data are sourced from Statistics Canada's <a href="https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&Id=418552&" target="_blank">Building Permit Survey</a>. This survey tracks attributes of building permits by Census Metropolitan Area (CMA) on a monthly basis. The survey includes the number of new dwelling units that were created due to building conversions, and has categories for three types of conversions (a. non-residential to residential, b. single dwelling to multiple dwellings, and c. multiple to multiple).
			</p>
			<p>
				Overall across Canada there were <b>104,425</b> new dwelling units created via conversions in the five-year period from 01/2019 to 12/2023. This accounts for <b>7.9%</b> of all new residential dwelling units created during this period, based on the data recorded in the building permit survey. Below we chart how this varies by CMA, trends over time, as well as different types of building conversions.
			</p>
			<br>

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

		<div class="text">

			<p>
				Code for this page is hosted on a <a href="https://github.com/schoolofcities/gentle-density" target="_blank">GitHub repository</a>. The subset of Building Permit Survey data shown on these charts can be accessed <a href="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/conversions-canada-2018-to-2024.csv" target="_blank">as a .csv file by clicking here</a>. The full dataset, including many other types of building permits, can be queried and downloaded from <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410028501" target="_blank">Statistics Canada</a>.
			</p>

		</div>

		<ReadMore currentPage = "canadian-residential-conversions"/>

	</div>

	


</main>




<style>

	.background-white {
		width: 100%;
		max-width: 1920px;
		background-color: #ffffff;
		opacity: 1;
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(45deg, #fcfeff 0, #eaf5ff 1.3px, #ffffff 0, #ffffff 50%);
		border-top: solid 1px var(--brandLightBlue);
	}

	#years {
		fill: var(--brandDarkBlue);
	}

</style>