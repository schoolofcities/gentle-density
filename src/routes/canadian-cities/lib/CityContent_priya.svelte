<script>

	import TrendsChartCity from "./TrendsChartCity.svelte";

	export let citySummaryData;
	export let type;
	export let city;
	export let chartColours;

</script>



{#if city === "Calgary"}

	<div class="text">
		<p>
			Calgary is the third largest municipality in Canada, with a population of 1,306,784, as per the 2021 Census. While having the second lowest cost of living in the country, over 84,600 households cannot afford to pay for housing in the neighbourhoods they reside in.  As the City keeps growing, the rate of housing need also increases and is expected to reach 100,000 by 2026. The federal government recognizes the need and awarded $228.5 million for the funding of seven initiatives to deliver 6,825 units over and above their three-year average growth under the <a href="https://www.calgary.ca/social-services/funding/housing-accelerator-fund.html" target="_blank">Housing Accelerator Fund (HAF) Action Plan</a>.   
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Detached"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			<p> 
			Backyard suite is a self-contained residence that is detached from the main residence, that includes garage suites, garden suites, or laneway homes.  
			</p>
		</div>
   <p>
   To combat the lack of housing options the City of Calgary, in <a href="https://www.calgary.ca/communities/housing-in-calgary/housing-strategy.html" target="_blank">Housing Strategy 2024-2030</a> report, has created bylaws and incentives to expediate the building process of secondary and backyard suites, or Accessory Residential Buildings (ARB). The Strategy introduces new bylaws that include enabling ARBs on any residential lot. There can only be one ARB within each dwelling unit, that is, either a secondary suite or a backyard suite. Secondary suites require a parking space, although backyard suite parking requirements have been eliminated. Both units must have two or more bedrooms, and the unit must oblige the National Building Code – Alberta Edition. In addition, secondary suites have a maximum floor area of 100.0 square metres, excluding any area covered by stairways and landings.
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Secondary"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			<p>
			Secondary suite is a self-contained residence, that is located within the main residence. This can be located on any floor within the home, like the basement, main floor or upper floor.
		</p>
		</div>
		<p>
			To construct a secondary suite and a backyard suite, an applicant must apply for multiple permits. For a secondary suite, permits include a building permit and a separate electrical permit. Backyard suites require more permits, which include a development permit, building permit, electrical permit, plumbing permit, mechanical permit, and gas permit. All permits are payable through an online submission or can be done in person and take approximately 7 days to process. It must be noted that the City has no charges for development or registration of secondary suites under the Secondary Suite Amnesty Program. To make the process easy for applicants, the city has a comprehensive <a href="https://www.calgary.ca/development/home-building/new-secondary-suite.html#construction-information" target="_blank">webpage</a> that includes an application checklist for both secondary and backyard suites, a licensed trade <a href="https://dbaservices.calgary.ca/publicinq/Default.aspx?PossePresentation=CustomerSearch" target="_blank">contractor list</a>, sample drawings, a <a href="https://www.youtube.com/watch?v=mmxI9rGbEBg" target="_blank">Q/A webinar</a> recording, and a backyard suite <a href="https://publicaccess.calgary.ca/lldm01/livelink.exe?func=ccpa.general&msgID=GTTseTrKeKO&msgAction=Download" target="_blank">How to Guide</a>.  
			</p>
			<p>
			Under the HAF, the City has launched <a href="https://www.calgary.ca/development/home-building/secondary-suite-incentive-program.html" target="_blank">Secondary Suite Incentive Program</a> providing qualifying homeowners with up to $10,000 to build and register an attached secondary suite <a href="https://secondarysuites.calgary.ca/" target="_blank">(map here)</a>. A homeowner qualifies for reimbursement for the cost of installing all required safety elements that are not in the space at the time of application, and if they have an active secondary suite building permit. Homeowners can also apply for other funding for adding accessibility and energy efficiency features.       
		</p>
	</div>




{:else if city === "Edmonton"}

	<div class="text">
		<p>
			Edmonton, capital of Alberta, is one of the six most populous metropolitan areas in Canada, with a population of 1,010,899 in the city and 1.4 million in the region, as per the 2021 Census. Edmonton has been the Canadian trailblazer for zoning reform. Research on good practices to maintain and create affordable housing started with an excellent comparative overview in 2006 for affordable housing and land use planning. In the review, they list secondary suite legalization as a high priority for creating affordable housing solutions. 
		</p>
		<p>
			Even though Edmonton is cited as the most affordable housing market in Canada, 46,115 households cannot afford to pay for housing. In their Affordable Housing Strategy 2023-2026, the city details that 56,000 residents are in core housing need and by 2026, they plan to build 2,700 units of affordable housing. In their City Plan, Edmonton specifies that secondary suites are part of Low Density Residential (LDR) buildings. As the City expects the population to double, they are pursuing the goal of building 340,000 LDR buildings. 
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Detached"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			<p> 
			Backyard house is defined as a building containing 1 or more Dwellings that is located within the Rear Yard, and partially or wholly within the Rear Setback of the applicable Zone, of a Residential Site. 
			</p>

			<p>
			Garden suite means an accessory building containing a dwelling which is located separate from the principal use which is single Detached Housing, Semi-detached Housing, or Multi-unit Housing in the form of row housing.   
		</p>
		</div>

		<p>
			Edmonton Zoning Bylaw states that only one secondary suite and garden suite is allowed per principal lot. Section 86 of the Bylaw is solely dedicated to secondary suites and states that they must be smaller than the principle dwelling and must be developed as an extension to the facade of the primary building. Section 87 is dedicated to garden suites and lays out the regulations acquired to build a garden suite legally.   
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Secondary"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			Secondary Suite is defined as a dwelling that is subordinate to, and located within, a building in the form of Single Detached Housing, Semi-detached Housing, Row Housing, or Backyard Housing. 
		</div>
		<p>
			The application process for both secondary suites and backyard homes is straightforward as the <a href="https://www.edmonton.ca/residential_neighbourhoods/secondary-suites" target="_blank">City’s webpage</a> walks applicants through the process. Applications can be submitted online or in person and a detailed list of permits and fees are explained to aid in the completion of the application. Currently, it is unclear if Edmonton has an incentive program for secondary suites or backyard housing as their Secondary Suites Grant Program is not available on the website anymore.       
		</p>
	</div>



{:else if city === "Guelph"}

	<div class="text">
		<p>
			Guelph is a mid-sized city with a population of 143,740 (as per the 2021 Census), located within the GTHA, about a 100 kilometers from Toronto. The City has been preparing for a future-ready city prioritizing housing supply for years. Along with provincial targets, in 2024 the City received federal funding of $21.4 million to fast track its housing supply under the Housing Accelerator Fund (HAF). The funds will help incentivize the creation of 739 new housing units above its average over the next three years. With that, the City has <a href="https://guelph.ca/wp-content/uploads/COG-HAF-Infographic-Accessible.pdf" target="_blank">renewed its commitment</a> to gentle density by evaluating changes to zoning and helping increase supply in existing neighbourhoods. Under their Action Plan, the City hope’s to further encourage Missing Middle housing in existing neighbourhoods (i.e., 4+ units on low density residential lots) and be able to provide incentives for Additional Residential Dwelling Units (ARDUs) and affordable housing through parking reductions. 
		</p>
		<p>
			The City legalized attached ARDU’s in 2017 and detached ARDU’s in 2021. ARDU’s are also known as basement apartments, in-law suites, accessory apartments and coach houses. The promising ARDU uptake has been possible largely due to the City’s permissive policies, processes and community engagement efforts.  
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Detached"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
		<p>
			Additional Residential Dwelling Unit (ARDU) as a dwelling unit that is self-contained, subordinate to and located on the same lot of a primary dwelling unit.  
			</p>
		<p>
			Garden suite means a one-unit detached dwelling unit containing bathroom and kitchen facilities that is separate from and subordinate to a primary dwelling unit and that is designed to be portable and temporary.
			</p>
		</div>
		<p>
			The City’s <a href="https://guelph.ca/wp-content/uploads/Guelph-Zoning-Bylaw-2023.pdf" target="_blank">zoning bylaw</a> is regulated by the number of units, allowing up to three units on any given residential property. This means that homeowners can have a combination of primary dwelling, attached and detached ARDU on their property. However, specific regulations and requirements, including building codes (area and height restrictions in relation to primary dwelling), parking requirements (at least one parking space per unit), and design standards (maximum of two bedrooms) must be met. All additional residential dwelling units are required to be registered with the City and must get a <a href="https://gpas.guelph.ca/smartlets/do.aspx?interviewID=login" target="_blank">building permit</a> before construction.   
		</p>
		
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Secondary"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			Additional Residential Dwelling Unit (ARDU) as a dwelling unit that is self-contained, subordinate to and located within the same building of a primary dwelling unit.
		</div>
		<p>
			The City provides about $5.5 million every year in development fee reductions to contribute to new housing supply, primarily related to creating accessory dwelling units. Guelph has released a powerful <a href="https://storymaps.arcgis.com/stories/08bde3e420e641cb978bbd91f3723aa5" target="_blank">storymap</a> to share back the efforts they have taken with a call to action for their community. The City offers homeowners online services including a building permitting system, appointment booking tool and process automation. The City appointed new permanent staff in 2023 to accelerate the pace of development approvals, including a development advisor and a housing stability advisor, project managers, technicians and engineers.<sup>iv</sup>.
		</p>
	</div>


{:else if city === "Halifax"}

<div class="text">
		<p>
			Halifax is the capital and largest city of the Canadian province of Nova Scotia, as well as the most populous municipality in Atlantic Canada, with a population of 439,819 residents, as per the 2021 census. The city is facing significant challenges related to housing affordability and availability, exacerbated by unprecedented population growth and a housing market that cannot keep pace with demand. As of 2023, the municipality's housing shortage is estimated at nearly 20,000 units, a figure that continues to rise.  
		</p>
		<p>
			Halifax has received funding under the federal Housing Accelerator Fund (HAF) to implement an action plan aimed at increasing housing supply and affordability. The <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-halifax-en.pdf?rev=b0e13fff-bc07-45c9-9595-e2ea42cb23d5" target="_blank">HAF Action Plan</a> includes ten key initiatives to be implemented between 2024 and 2026. These initiatives focus on streamlining operational processes for permitting, reducing upfront costs for permit applications, amongst others. The plan also emphasizes encouraging small-scale residential development, including ADUs and tiny homes, through fee reductions and grant/loan programs. The City will develop pre-approved building plans to speed up the approval process for small-scale homes. The city will also allocate resources to implement regulatory changes to support housing, such as increasing allowable heights and densities and permitting up to four units on one lot in certain areas. 
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Detached"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			Backyard suites, are separate free-standing buildings, either built overtop an accessory structure like a garage, or simply on their own. They are often referred to as granny suites, carriage flats and could be in the form of a tiny house. 
		</div>

		<p>
			Halifax allows secondary suites and backyard suites accessory to single unit, two-unit, or townhouse dwellings. However, property owners may only have either one secondary suite or one backyard suite per lot, not both. The city is moving from regulating by form to regulating by the number of units, with current restrictions limiting the number of dwelling units per lot. Notably, parking is not required for either backyard or secondary suites, which may encourage more homeowners to consider adding an ADU.   
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Secondary"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			Secondary suites are separate dwelling units that are completely contained within a home. They are often referred to as in-law suites or basement apartments. 
		</div>
		<p>
			To support ADU development, Halifax requires a Building Permit for constructing or converting existing structures into ADUs. The permit fees are based on the square footage of the project, with additional fees applying depending on the location and complexity. Similar to cities in British Columbia, Halifax also has its own Secondary and Backyard Suite Incentive Program, offering funding for up to 50% of eligible project costs, to a maximum of $40,000. This program provides a forgivable loan with terms of up to 5 years, aiming to boost the supply of affordable housing across the city. The city also offers clear <a href="https://www.shapeyourcityhalifax.ca/allowing-secondary-suites-as-a-permitted-use" target="_blank">webpage</a>, online resources and guides to assist homeowners through the ADU development process.       
		</p>
	</div>


{:else if city === "Hamilton"}

	<div class="text">
		<p>
			Hamilton is considered a mid-sized city with a population of 569,353 (as per the 2021 Census) and is one of the larger urban centers in Ontario. The GTHA is a broader regional designation that encompasses the Toronto and Hamilton, and their surrounding municipalities. Hamilton is considerably affected by high housing costs and demand in the region. In 2023 the City received federal funding of $93.5 million to fast track its housing supply under the Housing Accelerator Fund (HAF) on top of its provincial targets. Aiming high, the City has set a target to add 2,675 new residential units three years.  
		</p>
		<p>
			Additional Dwelling Units (ADUs) were legalized in 2021, as part of the changes under Phase 1 of the <a href="https://www.hamilton.ca/build-invest-grow/planning-development/zoning/residential-zones-project#phase-1-low-density-residential-zones" target="_blank">Residential Zones Project</a> of the Comprehensive Zoning By-law changes. Hamilton has two types of ADUs i.e. internal and detached. The term Secondary Dwelling Unit (SDU) has been replaced within Zoning By-law documents, yet these units are commonly known as second units, accessory dwelling unit, secondary suite(s), granny flat, or in-law suite, basement apartment, accessory unit or garden suite.  
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Detached"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			Detached ADU (D-ADU) is a self-contained dwelling unit that is separate from the main dwelling on a lot.
		</div>

		<p>
			As of February 2024, the City has expanded its zoning up to four units (which are considered multiplexes) in all low-density residential zones. The overall design of the ADU may be determined as per the Zoning By-Law, Secondary Dwelling By-Law and Ontario Building Code requirements that indicate setback dimensions, height restriction, area based on the size of the primary dwelling unit, as well as considerations for the occupant(s). The bylaw does not require additional parking spaces for each unit. Other considerations include the option of extending servicing through the primary dwelling or separating water/sewer lines for the new connection.    
		</p>
	</div>

	<TrendsChartCity
		citySummaryData = {citySummaryData}
		type = "Secondary"
		city = {city}
		chartColours = {chartColours}
	/>

	<div class="text">
		<div class="definition">
			Internal ADU (I-ADU) is a conversion of interior space within or through a new addition to an existing dwelling. 
		</div>
		<p>
			Under HAF, the City has announced <a href="https://www.hamilton.ca/sites/default/files/2024-04/housing-secretariat-ADU-Multiplex-Housing-Incentive-Program.pdf" target="_blank">ADU And Multiplex Housing Incentive Program</a> which provides financial incentives like rebates of application fees and forgivable loans if affordability parameters are met. The program has some restrictions on site and maximum amount. 
			</p>
			<p>
			As of 2024, the City has made great strides in engaging its communities through Reimagining Neighbourhoods, which is a project for providing housing choice and more affordable housing options for its residents. The City has a dedicated <a href="https://www.hamilton.ca/build-invest-grow/construction-renovation/residential-building-renovation/additional-dwelling-units" target="_blank">webpage</a> and a dedicated team to review and issue ADU <a href="https://www.hamilton.ca/sites/default/files/2022-12/construction-building-permit-construct-demolish-application-form-dec2022.pdf" target="_blank">building permits</a>. The permit needs to be submitted in-person by the property owner or an agent on behalf of the owner, such as a contractor or designer, along with drawings and fees. The fee is charged at a flat rate for both attached and detached units, however, some ADUs may be subject to additional Parkland and Development charges. The City has published a <a href="https://www.hamilton.ca/sites/default/files/2024-02/buildingpermit-checklist-additional-dwelling-unity-ADU.pdf" target="_blank">checklist</a> and <a href="https://www.hamilton.ca/sites/default/files/2024-02/buildingpermit-drawing-additional-dwelling-unit-ADU.pdf" target="_blank">sample drawings</a> for reference.       
		</p>
	</div>



{:else if city === "Kingston"}


{:else if city === "Kitchener"}


{:else if city === "Mississauga"}


{:else if city === "Moncton"}


{:else if city === "Ottawa"}


{:else if city === "Regina"}


{:else if city === "Toronto"}


{/if}

	



<style>

	.definition {
		background-color: #ffffffb6;
		border: solid 1px var(--brandDarkBlue);
		padding: 0px;
		padding-left: 15px;
		padding-right: 15px;
		margin-top: 15px;
		font-size: 15px;
		line-height: 20px;
		font-style: italic;
	}

</style>
