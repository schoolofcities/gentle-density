<script>

	export let data;
	export let cities;

	import {group, sum} from 'd3-array';
	import {scaleLinear, scaleLog} from 'd3-scale';

	// let selected = "All Conversions"

	// let selectOptions = [
	// 	"All Conversions",
	// 	"Non-Residential to Residential",
	// 	"Single Dwelling to Multiple",
	// 	"Multiple to Multiple"
	// ]

	// function updateSelected(option) {
	// 	selected = option;
	// }

	// $: console.log(selected);


	let selectedScale = "Log Scale";
	let selectScaleOptions = ["Linear Scale", "Log Scale"];
	function updateSelectedScale(option) {
		selectedScale = option;
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
		const totalSum = d.sums.reduce((acc, item) => acc + item.sumValue, 0);
		const perValue = totalSum !== 0 ? convSum / totalSum : 0;
		let colour;
		if (perValue < 0.05) {
			colour = "#F1C500"
		} else if (perValue < 0.1) {
			colour = "#ce6c35"
		} else {
			colour = "#ab1269"
		};
		return {
			GEO: d.GEO,
			conv: convSum,
			per: perValue,
			colour: colour
		};
	}).sort((a, b) => b.conv - a.conv);

	$: console.log(result);


	let chartWidth;
	let chartHeight = 25 + 40 * 25

	$: console.log(chartWidth);

	let maxXvalue = 100000;
	// $: maxXvalue = Math.max(...result.map(entry => entry.conv));
	
	let xScale;
	$: if(selectedScale === "Log Scale") {
		xScale = scaleLog()
		.domain([100, 150000])
		.range([0, chartWidth]);
	} else {
		xScale = scaleLinear()
		.domain([1, 45000])
		.range([0, chartWidth]);
	}
	


</script>


<!-- <div class="options-container">
	{#each selectOptions as option}
		<div 
			class="{option === selected ? 'option-selected' : 'option-not-selected'}"
			on:click={() => updateSelected(option)} >
			{option}
		</div>
	{/each}
</div> -->

<h3>New dwellings from building conversions (2018 - 2023)</h3>


<div class="options-container">
	{#each selectScaleOptions as option}
		<div 
			class="{option === selectedScale ? 'option-selected' : 'option-not-selected'}"
			on:click={() => updateSelectedScale(option)} >
			{option}
		</div>
	{/each}
</div>

<p>% of all new dwelling units that are from conversions</p>


<div class="chart-wrapper" bind:offsetWidth={chartWidth}>
	
	<svg height={chartHeight} width={chartWidth} id="svgChart">
	
		{#each [1,500,1000,5000,10000,50000] as l}

			<line 
				x1="{xScale(l)}" 
				y1="5" 
				x2="{xScale(l)}" 
				y2="{chartHeight}" 
				style="stroke:#8EB6DC;stroke-width:1;opacity:0.5" 
			/>

		{/each}

		{#each result as city, i}

			<text 
				x="0"
				y="{i * 32 + 22}"
				id="labelBar"
				text-anchor="start" 
				font-size="16"
			>{city.GEO.split(',')[0]} = {city.conv}</text>

			<rect 
				id="bar"
				x="{0}" 
				y="{i * 32 + 25}" 
				height="{7}" 
				width="{xScale(city.conv)}"
				fill="{city.colour}"
			/>

		{/each}

	</svg>

</div>


<style>

	.options-container {
		display: grid;
		max-width: 310px;
		grid-template-columns: repeat(2, 1fr); 
		gap: 0px;
	}

	.option-not-selected {
		max-width: 150px;
		cursor: pointer;
		padding: 0px 5px 0px 5px;
		border: 2px solid var(--brandLightBlue);
		margin: 5px;
		opacity: 0.62;
	}

	.option-not-selected:hover {
		background-color: var(--brandLightBlue);
		opacity: 0.99;
	}

	.option-selected {
		max-width: 150px;
		cursor: pointer;
		padding: 0px 5px 0px 5px;
		border: 2px solid var(--brandDarkBlue);
		margin: 5px;
		background-color: #fff;
	}

	#labelBar {
		fill: var(--brandDarkBlue);
	}


</style>