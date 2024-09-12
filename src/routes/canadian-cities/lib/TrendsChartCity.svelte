<script>

	import { scaleLinear } from 'd3-scale';
	import { line } from 'd3-shape';
	import { max } from 'd3-array';

	export let citySummaryData;
	export let type;
	export let city;
	export let chartColours;

	let divWidth;
	$: width = divWidth;

	const height = 400;

	const marginRight = 40;
	const marginLeft = 25;
	const marginTop = 80;
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

		<text 
			x="{10}" 
			y="{18}"
			id="title"
			text-anchor="start" 
		>{type} Suites In {city}</text>

		{#if (data.filter(d => d.ISSUED !== "").length > 0)}
			<rect 
				id="bar"
				x="{10}" 
				y="37" 
				height="5" 
				width="15"
				fill="{chartColours[type].Issued}"
			/>
			<text 
				x="{10 + 20}" 
				y="44"
				id="labelBar"
				text-anchor="start" 
			>Issued Building Permits</text>
		{:else}
			<text 
				x="{10}" 
				y="44"
				id="labelBar"
				text-anchor="start" 
				opacity="0.45"
			>No Data On Issued Building Permits</text>
		{/if}

		{#if (data.filter(d => d.COMPLETED !== "").length > 0)}
			<rect 
				id="bar"
				x="{10}" 
				y="57" 
				height="5" 
				width="15"
				fill="{chartColours[type].Completed}"
			/>
			<text 
				x="{10 + 20}" 
				y="64"
				id="labelBar"
				text-anchor="start" 
			>Completed Building Permits</text>
		{:else}
			<text 
				x="{10}" 
				y="64"
				id="labelBar"
				text-anchor="start" 
				opacity="0.45"
			>No Data On Completed Building Permits</text>
		{/if}

		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{yScale(maxValue)}"
			y2="{yScale(maxValue)}"
			stroke="#ffffff"
			opacity="0.21"
			stroke-width="1"
		/>
		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{yScale(maxValue / 2)}"
			y2="{yScale(maxValue / 2)}"
			stroke="#ffffff"
			opacity="0.21"
			stroke-width="1"
		/>
		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{yScale(0)}"
			y2="{yScale(0)}"
			stroke="#ffffff"
			opacity="0.21"
			stroke-width="1"
		/>

		<path d={pathDataIssued} fill="none" stroke="{chartColours[type].Issued}" stroke-width="2" />

		<path d={pathDataCompleted} fill="none" stroke="{chartColours[type].Completed}" stroke-width="2" />

		{#each data as d}

			{#if (d.ISSUED !== "")}
				<text
					x="{xScale(d.YEAR)}"
					y="{yScale(d.ISSUED) + 4}"
					text-anchor="middle"
					fill="#1470ad"
					font-size="16"
					stroke="#1470ad"
					stroke-width="5"
				>
					{d.ISSUED}
				</text>
				<text
					x="{xScale(d.YEAR)}"
					y="{yScale(d.ISSUED) + 4}"
					text-anchor="middle"
					fill="{chartColours[type].Issued}"
					font-size="16"
				>
					{d.ISSUED}
				</text>
			{/if}

			{#if (d.COMPLETED !== "")}
				<text
					x="{xScale(d.YEAR)}"
					y="{yScale(d.COMPLETED) + 4}"
					text-anchor="middle"
					fill="#1470ad"
					font-size="16"
					stroke="#1470ad"
					stroke-width="5"
				>
					{d.COMPLETED}
				</text>
				<text
					x="{xScale(d.YEAR)}"
					y="{yScale(d.COMPLETED) + 4}"
					text-anchor="middle"
					fill="{chartColours[type].Completed}"
					font-size="16"
				>
					{d.COMPLETED}
				</text>
			{/if}

			{#if (d.COMPLETED === "" && d.ISSUED === "")}
				<text
					x="{xScale(d.YEAR) + 7}"
					y="{yScale(0) + 6}"
					text-anchor="start"
					fill="#fff"
					font-size="13"
					opacity="0.45"
					transform="rotate(-90 {xScale(d.YEAR)} {yScale(0) + 2})"
				>
					No Data Available
				</text>
			{/if}

		{/each}

		{#each years as year}

			<line
				x1="{xScale(year)}"	
				x2="{xScale(year)}"
				y1="{height - marginBottom + 8}"
				y2="{height - marginBottom + 12}"
				stroke="#fff"
				opacity="0.667"
				stroke-width="1"
			/>
			<text
				x="{xScale(year)}"
				y="{height - marginBottom + 24}"
				text-anchor="middle"
				fill="#fff"
				font-size="13"
			>
				{year}
			</text>

		{/each}

	</svg>

</div>


<style>

	#trendChart {
		background-color: var(--brandDarkBlue);
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
		border: solid 1px #fff;
		padding: 10px;
		margin: 0 auto;
		width: calc(100% - 70px);
		max-width: 700px;
		min-height: 200px;
	}

	#title {
		font-size: 18px;
		font-family: UbuntuMonoBold, monospace;
		font-weight: 500;
		fill: #ffffff;
	}

	#labelBar {
		font-size: 15px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: #ffffff;
	}


</style>