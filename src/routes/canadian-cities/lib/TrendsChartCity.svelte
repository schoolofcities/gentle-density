<script>

	import { scaleLinear } from 'd3-scale';
	import { line } from 'd3-shape';
	import { max } from 'd3-array';

	export let citySummaryData;
	export let type;
	export let city;

	let divWidth;
	$: width = divWidth;

	const height = 400;

	const marginRight = 40;
	const marginLeft = 25;
	const marginTop = 50;
	const marginBottom = 50;

	const years = Array.from({ length: 2023 - 2014 + 1 }, (_, index) => 2014 + index);

	let data =[];
	$: data = citySummaryData.filter(d => d.TYPE === type && d.CITY === city);

	$: xScale = scaleLinear()
		.domain([2014, 2023])
		.range([marginLeft, width - marginRight]);

	let maxValue = 10;
	function parseNumber(value) {
		const parsed = parseInt(value, 10);
		return isNaN(parsed) ? 0 : parsed; // Default to 0 if value is NaN
	}
	$: maxValue = max(data, d => Math.max(parseNumber(d.ISSUED), parseNumber(d.COMPLETED)));

	$: if (maxValue < 20) {
		maxValue = 20
	} 

	$: yScale = scaleLinear()
		.domain([0, maxValue])
		.range([height - marginBottom, marginTop])

	$: lineGeneratorIssued = line()
		.x(d => xScale(d.YEAR))
		.y(d => yScale(d.ISSUED));

	$: pathDataIssued = lineGeneratorIssued(data.filter(d => d.ISSUED !== ""));

	$: lineGeneratorCompleted = line()
		.x(d => xScale(d.YEAR))
		.y(d => yScale(d.COMPLETED));

	$: pathDataCompleted = lineGeneratorCompleted(data.filter(d => d.COMPLETED !== ""));


</script>


<div id="trendChart" bind:offsetWidth={divWidth}>

	<svg height={height} width={width} id="svgChart">

		<!-- <line
			x1="{marginLeft}"	
			x2="{marginLeft}"
			y1="{marginTop}"
			y2="{height - marginBottom}"
			stroke="#002b8f"
			opacity="0.667"
			stroke-width="1"
		/> -->
		<!-- <line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{height - marginBottom}"
			y2="{height - marginBottom}"
			stroke="#002b8f"
			opacity="0.667"
			stroke-width="1"
		/> -->

		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{yScale(maxValue)}"
			y2="{yScale(maxValue)}"
			stroke="#002b8f"
			opacity="0.1"
			stroke-width="1"
		/>
		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{yScale(maxValue / 2)}"
			y2="{yScale(maxValue / 2)}"
			stroke="#002b8f"
			opacity="0.1"
			stroke-width="1"
		/>
		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{yScale(0)}"
			y2="{yScale(0)}"
			stroke="#002b8f"
			opacity="0.1"
			stroke-width="1"
		/>

		{#each years as year}

			<line
				x1="{xScale(year)}"	
				x2="{xScale(year)}"
				y1="{height - marginBottom + 8}"
				y2="{height - marginBottom + 12}"
				stroke="#002b8f"
				opacity="0.667"
				stroke-width="1"
			/>
			<text
				x="{xScale(year)}"
				y="{height - marginBottom + 24}"
				text-anchor="middle"
				fill="#002b8f"
				font-size="12"
			>
				{year}
			</text>

		{/each}

		<path d={pathDataIssued} fill="none" stroke="#F1C500" stroke-width="2" />

		<path d={pathDataCompleted} fill="none" stroke="#002b8f" stroke-width="2" />

		{#each data as d}

			{#if yScale(d.ISSUED) !== ""}
				<circle
					cx={xScale(d.YEAR)}
					cy={yScale(d.ISSUED)}
					r={10}
					fill="white"
					stroke-width="0" 
				/>
				<text
					x="{xScale(d.YEAR)}"
					y="{yScale(d.ISSUED) + 4}"
					text-anchor="middle"
					fill="#d2ac00"
					font-size="13"
				>
					{d.ISSUED}
				</text>
			{/if}

			{#if yScale(d.COMPLETED) !== ""}
				<circle
					cx={xScale(d.YEAR)}
					cy={yScale(d.COMPLETED)}
					r={10}
					fill="white"
					stroke-width="0" 
				/>
				<text
					x="{xScale(d.YEAR)}"
					y="{yScale(d.COMPLETED) + 4}"
					text-anchor="middle"
					fill="#002b8f"
					font-size="13"
				>
					{d.COMPLETED}
				</text>
			{/if}

		{/each}

		


	</svg>

</div>


<style>

	#trendChart {
		background-color: rgba(255, 255, 255, 0.71);
		border: solid 1px lightgrey;
		padding: 10px;
		margin: 0 auto;
		width: calc(100% - 70px);
		max-width: 700px;
		min-height: 200px;
	}

</style>