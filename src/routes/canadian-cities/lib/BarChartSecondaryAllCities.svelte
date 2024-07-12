<script>

	import {rollup, group, sum, max} from 'd3-array';
	import {scaleLinear} from 'd3-scale';

	import citySummaryData from '../assets/city-summary-data.json';


	let divWidth;
	$: width = divWidth;

	const height = 220;
	const marginTop = 80;
	const marginRight = 50;
	const marginBottom = 20;
	const marginLeft = 75;

	const groupedData = Array.from(
		group(citySummaryData.filter(e => e.Type === "Secondary"), d => d.City).entries(), ([city, values]) => ({
			city,
			sumCompleted: sum(values, d => d.Completed)
	}));

	
	let maxXvalue = 100;
	$: maxXvalue = Math.ceil(max(groupedData, d => d.sumCompleted) / 1000) * 1000

	$: xScale = scaleLinear()
		.domain([0, maxXvalue])
		.range([0, width - marginRight - marginLeft]);


</script>



<div id="barChart" bind:offsetWidth={divWidth}>

	<svg height={height} width={width} id="svgChart">

		<pattern id="pattern-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
			<rect x="0" y="0" height="10" width="10" style="fill:#AB1368;" />
			<line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
		</pattern>

		<text 
			x="{5}" 
			y="{15}"
			id="title"
			text-anchor="start" 
		>Total Number* of Secondary Suites</text>

		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="40"
			y2="40"
			stroke="white"
			stroke-width="1"
		/>

		{#each [0,1,2,3,4] as i}

			<line
				x1="{marginLeft + xScale(i * maxXvalue / 4) }"	
				x2="{marginLeft + xScale(i * maxXvalue / 4) }"
				y1="35"
				y2="45"
				stroke="white"
				stroke-width="1"
			/>

			<text 
				x="{marginLeft + xScale(i * maxXvalue / 4)}" 
				y="{60}"
				id="labelBar"
				text-anchor="start" 
			>{maxXvalue * i / 4}</text>

		{/each}
	
		{#each groupedData as d, i}

			<rect 
				id="bar"
				x="{marginLeft}" 
				y="{i * 30 + 75}" 
				height="{20}" 
				width="{xScale(d.sumCompleted)}"
				fill="url(#pattern-lines)"
			/>

			<text 
				x="{marginLeft - 5}" 
				y="{i * 30 + 90}"
				id="labelBar"
				text-anchor="end" 
			>{d.city}</text>

			<text 
				x="{xScale(d.sumCompleted) + marginLeft + 3}" 
				y="{i * 30 + 90}"
				id="labelBar"
				text-anchor="start" 
			>{d.sumCompleted}</text>

		{/each}

	</svg>

	<p id = "footnote">
		*Total number of completed secondary suites based on building permits issued in 2021, 2022, and 2023.
	</p>

</div>




<style>

	#barChart {
		padding: 10px;
		padding-left: 0px;
		margin: 0 auto;
		width: calc(100% - 30px);
		max-width: 650px;
	}

	#title {
		font-size: 18px;
		font-family: UbuntuMonoBold, monospace;
		font-weight: 700;
		fill: rgba(255, 255, 255, 0.99);
	}

	#labelBar {
		font-size: 16px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: white;
	}

	#footnote {
		font-size: 14px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		color: white;
		padding-left: 75px;
	}

	#bar {
		stroke: white;
		stroke-width:1;
		opacity: 1;
	}


</style>



