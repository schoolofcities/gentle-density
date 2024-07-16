<script>

	export let data;
	export let cities;

	import {group, sum} from 'd3-array';
	import {scaleLinear, scaleLog} from 'd3-scale';

	let selectedScale = "Log Scale";
	let selectScaleOptions = ["Linear Scale", "Log Scale"];
	function updateSelectedScale(option) {
		selectedScale = option;
	}

	let selectedSort = "Sort by #";
	let selectedSortOptions = ["Sort by #", "Sort by %"];
	// let result;
	function updateSelectedSort(option) {
		selectedSort = option;
		if (option === "Sort by #") {
			result = result.sort((a, b) => b.conv - a.conv || b.per - a.per)
		} else {
			result = result.sort((a, b) => b.per - a.per || b.conv - a.conv)
		}
		console.log(result);
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
	$: summedData = summedData.filter((record) => cities.slice(1).includes(record.GEO));
	
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



	let chartWidth;
	let chartHeight = 300 + 40 * 25


	let gridLines;
	let gridLabels;
	let xScale;
	$: if(selectedScale === "Log Scale") {
		xScale = scaleLog()
		.domain([100, 65000])
		.range([0, chartWidth]);
		gridLines = [500,1000,5000,10000,50000];
	} else {
		xScale = scaleLinear()
		.domain([1, 42000])
		.range([0, chartWidth]);
		gridLines = [10000,20000,30000,40000];
	}
	

	function kFormatter(num) {
		return num > 999 ? num % 1000 === 0 ? (num / 1000).toFixed(0) + 'k' : (num / 1000).toFixed(1) + 'k' : num;
	}


</script>




<h3>Total and percent of new dwellings from building conversions</h3>

<svg id="years" height="35" width={chartWidth}>

	<text 
		x="0"
		y="12"
		id="labelBar"
		text-anchor="start" 
		font-size="16"
	>01/2019 to 12/2023 (5 years total)</text>
</svg>

<svg id="legend" height="50" width={chartWidth}>

	<text 
		x="0"
		y="12"
		id="labelBar"
		text-anchor="start" 
		font-size="16"
	>% of all new units from conversions</text>

	<rect 
		id="legendBar"
		x="{0}" 
		y="{22}" 
		height="{8}" 
		width="{99}"
		fill="#F1C500"
	/>

	<rect 
		id="legendBar"
		x="{101}" 
		y="{22}" 
		height="{8}" 
		width="{99}"
		fill="#ce6c35"
	/>

	<rect 
		id="legendBar"
		x="{202}" 
		y="{22}" 
		height="{8}" 
		width="{99}"
		fill="#ab1269"
	/>

	<text 
		x="100"
		y="44"
		id="labelBar"
		text-anchor="middle" 
		font-size="16"
	>5%</text>

	<text 
		x="200"
		y="44"
		id="labelBar"
		text-anchor="middle" 
		font-size="16"
	>10%</text>


</svg>

<svg id="legend" height="15" width={chartWidth}>

	<text 
		x="0"
		y="12"
		id="labelBar"
		text-anchor="start" 
		font-size="16"
	># of new units just from conversions</text>

</svg>

<div class="options-container">
	{#each selectScaleOptions as option}
		<div 
			class="{option === selectedScale ? 'option-selected' : 'option-not-selected'}"
			on:click={() => updateSelectedScale(option)} >
			{option}
		</div>
	{/each}
</div>

<div class="options-container">
	{#each selectedSortOptions as option}
		<div 
			class="{option === selectedSort ? 'option-selected' : 'option-not-selected'}"
			on:click={() => updateSelectedSort(option)} >
			{option}
		</div>
	{/each}
</div>



<div class="chart-wrapper" bind:offsetWidth={chartWidth}>
	
	<svg height={chartHeight} width={chartWidth} id="svgChart">
	
		{#each gridLines as l}

			<line 
				x1="{xScale(l)}" 
				y1="25" 
				x2="{xScale(l)}" 
				y2="{chartHeight}" 
				style="stroke:#8EB6DC;stroke-width:1;opacity:0.5" 
			/>

			<text 
				x="{xScale(l)}"
				y="20"
				id="labelBar"
				text-anchor="middle" 
				font-size="16"
			>{kFormatter(l)}</text>

		{/each}

		{#each result as city, i}

			<text 
				x="0"
				y="{i * 32 + 43}"
				id="labelBar"
				text-anchor="start" 
				font-size="16"
			>{city.GEO.split(',')[0]}: {city.conv} ({Math.round(100 * city.per)}%)</text>

			<rect 
				id="bar"
				x="{0}" 
				y="{i * 32 + 47}" 
				height="{8}" 
				width="{xScale(city.conv)}"
				fill="{city.colour}"
			/>

		{/each}

	</svg>

</div>


<style>

	#years {
		margin-top: -15px;
	}

	#legend {
		padding-left: 0px;
	}

	.options-container {
		display: grid;
		max-width: 310px;
		grid-template-columns: repeat(2, 1fr); 
		gap: 0px;
		font-size: 14px;
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