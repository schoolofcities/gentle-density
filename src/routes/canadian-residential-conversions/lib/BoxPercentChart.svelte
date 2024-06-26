<script>

	import {group, sum} from 'd3-array';

	export let data;
	export let cities;


	function roundFloatsToInt(arr) {
		const total = arr.reduce((acc, val) => acc + val, 0);
		const roundedInts = arr.map(val => Math.round(val));
		const diff = Math.floor(total) - roundedInts.reduce((acc, val) => acc + val, 0);
		for (let i = 0; i < diff; i++) {
			if (arr[i] !== 0) {
				roundedInts[i]++;
				break;
			}
		}
		return roundedInts;
	}



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

	$: result = summedData.map(d => {
		const convSum = d.sums
			.filter(item => item.Type !== "new")
			.reduce((acc, item) => acc + item.sumValue, 0);
		
		let PerMtoM = Math.round(100 * d.sums.filter(item => item.Type === "m-to-m")[0].sumValue / convSum);
		let PerStoM = Math.round(100 * d.sums.filter(item => item.Type === "s-to-m")[0].sumValue / convSum);
		let PerNtoR = Math.round(100 * d.sums.filter(item => item.Type === "n-to-r")[0].sumValue / convSum);

		[PerMtoM, PerStoM, PerNtoR] = roundFloatsToInt([PerMtoM, PerStoM, PerNtoR]);

		return {
			GEO: d.GEO,
			PerMtoM: PerMtoM,
			PerStoM: PerStoM,
			PerNtoR: PerNtoR
		};
	})

	$: console.log(result);

	let boxInnerSize = 9;
	let boxOuterSize = 12;

</script>



<div id="chartWrapper">

	{#each cities as city}

		<div class="chart">

			<svg height={145} width={126} id="svgChart">

				<text 
					x="5"
					y="{20}"
					id="cityLabel"
					text-anchor="start" 
					font-size="15"
				>{city.split(',')[0]}</text>
				
				{#each result as d}

					{#if (city === d.GEO)}

						{#each [0,1,2,3,4,5,6,7,8,9] as r, i}
							{#each [0,1,2,3,4,5,6,7,8,9] as c, j}
								{#if (j + i*10 < d.PerNtoR)}
									<rect 
										x="{5 + boxOuterSize * c}" 
										y="{25 + boxOuterSize * r}" 
										width="{boxInnerSize}" 
										height="{boxInnerSize}" 
										fill="#1470ad" 
									/>
								{:else if (j + i*10 < d.PerNtoR + d.PerStoM)}
									<rect 
										x="{5 + boxOuterSize * c}" 
										y="{25 + boxOuterSize * r}" 
										width="{boxInnerSize}" 
										height="{boxInnerSize}" 
										fill="#F1C500" 
									/>
								{:else}
									<rect 
										x="{5 + boxOuterSize * c}" 
										y="{25 + boxOuterSize * r}" 
										width="{boxInnerSize}" 
										height="{boxInnerSize}" 
										fill="#ab1269" 
									/>
								{/if}
							{/each}
						{/each}

					{/if}

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
		max-width: 1200px;
		margin-bottom: 50px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(146px, 1fr));
		gap: 2px;
	}

	@media only screen and (max-width: 440px) {
		#chartWrapper {
			margin-left: 25px;
		}
	}

	.chart {
		width: 127px;
		height: 145px;
		margin-bottom: 7px;
		overflow: hidden;
	}

	#cityLabel {
		fill: var(--brandDarkBlue);
	}

</style>