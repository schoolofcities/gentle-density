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

	{:else if city === "Guelph"}

		<p>
			Guelph is a mid-sized city of 143,740 people (as per the 2021 Census), located within the GTHA, about a 100 kilometers from Toronto. The City has been preparing for a future-ready city prioritizing housing supply for years. Along with provincial targets, in 2024 the City received federal funding of $21.4 million to fast track its housing supply under the Housing Accelerator Fund (HAF). The funds will help incentivize the creation of 739 new housing units above its average over the next three years. With that, the City has <a href="https://guelph.ca/wp-content/uploads/COG-HAF-Infographic-Accessible.pdf" target="_blank">renewed its commitment to gentle density</a> by evaluating changes to zoning and helping increase supply in existing neighbourhoods. Under Guelph’s HAF Action Plan, City of Guelph hope’s to further encourage missing middle housing in existing neighbourhoods (i.e., 4+ units on low density residential lots) and be able to provide incentives for ARDUs and affordable housing through parking reductions. 
		</p>
		<p>
			The City legalized attached ARDU’s in 2017 and allowed detached ARDU’s in 2021. City of Guelph defines Additional Residential Dwelling Unit (ARDU) as a dwelling unit that is self-contained, subordinate to and located within the same building or on the same lot of a primary dwelling unit. ARDU’s are also known as basement apartments, in-law suites, accessory apartments and coach houses. The promising ARDU uptake has been possible largely due to the City’s permissive policies, processes and <a href="https://guelph.ca/city-hall/budget-and-finance/housing-in-guelph/" target="_blank">community engagement efforts</a>.  
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

	{:else if city === "Guelph"}

		<p>
			Guelph's <a href="https://guelph.ca/wp-content/uploads/Guelph-Zoning-Bylaw-2023.pdf" target="_blank">zoning bylaw</a> is regulated by the number of units, allowing up to three units on any given residential property. This means that homeowners can have a combination of primary dwelling, attached ARDU and a detached ARDU on their property. However, specific regulations and requirements, including building codes (area and height restrictions in relation to primary dwelling), parking requirements (at least one parking space per unit), and design standards (maximum of two bedrooms) must be met. All additional residential dwelling units are required to be registered with the City and must get a <a href="https://gpas.guelph.ca/smartlets/do.aspx?interviewID=login" target="_blank">building permit</a> before construction.  
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

	{:else if city === "Guelph"}

		<p>
			The City provides about $5.5 million every year in development fee reductions to contribute to new housing supply, primarily related to creating accessory dwelling units. Guelph has released a powerful <a href="https://storymaps.arcgis.com/stories/08bde3e420e641cb978bbd91f3723aa5" target="_blank">storymap</a> to share back the efforts they have taken and a call to action for their community. The City offers homeowners online services including a building permitting system, appointment booking tool and process automation. The City has also appointed new permanent staff to accelerate the pace of development approvals, including a development advisor and a housing stability advisor, project managers, technicians and engineers. 
		</p>

	{/if}

</div>




