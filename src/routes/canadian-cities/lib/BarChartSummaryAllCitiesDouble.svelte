<script>

	import {scaleLinear} from 'd3-scale';

	export let citySummaryData;
	export let type;
	export let chartColours;


	let divWidth;
	$: width = divWidth;


	const marginRight = 75;
	const marginLeft = 100;
	const marginTop = 100;

	let titleMarginLeft = marginLeft;
	$: if (width < 500) {
		titleMarginLeft = 10
	} else {
		titleMarginLeft = marginLeft;
	}

	let height = 200;

	let data =[];


	// would probably need to filter by Year here too eventually
	$: data = citySummaryData.filter(d => d.TYPE === type && d.YEAR === "2023");

	$: height = marginTop + data.length * 40 + 10

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
			x="{titleMarginLeft}" 
			y="{18}"
			id="title"
			text-anchor="start" 
		>{" "} {type} Suites</text>

		<rect 
			id="bar"
			x="{titleMarginLeft}" 
			y="32" 
			height="15" 
			width="15"
			fill="{chartColours.Completed}"
		/>
		<text 
			x="{titleMarginLeft + 17}" 
			y="44"
			id="labelBar"
			text-anchor="start" 
		>Completed Building Permits (2023)</text>

		<rect 
			id="bar"
			x="{titleMarginLeft}" 
			y="52" 
			height="15" 
			width="15"
			fill="{chartColours.Issued}"
		/>
		<text 
			x="{titleMarginLeft + 17}" 
			y="64"
			id="labelBar"
			text-anchor="start" 
		>Issued Building Permits (2023)</text>

		<line
			x1="{marginLeft}"	
			x2="{width - marginRight}"
			y1="{marginTop}"
			y2="{marginTop}"
			stroke="#002b8f"
			opacity="0.667"
			stroke-width="1"
		/>

		{#each [0,1,2,3,4] as i}

			<line
				x1="{marginLeft + xScale(i * maxXvalue / 4) }"	
				x2="{marginLeft + xScale(i * maxXvalue / 4) }"
				y1="{marginTop - 5}"
				y2="{marginTop + 5}"
				stroke="#002b8f"
				opacity="0.667"
				stroke-width="1"
			/>

			<text 
				x="{marginLeft + xScale(i * maxXvalue / 4)}" 
				y="{marginTop - 7}"
				id="labelBar"
				text-anchor="start" 
				opacity="0.667"
			>{maxXvalue * i / 4}</text>

		{/each}
	
		{#each data as d, i}

			<rect 
				id="bar"
				x="{marginLeft}" 
				y="{i * 40 + marginTop + 15}" 
				height="{15}" 
				width="{xScale(d.COMPLETED)}"
				fill="{chartColours.Completed}"
			/>
			<rect 
				id="bar"
				x="{marginLeft}" 
				y="{i * 40 + marginTop + 30}" 
				height="{15}" 
				width="{xScale(d.ISSUED)}"
				fill="{chartColours.Issued}"
			/>

			<text 
				x="{marginLeft - 5}" 
				y="{i * 40 + marginTop + 33}"
				id="labelBar"
				text-anchor="end" 
			>{d.CITY}</text>

			{#if d.COMPLETED === ""}
				<text 
					x="{xScale(d.COMPLETED) + marginLeft + 3}" 
					y="{i * 40 + marginTop + 26}"
					text-anchor="start" 
					font-size="14"
					fill="{chartColours.Completed}"
					opacity="0.333"
				>no data on completed permits</text>
			{:else}
				<text 
					x="{xScale(d.COMPLETED) + marginLeft + 3}" 
					y="{i * 40 + marginTop + 26}"
					fill="{chartColours.Completed}"
					text-anchor="start"
					font-size="14"
				>{d.COMPLETED}</text>
			{/if}

			{#if d.ISSUED === ""}
				<text 
					x="{xScale(d.ISSUED) + marginLeft + 3}" 
					y="{i * 40 + marginTop + 43}"
					text-anchor="start" 
					font-size="14"
					fill="{chartColours.Issued}"
					opacity="0.4"
				>no data on issued permits</text>
			{:else}
				<text 
					x="{xScale(d.ISSUED) + marginLeft + 3}" 
					y="{i * 40 + marginTop + 43}"
					fill="{chartColours.Issued}"
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
		max-width: 700px;
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



