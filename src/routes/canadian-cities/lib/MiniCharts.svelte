<script>

	export let citySummaryData;
	export let type;
	import {scaleLinear} from 'd3-scale';

	let filteredData = citySummaryData.filter(row => row.TYPE === type);

	const width = 200;
	const height = 200;

	const marginTop = 10;
	const marginRight = 10;
	const marginBottom = 10;
	const marginLeft = 10;

	let cities = Array.from(
		new Set(filteredData.map(e => e.CITY))
	);
	$: console.log(cities);

	let xScale = scaleLinear()
		.domain([2014, 2023])
		.range([marginLeft, width - marginRight]);

	let yScale = scaleLinear()
		.domain([0, 800])
		.range([height - marginBottom, marginTop])


</script>


<div id="chartWrapper">

	{#each cities as city}

		<div class="chart">

			<svg height={height} width={width} id="svgChart">

				<text
					x="5" 
					y="15" 
					text-anchor="left" 
					font-size="14"
				>{city}</text>

				{#each filteredData as d}

					{#if (city === d.CITY)}

						{#if (d.ISSUED !== "")}

							<circle 
								cx="{xScale(d.YEAR)}" 
								cy="{yScale(d.ISSUED)}" 
								r="4" 
								fill="#F1C500" 
							/>

						{/if}

						{#if (d.COMPLETED !== "")}

							<circle 
								cx="{xScale(d.YEAR)}" 
								cy="{yScale(d.COMPLETED)}" 
								r="4" 
								fill="#002b8f" 
							/>

						{/if}

					{/if}

				{/each}

			</svg>

		</div>

	{/each}


</div>


<style>

	#chartWrapper {
		margin: 0 auto;
		min-width: 400px;
		min-height: 200px;
		max-width: 850px;
		width: 100%;
		margin-bottom: 50px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0px;
		
	}

	.chart {
		margin: 0 auto;
		min-width: 200px;
		min-height: 200px;
		max-width: 200px;
		max-height: 200px;
		margin-bottom: 7px;
		border: solid 1px black;
		overflow: hidden;
	}

</style>





