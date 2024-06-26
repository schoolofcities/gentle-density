<script>

	import {group, sum} from 'd3-array';

	export let data;
	export let cities;


	$: groupedData = group(data, 
		(d) => d.GEO, (d) => d.Type
	);
	$: summedData = Array.from(groupedData, ([key, values]) => ({
		GEO: key,
		sums: Array.from(values, ([type, records]) => ({
			Type: type,
			sumValue: sum(records, (d) => d.VALUE),
		})),
	}));
	$: summedData = summedData.filter((record) => cities.includes(record.GEO));

	$: console.log(summedData);


</script>



<div id="chartWrapper">

	{#each cities as city}

		<div class="chart">

			<svg height={145} width={145} id="svgChart">

				<text 
					x="5"
					y="{20}"
					id="cityLabel"
					text-anchor="start" 
					font-size="15"
				>{city.split(',')[0]}</text>
				
				{#each [0,1,2,3,4,5,6,7,8,9] as r}
				{#each [0,1,2,3,4,5,6,7,8,9] as c}

					<rect 
						x="{5 + 12*r}" 
						y="{25 + 12*c}" 
						width="9" 
						height="9" 
						fill="blue" 
					/>

				{/each}
				{/each}

			</svg>

		</div>

	{/each}

</div>




<style>

	#chartWrapper {
		margin: 0 auto;
		min-width: 300px;
		min-height: 150px;
		width: 100%;
		max-width: 1300px;
		margin-bottom: 50px;
		/* margin-left: 5px;
		margin-right: 5px; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(146px, 1fr));
		gap: 2px;
	}

	.chart {
		width: 145px;
		height: 145px;
		margin-bottom: 7px;
		overflow: hidden;
	}

	#cityLabel {
		fill: var(--brandDarkBlue);
	}

	#avgLabel {
		fill: var(--brandRed);
	}

</style>