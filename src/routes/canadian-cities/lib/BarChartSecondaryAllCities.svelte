<script>

	import {group, sum, max} from 'd3-array';
	import {scaleLinear} from 'd3-scale';

	export let citySummaryData;
	export let type;
	export let date;



	$: console.log(colour);

	let divWidth;
	$: width = divWidth;

	let colour;
	if (type === "Secondary") {
		colour = "#AB1368"
	} else if (type === "Detached") {
		colour = "#0D534D";
	} else {
		colour = "grey"
	}

	const height = 220;
	const marginTop = 80;
	const marginRight = 50;
	const marginBottom = 20;
	const marginLeft = 75;


	// would probably need to filter by Year here too eventually
	$: groupedData = Array.from(
		group(
			citySummaryData.filter(e => e.Type === type), d => d.City
		).entries(), ([city, values]) => ({
				city,
				sumCompleted: sum(values, d => d[date])
			})
		);

	$: console.log(groupedData);

	
	let maxXvalue = 100;
	$: maxXvalue = Math.ceil(max(groupedData, d => d.sumCompleted) / 1000) * 1000
	

	$: xScale = scaleLinear()
		.domain([0, maxXvalue])
		.range([0, width - marginRight - marginLeft]);


</script>



<div id="barChart" bind:offsetWidth={divWidth}>

	<svg height={height} width={width} id="svgChart">

		<pattern id={"pattern-lines-"+type} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
			<rect x="0" y="0" height="10" width="10" style="fill:{colour};" />
			<line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1;stroke-opacity:0.2" />
		</pattern>

		<text 
			x="{5}" 
			y="{15}"
			id="title"
			text-anchor="start" 
		>Total {date} {" "} {type} Suites</text>

		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="40"
			y2="40"
			stroke="#002b8f"
			stroke-width="1"
		/>

		{#each [0,1,2,3,4] as i}

			<line
				x1="{marginLeft + xScale(i * maxXvalue / 4) }"	
				x2="{marginLeft + xScale(i * maxXvalue / 4) }"
				y1="35"
				y2="45"
				stroke="#002b8f"
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
				fill="url(#{"pattern-lines-"+type})"
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

	<!-- <p id = "footnote">
		*Total number completed in 2021, 2022, and 2023
	</p> -->

</div>




<style>

	#barChart {
		background-color: rgba(255, 255, 255, 0.71);
		border: solid 1px lightgrey;
		padding: 10px;
		/* padding-right: 45px; */
		/* padding-left: 10px; */
		margin: 0 auto;
		width: calc(100% - 70px);
		max-width: 920px;
	}

	#title {
		font-size: 18px;
		font-family: UbuntuMonoBold, monospace;
		font-weight: 500;
		fill: #002b8f;
	}

	#labelBar {
		font-size: 16px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: #002b8f;
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



