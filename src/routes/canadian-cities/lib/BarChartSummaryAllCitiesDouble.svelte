<script>

	import {group, sum, max} from 'd3-array';
	import {scaleLinear} from 'd3-scale';

	export let citySummaryData;
	export let type;


	let divWidth;
	$: width = divWidth;


	const marginRight = 75;
	const marginLeft = 100;

	let height = 200;

	
	let data =[];


	// would probably need to filter by Year here too eventually
	$: data = citySummaryData.filter(d => d.TYPE === type && d.YEAR === "2023");

	$: console.log(data);

	$: height = 75 + data.length * 40

	
	let maxXvalue = 0;
	if (type === "Detached") {
		maxXvalue = 300
	} else {
		maxXvalue = 1000
	}
	
	$: xScale = scaleLinear()
		.domain([0, maxXvalue])
		.range([0, width - marginRight - marginLeft]);


</script>



<div id="barChart" bind:offsetWidth={divWidth}>

	<svg height={height} width={width} id="svgChart">

		<pattern id={"pattern-lines-"+type} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
			<rect x="0" y="0" height="10" width="10" style="fill:#0D534D;" />
			<line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1;stroke-opacity:0.2" />
		</pattern>

		<text 
			x="{marginLeft - 3}" 
			y="{15}"
			id="title"
			text-anchor="start" 
		>Total {" "} {type} Suites</text>

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
	
		{#each data as d, i}

			<rect 
				id="bar"
				x="{marginLeft}" 
				y="{i * 40 + 75}" 
				height="{15}" 
				width="{xScale(d.COMPLETED)}"
				fill="url(#{"pattern-lines-"+type})"
			/>
			<rect 
				id="bar"
				x="{marginLeft}" 
				y="{i * 40 + 90}" 
				height="{15}" 
				width="{xScale(d.ISSUED)}"
				fill="#F1C500"
			/>

			<text 
				x="{marginLeft - 5}" 
				y="{i * 40 + 93}"
				id="labelBar"
				text-anchor="end" 
			>{d.CITY}</text>

			{#if d.COMPLETED === ""}
				<text 
					x="{xScale(d.COMPLETED) + marginLeft + 3}" 
					y="{i * 40 + 87}"
					text-anchor="start" 
					font-size="14"
					fill="#0D534D"
					opacity="0.333"
				>no data on completions</text>
			{:else}
				<text 
					x="{xScale(d.COMPLETED) + marginLeft + 3}" 
					y="{i * 40 + 87}"
					fill="#0D534D"
					text-anchor="start"
					font-size="14"
				>{d.COMPLETED}</text>
			{/if}

			{#if d.ISSUED === ""}
				<text 
					x="{xScale(d.ISSUED) + marginLeft + 3}" 
					y="{i * 40 + 102}"
					text-anchor="start" 
					font-size="14"
					fill="#d2ac00"
					opacity="0.4"
				>no data on issued permits</text>
			{:else}
				<text 
					x="{xScale(d.ISSUED) + marginLeft + 3}" 
					y="{i * 40 + 102}"
					fill="#d2ac00"
					text-anchor="start"
					font-size="14"
				>{d.ISSUED}</text>
			{/if}

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
		max-width: 720px;
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



