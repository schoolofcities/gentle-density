<script>

	import TrendsChartCity from "./TrendsChartCity.svelte";

	export let citySummaryData;
	export let type;
	export let city;
	export let chartColours;

</script>


<div class="text">

	{#if city === "Edmonton"}

		<p>
			Edmonton is one of the six most populous metropolitan areas in Canada, with 1,010,899 people in the city, and 1.4 million in the region, as per the 2021 Census. It is the capital city of Alberta and is situated along the North Saskatchewan River in the center of the province. Edmonton has been the Canadian trailblazer for zoning reform. Research on good practices to maintain and create affordable housing started with an excellent comparative overview in 2006 for affordable housing and land use planning. In the review, they list secondary suite legalization as a high priority for creating affordable housing solutions.
		</p>
		<p>
			Even though Edmonton is cited as the most affordable housing market in Canada, 46,115 households cannot afford to pay for housing. In their Affordable Housing Strategy 2023-2026, the city details that 56,000 residents are in core housing need and by 2026, they plan to build 2,700 units of affordable housing. In their City Plan, Edmonton specifies that secondary suites are part of Low Density Residential (LDR) buildings. As the City expects the population to double, they are pursuing the goal of building 340,000 LDR buildings.
		</p>

	{/if}

</div>

<TrendsChartCity
	citySummaryData = {citySummaryData}
	type = "Detached"
	city = {city}
	chartColours = {chartColours}
/>


<div class="text">

	{#if city === "Edmonton"}

		<p>
			Edmonton built over 9,000 secondary suites over the past decade by streamlining as-of-right ADU developmentvi. Under Zoning Bylaw 12800 a Secondary Suite is defined as a dwelling that is subordinate to, and located within, a building in the form of Single Detached Housing, Semi-detached Housing, Row Housing, or Backyard Housing. Backyard house is defined as a building containing 1 or more Dwellings, that is located within the Rear Yard, and partially or wholly within the Rear Setback of the applicable Zone, of a Residential Site. The Bylaw also refers to backyard housing as garden suites. Under the bylaw the definition of a garden suite means an accessory building containing a dwelling which is located separate from the principal use which is single Detached Housing, Semi-detached Housing, or Multi-unit Housing in the form of row housing.  
		</p>
		<p>
			Edmonton Zoning Bylaw 12800, section 3.2 3, states that only one secondary suite and garden suite is allowed per principal lot. Section 86 of the Bylaw is solely dedicated to secondary suites and states that they must be smaller than the principle dwelling and must be developed as an extension to the facade of the primary building. Section 87 is dedicated to garden suites and lays out the regulations acquired to build a garden suite legally.  
		</p>

	{/if}
</div>

<TrendsChartCity
	citySummaryData = {citySummaryData}
	type = "Secondary"
	city = {city}
	chartColours = {chartColours}
/>

<div class="text">

	{#if city === "Edmonton"}

		<p>
			The application process for both secondary suites and backyard homes is straightforward as the City’s website walks applicants through the process. Applications can be submitted online or in person and a detailed list of permits and fees are explained to aid in the completion of the application. Currently, it is unclear if Edmonton has an incentive program for secondary suites or backyard housing as their Secondary Suites Grant Program is not available on the website anymore.   
		</p>

	{/if}
</div>




