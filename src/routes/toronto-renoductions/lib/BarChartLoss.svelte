<script>

	import {rollup} from 'd3-array';
	import {scaleBand, scaleLinear} from 'd3-scale';

	import lostUnits from '../../assets/toronto/lost-units-2017-2023.geo.json';
	
	let divWidth;
	$: width = divWidth - 22;

	const height = 370;
	const marginTop = 80;
	const marginRight = 10;
	const marginBottom = 20;
	const marginLeft = 50;


	let yearCountsLostUnits =  Object.fromEntries(rollup(lostUnits.features, v => v.length, d => d.properties.COMPLETED_DATE.substr(0, 4)));

	const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
	console.log(sumValues(yearCountsLostUnits));

	let years = ["2017","2018","2019","2020","2021","2022", "2023"];



	function barHeight(amount) {
		return amount * 270 / 200
	}

	function barY(amount) {
		return 270 - barHeight(amount)
	}
	

	$: xScale = scaleBand()
		.domain(years)
		.range([marginLeft, width - marginRight])
		.paddingInner(0.37)
		.paddingOuter(0.37);

	$: yScale = scaleLinear()
		.domain([0, 50])
		.range([height - marginBottom, marginTop]);

	
</script>



<div id="barChart" bind:offsetWidth={divWidth}>

	<svg height={height} width={width} id="svgChart">

		<text 
			x="50" 
			y="13"
			id="title"
		>Reno-ductions in Toronto identified</text>
		<text 
			x="50" 
			y="33"
			id="title"
		>from building permit data by year</text>

		<pattern id="pattern-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
			<rect x="0" y="0" height="10" width="10" style="fill:#DC4633;" />
			<line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
		</pattern>

		{#each years as year}

			<rect 
				id="bar" 
				x="{xScale(year)}" 
				y="{yScale(yearCountsLostUnits[year])}" 
				height="{yScale(0) - yScale(yearCountsLostUnits[year])}" 
				width="{xScale.bandwidth()}"
				fill="url(#pattern-lines)"
			/>

			<text 
				x="{xScale(year) + xScale.bandwidth() / 2}" 
				y="{yScale(yearCountsLostUnits[year]) - 5}"
				id="labelBar"
				text-anchor="middle" 
			>{yearCountsLostUnits[year]}</text>

			<text 
				x="{xScale(year) + xScale.bandwidth() / 2}" 
				y="{yScale(0) + 15}"
				id="yearLabelWeb"
				text-anchor="middle"
			>{year}</text>

			<text 
				x="{xScale(year) + xScale.bandwidth() + 5}" 
				y="{yScale(0) + 20}"
				id="yearLabelMobile"
				text-anchor="start"
				transform="rotate(-45, {xScale(year) + xScale.bandwidth()},360)"
			>{year}</text>
			
		{/each}

		{#each [0, 10, 20, 30, 40, 50] as grid}

			<line x1="{marginLeft}" y1="{yScale(grid)}" x2="{width - marginRight}" y2="{yScale(grid)}" style="stroke:white;stroke-width:1;opacity: 0.25" />

			<text x=30 y="{yScale(grid)}" id="label">{grid}</text>

		{/each}

		

	</svg>

</div>



<style>

	#barChart {
		padding: 10px;
		padding-left: 0px;
		margin: 0 auto;
		width: calc(100% - 30px);
		max-width: 650px;
		height: 370px;
		/* border: solid 1px var(--brandLightBlue); */
	}

	#bar {
		stroke: white;
		stroke-width:1;
		opacity: 1;
	}

	#label {
		font-size: 15px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: rgba(255, 255, 255, 0.803);
	}

	#labelBar {
		font-size: 15px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: rgba(255, 255, 255, 0.803);
		
	}

	#yearLabelWeb {
		font-size: 15px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: rgba(255, 255, 255, 0.803);
	}
	#yearLabelMobile {
		font-size: 15px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		fill: rgba(255, 255, 255, 0.803);
		opacity: 0;
	}
	@media(max-width: 500px) {
		#yearLabelWeb {
			opacity: 0
		}
		#yearLabelMobile {
			opacity: 1;
		}
	}

	#title {
		font-size: 17px;
		font-family: UbuntuMonoBold, monospace;
		font-weight: 700;
		fill: rgba(255, 255, 255, 0.99);
	}

</style>
