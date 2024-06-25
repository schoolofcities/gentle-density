<script>

	export let data;
	export let cities;

	import {scaleLinear, scaleTime} from 'd3-scale';
	import {timeParse} from 'd3-time-format';
	import {group, sum} from 'd3-array';

	const parseDate = timeParse("%Y-%m");

	$: groupedData = group(data.filter((d) => !d.REF_DATE.includes("new")), 
		(d) => d.GEO, (d) => d.REF_DATE
	);
	$: summedData = Array.from(groupedData, ([key, values]) => ({
		GEO: key,
		sums: Array.from(values, ([type, records]) => ({
			date: type,
			sumValue: sum(records, (d) => d.VALUE),
		})),
	}));
	$: summedData = summedData.filter((record) => cities.includes(record.GEO));

	$: summedData.forEach((d) => {
		d.sums.forEach((s) => {
			s.date = parseDate(s.date)
		});
		d.maxValue = Math.max(...d.sums.map(item => item.sumValue));
	});

	$: console.log(summedData);

	$: xScale = scaleTime()
		.domain([parseDate("2019-01"),parseDate("2023-12")])
		.range([6,144]);

	$: console.log(xScale(parseDate("2023-03")))

	let yScale;


	
	$: summedData.forEach((d) => {
		const yearlyData = {};

		// Iterate over each data point
		d.sums.forEach((e) => {
			const date = new Date(e.date);
			const year = date.getUTCFullYear();

			// Update yearly sums and counts
			if (!yearlyData[year]) {
			yearlyData[year] = { sum: 0, count: 0 };
			}
			yearlyData[year].sum += e.sumValue;
			yearlyData[year].count++;
		});

		// Save yearlyData within the data object
		d.yearlyData = yearlyData;
	});


</script>


<div id="chartWrapper">

	{#each cities as city}

		<div class="chart">

			<svg height={145} width={145} id="svgChart">
				
				{#each summedData as d}

					{#if (city === d.GEO)}

						{
							yScale = scaleLinear()
								.domain([0, d.maxValue])
								.range([115, 25])
						}
						

						{#each d.sums as c}

							<line 
								x1="{xScale(c.date)}" 
								y1="{yScale(c.sumValue)}" 
								x2="{xScale(c.date)}" 
								y2="{115}" 
								style="stroke:#F1C500; stroke-width:3; opacity: 0.75" 
							/>
							<!-- <circle 
								r="1" 
								cx="{xScale(c.date)}" 
								cy="{yScale(c.sumValue)}" 
								fill="#ab1269" 
							/> -->

						{/each}

						{#each ["2019", "2020", "2021", "2022", "2023"] as y} 

							<line
								x1="{xScale(parseDate(y + "-01"))}" 
								y1="{yScale(d.yearlyData[y].sum / d.yearlyData[y].count)}" 
								x2="{xScale(parseDate(y + "-12"))}" 
								y2="{yScale(d.yearlyData[y].sum / d.yearlyData[y].count)}" 
								style="stroke: #ab1269; stroke-width: 2;" 
							/>

							<text
								x="{xScale(parseDate(y + "-01")) + 27.6 / 2}" 
								y="{yScale(d.yearlyData[y].sum / d.yearlyData[y].count) - 2}" 
								text-anchor="middle" 
								id="avgLabel"
								font-size="12"
							>{Math.round(d.yearlyData[y].sum / d.yearlyData[y].count)}</text>


						{/each}
				

					{/if}

				{/each}

				<text 
					x="5"
					y="{10}"
					id="cityLabel"
					text-anchor="start" 
					font-size="15"
				>{city.split(',')[0]}</text>
			
				{#each [0,1,2,3,4,5] as l}

					<line 
						x1="{6 + l * 27.6}" 
						y1="115" 
						x2="{6 + l * 27.6}" 
						y2="120" 
						style="stroke:#1470ad;stroke-width:1;" 
					/>

				{/each}

				{#each [19,20,21,22,23] as y, i}

					<text 
						x="{6 + 14 + i * 27.6}"
						y="127"
						id="cityLabel"
						text-anchor="middle" 
						font-size="15"
					>{y}</text>

				{/each}

				
				
<!-- 
				<line 
					x1="5" 
					y1="115" 
					x2="145" 
					y2="115" 
					style="stroke:#1470ad;stroke-width:1;" 
				/>
				<text 
					x="5"
					y="132"
					id="cityLabel"
					text-anchor="start" 
					font-size="15"
				>01/18</text>
				 -->
				
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
		/* background-color: white; */
		/* border: solid 1px var(--brandLightBlue); */
	}

	#cityLabel {
		fill: var(--brandDarkBlue);
	}

	#avgLabel {
		fill: var(--brandRed);
	}

</style>