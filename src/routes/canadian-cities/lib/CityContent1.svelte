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
			Calgary, Alberta is the third largest municipality in Canada, with a population of 1,306,784 (2021 Census). While it has the second lowest cost of living in the country, over 84,600 households pay more than 30% of their income for housing. As the City keeps growing, housing needs are increasing and expected to reach 100,000 households by 2026. The federal government awarded $228.5 million to the City to deliver 6,825 units over-and-above its three-year average growth, through seven initiatives it identified in its <a href="https://www.calgary.ca/social-services/funding/housing-accelerator-fund.html" target="_blank">HAF Action Plan</a>.. The City has specific targets for missing middle, multi-unit, and affordable units located close to transit, and will introduce incentives for legal secondary suites and to promote missing middle land use districts.

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
				In {city}, a detached ADU is called a “backyard suite”: a self-contained residence that is detached from the main residence, that includes garage suites, garden suites, or laneway homes.
			</p>
		</div>
   <p>
	To combat the lack of housing options, the City of Calgary, in its <a href="https://www.calgary.ca/communities/housing-in-calgary/housing-strategy.html" target="_blank">Housing Strategy 2024-2030</a> report, introduced bylaws and incentives to expediate the building process for secondary and backyard suites, also known as “accessory residential buildings” (ARBs). The strategy introduces new bylaws that include allowing ARBs on any residential lot. There can only be one ARB for each dwelling unit. Secondary suites require a parking space, and backyard suite parking requirements have been eliminated. Each must have two or more bedrooms, meet National Building Code (Alberta) requirements. In addition, secondary suites may have a maximum floor area of 100 m2, excluding any area covered by stairways and landings.
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
			In {city}, an attached ADU is called a “secondary suite”: a self-contained residence that is located within the main residence. It can be located on any floor within the home, like the basement, main floor, or upper floor.
		</div>
		<p>
			To construct a secondary suite or backyard suite, an applicant must apply for multiple permits. For a secondary suite, a building permit and a separate electrical permit are required; for a backyard suite, several are required: a building and electrical permit, plus permits for development, plumbing, mechanical, and gas. All permits are payable through an online submission or in person and take approximately 7 days to process. The City has no charges for development or registration of secondary suites under its Secondary Suite Amnesty Program. To make the process easier for applicants, the City has a comprehensive <a href="https://www.calgary.ca/development/home-building/new-secondary-suite.html#construction-information" target="_blank">webpage</a> that provides an application checklist for both secondary and backyard suites, a licensed trade <a href="https://dbaservices.calgary.ca/publicinq/Default.aspx?PossePresentation=CustomerSearch" target="_blank">contractor list</a>, sample drawings, a Q&A <a href="https://www.youtube.com/watch?v=mmxI9rGbEBg" target="_blank">Q/A webinar</a> recording, and a <a href="https://publicaccess.calgary.ca/lldm01/livelink.exe?func=ccpa.general&msgID=GTTseTrKeKO&msgAction=Download" target="_blank">backyard suite “how to” guide</a>. 

		</p>
		<p>
			With HAF funding, the City launched its <a href="https://www.calgary.ca/development/home-building/secondary-suite-incentive-program.html" target="_blank">Secondary Suite Incentive Program</a> to provide qualifying homeowners with up to $10,000 to build and register an attached secondary suite <a href="https://secondarysuites.calgary.ca/" target="_blank">(map here)</a>. A homeowner qualifies for reimbursement for the cost of installing all required safety elements that are not in the space at the time of application and if they have an active secondary suite building permit. Homeowners can also apply for other funding for adding accessibility and energy efficiency features.

		</p>
	</div>




{:else if city === "Edmonton"}

	<div class="text">
		<p>
			Edmonton, Alberta is the provincial capital and one of the six most populous metropolitan areas in Canada, with a population of 1,010,899 in the city and 1.4 million in the wider region (2021 Census). Edmonton is the Canadian trailblazer for zoning reform. Research on best practices to maintain and create affordable housing started with an excellent comparative overview in 2006 for affordable housing and land use planning. It noted the legalization of secondary suites as a high priority for creating affordable housing solutions. 
		</p>
		<p>
			While Edmonton is cited as the most affordable housing market in Canada, 46,115 households pay more than 30% of their income on housing. In its Affordable Housing Strategy 2023-2026, the City identifies that 56,000 residents are in core housing need, and its plan to build 2,700 units of affordable housing by 2026. In 2024, Edmonton was awarded $175 million from the federal HAF to implement its <a href="https://www.edmonton.ca/programs_services/housing/housing-accelerator-fund" target="_blank">HAF Action Plan</a> commitment to delivering more than 5,200 new homes, over-and-above what would typically be expected, between 2024 and 2026. The City committed to promoting secondary suites and backyard housing while investing in affordable housing, and has specific targets for transit-oriented development, multi-unit housing, and missing middle housing.

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
			In {city}, one form of detached ADU is called a “backyard house”: a building containing one or more Dwellings that is located within the Rear Yard, and partially or wholly within the Rear Setback of the applicable Zone of a Residential Site.
			</p>

			<p>
			Another form of detached ADU in {city} is called a “garden suite”: an accessory building containing a dwelling that is located separate from the principal use, which is single Detached Housing, Semi-detached Housing, or Multi-unit Housing in the form of row housing.
			</p>
		</div>

		<p>
			Edmonton <a href="Get to know your Zoning Bylaw, A Guide to Charter Bylaw 20001, May 2024 (edmonton.ca)" target="_blank">Zoning Bylaw 20001</a> permits secondary suites in RS zones, with up to a maximum of eight dwelling units permitted on an interior lot. They are also permitted in RSF, RSM, and RM zones defined by volume. In the Rural Residential (RR) Zone, a maximum of three dwellings are permitted in the form of one single-detached house, one backyard house, and one secondary suite per site. Minimum on-site parking requirements have been removed, allowing property owners to determine their own parking needs based on their activities or lifestyle.
  
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
			In {city}, an attached ADU is called a “secondary suite”: a Dwelling that is subordinate to, and located within, a building in the form of Single Detached Housing, Semi-detached Housing, Row Housing, or Backyard Housing. A Secondary Suite is not a principal Dwelling. A Secondary Suite has a separate entrance from the principal Dwelling, either from a common indoor landing or directly from outside the building… less Floor Area than the principal Dwelling… not separated from the principal Dwelling by a condominium conversion or subdivision.
 
		</div>
		<p>
			The application process for both attached and detached ADUs is straightforward; the City’s <a href="https://www.edmonton.ca/residential_neighbourhoods/secondary-suites" target="_blank">webpage</a> walks applicants through the process. [Note: the webpage will be updated according to new zoning regulations.] Applications can be submitted online or in person, and a detailed list of permits and fees are explained to aid completion of applications. It also offers a <a href="https://www.edmonton.ca/sites/default/files/public-files/assets/PDF/Secondary_Suite_Design_Guide.pdf?cb=1727102177" target="_blank">Secondary Suite Design Guide</a> to explain all design requirements and related considerations. [Note: As of late-2024, it is unclear if Edmonton provides an incentive program; the Secondary Suites Grant Program is not available on its website at this time.]
          
		</p>
	</div>



{:else if city === "Guelph"}

	<div class="text">
		<p>
			Guelph, Ontario is a mid-sized city with a population of 143,740 (2021 Census), located within the Greater Toronto and Hamilton Area, about 100 km from Toronto. The City has been preparing to be “future-ready” by prioritizing housing supply. Along with provincial targets, the City received federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF funding </a>of $21.4 million in 2024 to fast track its housing supply. The funds will help incentivize the creation of 739 new housing units, above its average, over the next three years. In response, the City has <a href="https://guelph.ca/wp-content/uploads/COG-HAF-Infographic-Accessible.pdf" target="_blank">renewed its commitment</a> to “gentle density” by evaluating changes to zoning and helping to increase supply in existing neighbourhoods. Under its <a href="https://guelph.ca/wp-content/uploads/COG-HAF-Infographic-Accessible.pdf" target="_blank">HAF Action Plan</a>, the City plans to further encourage missing middle housing in existing neighbourhoods (4+ units on low-density residential lots) and provide incentives for “additional residential dwelling units” (ARDUs) and affordable housing through parking reductions.
			 
		</p>
		<p>
			ARDUs are also known as basement apartments, in-law suites, accessory apartments, and coach houses. The City legalized attached ARDUs in 2017, and legalized detached ARDUs in 2021. The promising uptake has been made possible due largely to the City’s more permissive policies, processes, and community engagement efforts.  
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
			In {city}, an ADU is called an “additional residential dwelling unit” (ARDU): a dwelling unit that is self-contained, subordinate to and located on the same lot of a primary dwelling unit; both attached and detached.
			</p>
		<p>
			In {city}, a detached ADU is called a “garden suite”: a one-unit detached dwelling unit containing bathroom and kitchen facilities that is separate from and subordinate to a primary dwelling unit and that is designed to be portable and temporary.
			</p>
		</div>
		<p>
			The City’s <a href="https://guelph.ca/wp-content/uploads/Guelph-Zoning-Bylaw-2023.pdf" target="_blank">zoning bylaw</a> regulates the number of units, allowing up to three units on any given residential property. This means that homeowners can have a combination of a primary dwelling, an attached ARDU, and a detached ARDU on their property. However, specific regulations and requirements, including building codes (area and height restrictions in relation to primary dwelling), parking requirements (at least one parking space per unit), and design standards (maximum of two bedrooms) must be met. All ARDUs are required to be registered with the City and must have been issued a <a href="https://gpas.guelph.ca/smartlets/do.aspx?interviewID=login" target="_blank">building permit</a> before construction.

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
			In {city}}, an attached ADU is called an “additional residential dwelling unit” (ARDU): a dwelling unit that is self-contained, subordinate to and located within the same building of a primary dwelling unit.
		</div>
		<p>
			The City provides approximately $5.5 million every year in development fee reductions to contribute to new housing supply, primarily for ARDUs. Guelph has released a powerful <a href="https://storymaps.arcgis.com/stories/08bde3e420e641cb978bbd91f3723aa5" target="_blank">storymap</a> to share its efforts, as a call to action for the community. The City offers homeowners online services, including a building permit system, an appointment booking tool, and process automation. The City appointed new permanent staff in 2023 to accelerate the pace of development approvals, including a development advisor and a housing stability advisor, project managers, technicians, and engineers. 

		</p>
	</div>


{:else if city === "Halifax"}

<div class="text">
		<p>
			Halifax, Nova Scotia is the capital of the province, and its largest city. With a population of 439,819 (2021 Census), it is also the most populous city among those in the Maritime provinces. Together with the City of Dartmouth, City of Bedford, and surrounding areas in Halifax County, it forms the Halifax Regional Municipality. The city is facing significant challenges related to housing affordability and availability, exacerbated by unprecedented population growth and a housing market that is not keeping pace with demand. As of 2023, the municipality's housing shortage is estimated at nearly 20,000 units, a figure that continues to rise.  
		</p>
		<p>
			Halifax received funding from the federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF</a> to implement an <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-halifax-en.pdf?rev=b0e13fff-bc07-45c9-9595-e2ea42cb23d5" target="_blank">HAF Action Plan</a>, aimed at increasing housing supply and affordability. Its plan includes ten key initiatives to be implemented between 2024 and 2026. These initiatives focus on streamlining operational processes for permitting and reducing upfront costs for permit applications. The plan also emphasizes encouraging small-scale residential development, including ADUs and tiny homes, through fee reductions and grant and loan programs. The City will develop pre-approved building plans to speed up the approval process for small-scale homes, and will allocate resources to implement regulatory changes to support new housing, such as increasing allowable heights and densities, and permitting up to four units on one lot in certain areas.
 
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
			In {city}, a detached ADU is called a “backyard suite”: separate free-standing buildings, either built overtop an accessory structure like a garage, or simply on their own. They are often referred to as granny suites or carriage flats, and could be in the form of a tiny house.
		</div>

		<p>
			Halifax allows secondary suites and backyard suites as accessory units to single-unit, two-unit, and townhouse dwellings. Property owners may have only one secondary suite or one backyard suite per lot. The City is moving from regulating by form to regulating by the number of units, as current restrictions limit the number of dwelling units per lot. Parking is not required for either secondary suites or backyard suites, which may encourage more homeowners to consider adding an ADU.
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
			In {city}, an attached ADU is called a “secondary suite”: separate dwelling units that are completely contained within a home, often referred to as in-law suites or basement apartments.
		</div>
		<p>
			Halifax requires a building permit for constructing or converting existing structures to ADUs. Permit fees are based on the square footage, with additional fees that apply depending on the location and complexity of the project. Under the HAF, Halifax Regional Municipality will seek to develop a municipal incentive program in the next couple of years for secondary and backyard suites. The City also offers a clear <a href="https://www.shapeyourcityhalifax.ca/allowing-secondary-suites-as-a-permitted-use" target="_blank">webpage</a> and <a href = "https://cdn.halifax.ca/sites/default/files/documents/about-the-city/regional-community-planning/june-2024-backyard-suite-haf-fact-sheet.pdf" target="_blank">online resources to guide homeowners</a> through the ADU development process.
      
		</p>
	</div>


{:else if city === "Hamilton"}

	<div class="text">
		<p>
			Hamilton, Ontario is a mid-sized city with a population of 569,353 (2021 Census), is one of the larger urban centres in the province, and located in the Greater Toronto and Hamilton Area. Hamilton is considerably affected by high housing costs and demand in the region. In 2023, the City received federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF funding</a> of $93.5 million to fast track its housing supply beyond its provincial targets. Aiming high, the City has set a target of 2,675 new residential units over three years.
			  
		</p>
		<p>
			ADUs were legalized in 2021 in Phase 1 of the City’s <a href="https://www.hamilton.ca/build-invest-grow/planning-development/zoning/residential-zones-project#phase-1-low-density-residential-zones" target="_blank">Residential Zones Project</a>, part of its comprehensive zoning bylaw changes. Hamilton has two types of ADUs: “internal” and detached. The term “secondary dwelling unit” has been adopted into its zoning framework, although they are commonly known as second units, accessory dwelling units, secondary suite(s), granny flats, in-law suites, basement apartments, accessory units, and garden suites.
			  
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
			In {city}, a detached ADU is referred to as a “detached-ADU”: a self-contained dwelling unit that is separate from the main dwelling on a lot.
		</div>

		<p>
			As of February 2024, the City has expanded its zoning to allow up to four units (which are considered multiplexes) in all low-density residential zones. The overall design of the ADU may be determined as per its zoning bylaw, secondary dwelling bylaw, and Ontario Building Code requirements that specify setback dimensions, height restrictions, area based on the size of the primary dwelling unit. Additional parking spaces are not required. Other considerations include the option of extending servicing through the primary dwelling or separating water and sewer lines for the new connection.    
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
			In {city}, an attached ADU is referred to as an “internal-ADU”: a conversion of interior space within or through a new addition to an existing dwelling.
		</div>
		<p>
			Under the HAF, the City announced an <a href="https://www.hamilton.ca/sites/default/files/2024-04/housing-secretariat-ADU-Multiplex-Housing-Incentive-Program.pdf" target="_blank">ADU And Multiplex Housing Incentive Program</a>, which provides financial incentives such as rebates of application fees and forgivable loans, if affordability parameters are met. The program has some restrictions on site locations and a cap of $2,000 per building permit.

			</p>
			<p>
				As of 2024, the City has made great strides in engaging its communities through <a href="https://engage.hamilton.ca/reimagining-neighbourhoods" target="_blank">Reimagining Neighbourhoods</a>, a project to expand housing choice and more affordable housing options for residents. The City has a dedicated <a href="https://www.hamilton.ca/build-invest-grow/construction-renovation/residential-building-renovation/additional-dwelling-units" target="_blank">webpage</a> and team to review and issue <a href="https://www.hamilton.ca/sites/default/files/2022-12/construction-building-permit-construct-demolish-application-form-dec2022.pdf" target="_blank">building permits</a>. Permit applications need to be submitted in person by the property owner, or an agent on behalf of the owner (e.g. a contractor or designer), along with drawings and fees. The fee is charged at a flat rate for both attached and detached units; however, some ADUs may be subject to additional parkland and development charges. The City has published a <a href="https://www.hamilton.ca/sites/default/files/2024-02/buildingpermit-checklist-additional-dwelling-unity-ADU.pdf" target="_blank">checklist</a> and <a href="https://www.hamilton.ca/sites/default/files/2024-02/buildingpermit-drawing-additional-dwelling-unit-ADU.pdf" target="_blank">sample drawings</a> for reference.
			
		</p>
	</div>



{:else if city === "Kingston"}

	<div class="text">
		<p>
			Kingston, Ontario is a mid-sized city with a population of 132,485 (2021 Census). In 2022, the City adopted a single zoning bylaw that regulates land uses and development across most of the city. In 2024, the City received $27.6 million in federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF funding</a> to build 900 housing units over the next three years. The City has committed to making zoning amendments that will support infill housing. In addition, <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summaries-kingston-en.pdf?rev=538fa4fd-2d36-4791-9889-d28001dd7b60" target="_blank">Kingston's HAF Action Plan</a> commits to nine local initiatives that will support building a range of different types of homes and densities to meet the diverse needs of the community, including affordable tiny homes and additional residential units.
 
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
			In {city}, a detached ADU is called an “additional residential unit” (ARU): an independent dwelling unit located on the same property as a single-detached or semi-detached house or townhouse dwelling. Detached ARUs are also called carriage houses or tiny homes.
			
		</div>

		<p>
			Kingston began allowing ARUs in some parts of the city as part of a pilot project, and expanded that permission city-wide in 2019. Its recent <a href="https://www.cityofkingston.ca/media/huup3ag5/planning_zoningbylaw_2022-62_part1_sections1-19.pdf" target="_blank">By-Law Number 2022-62</a> allows for one attached and one detached ARU on a single property, permitting up to three units on most residential lots in the city, with the exception of rural properties. Each ARU requires at least one parking space that can be provided in a tandem arrangement. The gross floor area of an ADU can be equal to or less than that of the principal dwelling, must consider restrictions on distance and height for the detached unit, and must comply with the Ontario Building Code. There is a cap of eight bedrooms per lot: three in the main dwelling, three in a secondary unit, and two in a third unit.
			
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
			In {city}, an attached ADU is also called an “additional residential unit” (ARU): an independent dwelling unit located within the same building as a single-detached or semi-detached house or townhouse dwelling. Attached ARUs are also called secondary suites or in-law suites.			
		</div>
		<p>
			All ARUs require a building permit, and the rules are different for a new build versus a renovation of an existing building. Applications can be submitted through the City's online portal, DASH (Development and Services Hub). The City is committed to issuing the permit within ten business days, unless staff need additional information. The City has a clear <a href="https://www.cityofkingston.ca/building-and-renovating/building-permits/additional-residential-units-arus/" target="_blank">webpage</a> and has issued a <a href="https://www.cityofkingston.ca/media/adyfer21/planning_guide_secondresidentialunitpermits.pdf" target="_blank">second residential unit permit guide</a> to share the relevant information with the public in an accessible format.			
			
			</p>
			<p>
				With HAF funding, the City launched a dedicated financial assistance initiative, the <a href="https://www.cityofkingston.ca/building-and-renovating/building-permits/additional-residential-units-arus/aru-incentive-programs/" target="_blank">ARU Incentive Program</a>, for property owners that build an ARU to receive funding, including forgivable loan incentives and grants. The program has some conditions, including affordability for a five-year period, accessibility design features, and provision for future projects.
			
		</p>
	</div>

{:else if city === "Kitchener"}

	<div class="text">
		<p>
			Kitchener, Ontario is a mid-sized city with a population of 575,847 (2021 Census). Located approximately 100 km from downtown Toronto, Kitchener has been affected by high housing costs. The City is known for its many best practices that support missing middle housing. Kitchener received more than $42.4 million from the federal HAF in 2023 to fast track the construction of 1,216 new homes by early 2027. Kitchener also received provincial funding from Ontario’s <a href="https://news.ontario.ca/en/release/1003397/to-build-more-homes-ontario-launching-building-faster-fund-and-expanding-strong-mayor-powers" target="_blank">Building Faster Fund</a> in April 2024 for successfully meeting its annual targets. Announcements are yet to be made about City's initiatives under the new funding program.
						  
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
			In {city}, a detached ADU is called an “ADU (detached)”: the use of a building containing one or two additional dwelling unit(s) on the same lot as a single-detached dwelling, semi-detached dwelling, or street townhouse dwelling (as the principal use). An additional dwelling detached is not an accessory building and is commonly called a called a backyard home, granny flat, or carriage house.
						
		</div>

		<p>
			Kitchener introduced an ADU-enabling zoning change in 2021, and 12% of its new housing units were ADUs that year. In 2024, through an award-winning community consultation process, the zoning regulations were updated. The <a href="https://www.therecord.com/news/waterloo-region/kitchener-to-allow-up-to-four-units-on-a-single-lot-city-wide/article_3086c0eb-aaa6-52fe-b07a-8d7557939a0d.html" target="_blank">new regulations and official plan changes</a> permit up to four dwelling units on any residential lot, subject to design regulations. These units could be combinations of attached and detached units, with a maximum of three units within the primary dwelling and two within the detached suite. This as-of-right zoning change, moving from form to number of units, provides a significant opportunity to increase the number of units in existing neighbourhoods. One caveat on servicing that must be noted is that the Kitchener property standards bylaw requires that waste containers located on lots with three- or four-unit residential properties be stored within a building, structure, or enclosure to ensure they are screened from view and contain odours.
			
			</p>
			<p>
				An architect or designer is required to sign the drawings if a building has three or more units. These developments also require building permits and have associated application fees, such as for a zoning (occupancy) certificate, new driveway or driveway widening permit, development charges, and regional permits if the property is on a regional road. There is no minimum parking requirement in parts of the city that are walkable and well-served by public transit (within 800 metres of a light rail transit station) and up to 0.6 parking spaces per dwelling unit is required for those beyond that distance.
					   
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
			In {city}, an attached ADU is called an “ADU (attached)”: the use of a single-detached dwelling, semi-detached dwelling unit, or street townhouse dwelling unit where separate self-contained dwelling unit(s) are located within the principal building. An ADU (attached) is commonly called a duplex, triplex, or fourplex when located in the main building.
						 
		</div>
		<p>
			The City has a clear and easy-to-use <a href="https://www.kitchener.ca/en/building-and-renovating/additional-dwelling-units.aspx" target="_blank">webpage</a> and offers guides for applicants, such as <a href="https://www.kitchener.ca/en/resourcesGeneral/Documents/DSD_BUILD_Duplex_Guide.pdf" target="_blank">Adding a Second Unit</a> and <a href="https://www.kitchener.ca/en/resourcesGeneral/Documents/DSD_PLAN_Home-Owners-Additional-Dwelling-Units-Guide.pdf#:~:text=In%20Kitchener%2C%20they%20are%20all%20called%20additional%20dwelling,a%20single%20detached%2C%20semi-detached%20or%20street-fronting%20townhouse%20dwelling." target="_blank">Guide to Additional Dwelling Units</a> to address common questions, and a <a href="https://www.kitchener.ca/en/resourcesGeneral/Documents/DSD_BUILD_2021_Process_Guide_Duplex.pdf" target="_blank">Duplex Information Guide and Process</a> that includes a permit process flowchart.
						       
		</p>
	</div>


{:else if city === "Mississauga"}
	<div class="text">
		<p>
			Mississauga, Ontario has a population of 717,961 (2021 Census) and is the sixth largest city in Canada. Situated in the Greater Toronto and Hamilton Area, to the west of Toronto, it is one of three municipalities in the Region of Peel. More than half of its population is foreign-born (immigrants). In February 2023, the City released <a href="https://www.mississauga.ca/projects-and-strategies/city-projects/growing-mississauga-an-action-plan-for-new-housing/" target="_blank">Growing Mississauga</a>, its four-year action plan to get more housing built and make it more affordable. In December 2023, the City was awarded $112.9 million from the federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF</a> to fast track the delivery of 3,000 homes in the next three years, and over 35,200 homes in the next decade. Through the <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-mississauga-en.pdf?rev=fe28599a-2737-412e-b873-4e164b76817b" target="_blank">HAF Action Plan</a>, the City has renewed its commitment to affordable housing and is working to update its official plan and zoning bylaw to allow up to four units per lot as-of-right, city-wide.
						   
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
			In {city}, a detached ADU is called a “detached additional residential unit” (ARU) or a garden suite, coach house, tiny home, or laneway suite: a unit with its own kitchen, sanitary facilities, and bedrooms/sleeping area and is located within an ancillary structure on the same lot as a detached dwelling, semi-detached, linked dwelling, or street townhouse.
						 
		</div>

		<p>
			The City allows one detached ARU that can be one or two storeys, depending on the size and type of lot. No additional parking is required. Water and wastewater connections can be shared with the primary home or separated, and guidelines are to be followed for new electrical and natural gas services. Zoning approvals, permit fees, and charges depend on the type of unit(s) that is proposed. There are also Ontario Building Code requirements that have implications for design.
						     
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
			In {city}, an attached ADU is called an “attached additional residential unit” (ARU): a unit with its own kitchen, sanitary facilities, and bedrooms/sleeping area and is contained within a detached dwelling, semi-detached, linked dwelling, or street townhouse.
						   
		</div>
		<p>
			To simplify the permit approval process and help lower costs, the City offers a <a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/find-property-information/" target="_blank">property information tool</a> and <a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/pre-approved-garden-suite-plans/" target="_blank">pre-approved plans</a> for studio and one-bedroom garden suites. The designs can be customized for exterior and interior finishes without additional approvals. The application process for ARUs is straightforward, as the City's <a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/additional-residential-units/" target="_blank">webpage</a> walks applicants through the process. Applications can be submitted online, and a detailed list of permits and fees is provided to aid in the completion of applications.
						       
		</p>
	</div>


{:else if city === "Moncton"}


	<div class="text">
		<p>
			Moncton, New Brunswick is the largest city in the province, with a population of 79,470 in the city and 119,785 in the Census Metropolitan Area (CMA) (2021 census). Together with the City of Dieppe and the Town of Riverview, the City of Moncton forms part of a tri-community urban setting. Recent growth rates for the City and the Greater Moncton Region (the CMA) are among the highest in the country, and Moncton is recognized as an economic driver for New Brunswick. According to estimates of future population growth prepared for its Urban Growth Strategy (2021), the total population of Moncton is forecasted to increase by 46.2% between 2021 and 2046. 
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
			In {city}, a detached ADU is called a “garden suite”: a detached accessory dwelling placed or erected in the rear yard of an existing single unit dwelling lot.
						   
		</div>

		<p>
			The City allows either an attached or detached ADU on one lot. Its <a href="https://www5.moncton.ca/docs/bylaws/By-Law_Z-222_Zoning_Arrete_zonage.pdf" target="_blank">restrictive zoning</a> allows attached ADUs in R-1B, R2, R2U, RM and R3 zones only, with conditions: they cannot exceed 35% of the main dwelling’s gross floor area and are limited to a single unit. Garden suites are permitted in R-1B, R2, R2U and RM zones and have area, height, and setback restrictions. Both ADUs and garden suites require one parking space, in addition to the parking required for the main use of the lot.
						 
			</p>
			<p>
				In 2023, the City received federal funding of $15.5 million from the <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF</a> to fast track more than 490 housing units over the next three years. Under its <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-moncton-en.pdf?rev=609119ee-f1a2-484f-936d-bbc0a4eadea1" target="_blank">HAF Action Plan</a>, the City has committed to implement an Accessory Dwelling Unit (ADU) Grant Program to encourage homeowners to build ADUs, including basement apartments and detached garden suites, to increase housing supply in existing neighbourhoods. In addition, the City will provide a new three-year program providing $10,000 grants to assist homeowners in creating “gentle density” units. Through 2026, the City intends to review its planning regulations to support and simplify the requirements for building ADUs in residential zones, city-wide. With HAF funding, the City has committed to run grant programs, implement e-permitting systems, and streamline its zoning bylaw, among other actions.
							
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
			In {city}, an attached ADU is called an “accessory dwelling”: a dwelling unit which is secondary to the principal dwelling unit and, with the exception of a garden suite, contained in the same building.
						 
		</div>
		<p>
			ADU developments require a building permit, and documents need to be submitted in person. The City offers a <a href="https://www5.moncton.ca/docs/bi/13E_Creating_a_Secondary_Suite_small_apartment.pdf" target="_blank">checklist</a> for the creation of a secondary suite in a single-family dwelling. The City does not have a dedicated webpage for the development of ADUs at this time
						  
			</p>
	</div>


{:else if city === "Ottawa"}
	<div class="text">
		<p>
			With a population of 1,017,449 (2021 Census), Ottawa, Ontario ranks among the largest cities in Canada. It is the capital of the country and its “sister city,” Gatineau in Quebec, is in close proximity. In February 2024, the City of Ottawa was awarded $176.3 million from the federal HAF. Ottawa's HAF spending plan allocates 90% of the funds toward its Non-Profit Affordable Housing Pipeline Strategy and 10% toward the remaining initiatives. The strategy proposes a variety of approaches intended to have lasting impacts on the broader housing system, including through initiatives such as the elimination or simplification of rezoning requirements to allow for low-density area intensification, expansion of existing affordable rental programming, and modernization of policy and regulatory frameworks with digitization and leveraging office buildings and City-owned land for housing. According to Ottawa's <a href="https://documents.ottawa.ca/sites/documents/files/section3_op_en.pdf" target="_blank">Official Plan</a> (Section 3.2, Support Intensification), 47% of new housing is to be in urban areas and 46% in greenfield areas. ADUs and coach houses are part of achieving the City's residential density targets (Section 3.2.11).
			
			With a population of 1,017,449 (as per the 2021 Census), Ottawa ranks among the largest cities in Canada. It is the capital of the country and has a sister city Gatineau in Quebec in close proximity. In February 2024, City of Ottawa was awarded $176.3 million under the Housing Accelerator Fund (HAF). Ottawa's HAF funding spending plan allocates 90% of the fund towards the Non-Profit Affordable Housing Pipeline Strategy and 10% towards the remaining initiatives. Their HAF Action Plan proposes a variety of approaches that will leave lasting impacts on the broader housing system including initiatives like the elimination or simplification of rezoning requirements to allow for low-density area intensification, expansion of existing affordable rental programming, and modernizing policy and regulatory frameworks including digitization and leveraging office buildings and city-owned land for housing. According to Ottawa's <a href="https://documents.ottawa.ca/sites/documents/files/section3_op_en.pdf" target="_blank">Official Plan</a> section 3.2 Support Intensification, 47% of dwelling growth is to take place in the urban areas and 46% in greenfield areas of the city. Section 3.2.11 states that Additional Dwelling Units (ADUs) and coach houses are part of contributing to the city's residential density targets. 
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
			In {city}, a detached ADU is called a “coach house”: a separate dwelling unit that is subsidiary to and located on the same lot as an associated principal dwelling unit but is contained in its own building that may also contain uses accessory to the principal dwelling.
						 
		</div>

		<p>
			Since 2005, secondary dwelling units, also called accessory apartments and in-law suites, are permitted in all areas of the city, apart from the former Village of Rockcliffe Park, while coach houses have been legal since 2016.
						 
			</p>
			<p>
				Policies on the use of ADUs and coach houses are outlined in the City's <a href="https://documents.ottawa.ca/sites/documents/files/zoning_bylaw_part5_section133_en.pdf" target="_blank">Zoning By-law No. 2008-250, section 133</a>. An ADU and a coach house may be put on the same lot, but the total cannot exceed three units. Only one ADU and coach house may be built on a single lot. The maximum number of bedrooms between the primary residence, ADU, and coach house cannot exceed 12 bedrooms. Building permits are required for each, and there may also be coach house applications that require a Committee of Adjustment minor variance. No additional parking spaces are required for either.			
				 
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
			In {city}, an attached ADU is called an “additional dwelling unit” (ADU apartment): a separate dwelling unit located in the same building as an associated principal dwelling unit in a detached dwelling, linked-detached dwelling, semi-detached dwelling, duplex dwelling, or townhouse dwelling.
						  
		</div>
		<p>
			The City offers webpages with the requirements, process, costs, and timelines associated with adding an <a href="https://ottawa.ca/en/planning-development-and-construction/building-and-renovating/do-i-need-building-permit/adding-apartment-additional-dwelling-units" target="_blank">ADU apartment</a> and an <a href="https://ottawa.ca/en/planning-development-and-construction/building-and-renovating/do-i-need-building-permit/adding-coach-house-additional-dwelling-units-accessory-structure#section-9525a446-1923-454a-8c3e-153f75afc887" target="_blank">ADU coach house</a>. The approximate timeline, based on a City Council-approved enhanced service level, is 15 business days for the first review. Applications can be submitted online or in person. For more details, the City also offers a <a href="https://documents.ottawa.ca/sites/documents.ottawa.ca/files/how_to_coach_en.pdf" target="_blank">“how-to” guide</a>.
			
			       
		</p>
	</div>


{:else if city === "Regina"}


	<div class="text">
		<p>
			Regina, Saskatchewan is the capital of the province, and has a population of 226,404 (2021 Census), making it the 16th largest city in Canada. The City’s Housing Comprehensive Strategy identifies that affordable rental housing is lacking and with rising levels of immigration, this has become an area of concern. In a 2019 follow-up report, 12,255 households are in core housing need; 74% cannot afford their housing.  
		</p>
		<p>
			In the City’s <a href="https://www.regina.ca/about-regina/official-community-plan/?gad_source=1&gclid=EAIaIQobChMIlsXB0KzSiAMVbjbUAR019h4eEAAYASAAEgItkvD_BwE" target="_blank">Official Plan</a>, secondary suites are a key component of ensuring housing is available in the future. Its policies state that the City must allow for the construction of new housing types to meet specific housing needs and create attainable housing options. It also advocates for a diversity of housing types and consideration of alternative housing types, such as garden suites, live-work units, small-lot detached dwellings, and mixed-use buildings. Both secondary suites and garden suites are low-density developments.
						  
		</p>
		<p>
			In 2024, Regina signed an <a href="https://www.regina.ca/home-property/housing/housing-accelerator-fund/" target="_blank">an agreement</a> with the federal government for $35.2 million from the <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF</a>, with the goal of adding 1,100 units over the next three years. The 11 initiatives in the <a href="https://www.regina.ca/home-property/housing/housing-accelerator-fund/" target="_blank">Action Plan</a> proposed by the City include advancing the development of missing middle housing in central neighbourhoods and supporting the provision of greater housing diversity in established neighbourhoods.
			 
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
			In {city}, a detached ADU is called a “backyard suite”: a subordinate, self-contained dwelling unit within an accessory building or portion of an accessory building, in the side or rear yard, on a lot that contains a principal Dwelling Unit.
						
		</div>

		<p>
			Regina’s <a href="https://open.regina.ca/dataset/bylaw-no-2019-19-the-regina-zoning-bylaw-2019" target="_blank">Zoning Bylaw</a> (Part 2C.2) is dedicated to implementing secondary suite polices, detailing permitted locations of construction and allowable floor area. Secondary suites are permitted in most residential zones and limited to the lesser of 40% of the gross floor area of the primary dwelling, or 80 m2. The maximum number of secondary suites per principal dwelling unit is one, and one parking stall is required on site for the secondary suite. Part 2C.3 is dedicated to implementing backyard suite polices. It allows only be one backyard suite per principal dwelling unit on one lot, which cannot be built if the primary dwelling already contains a secondary suite. Its size is also limited to the floor area of the principal dwelling, or 80 m2. One parking stall is required onsite for the backyard suite.
						   
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
			In {city}, an attached ADU is called a “secondary suite”: a subordinate, self-contained Dwelling Unit within a building or portion of a building that contains a principal Dwelling Unit, and where both dwelling units constitute a single real estate entity.
			
		</div>
		<p>
			Regina provides a <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Application-Package-Secondary-Suite.pdf" target="_blank">Secondary Suite Permit Application Package</a> and a <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Application-Package-Backyard-Suite.pdf" target="_blank">Backyard Suite Permit Application Package</a> on its website. Applications can be submitted online or in person at City Hall. Currently, the processing time of a permit application is ten days. The City also offers additional guides, including a <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Advisory-Backyard-Suites.pdf" target="_blank">Planning & Development Services Advisory</a> and <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Design-Requirements-Backyard-Suites.pdf" target="_blank">Design Requirements</a>, for backyard suites.
						
			</p>
			<p>
				Both secondary and backyard suites are eligible for a 25% tax exemption for five years if built in the city centre or in certain inner-city areas. Buildings must be provided for long-term rental purposes to qualify.       
		</p>
	</div>


{:else if city === "Toronto"}
<div class="text">
		<p>
			Toronto, Ontario is the capital of the province, and as one of Canada’s major urban centres, has a population of 2,794,356 people (2021 Census). To keep up with its growing population, Toronto needs to add approximately 30,000–40,000 new housing units annually. The City of Toronto received federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF</a> funding of $471 million, intended to create an additional 11,780 homes on top of current projections over the next three years. Under the HAF, the City is also committed to expanding missing middle housing options through off-the-shelf designs, education campaigns, more forgiving planning rules, and easier permitting processes.
			
			 
		</p>
		<p>
			In 2018–2019, the City of Toronto started accelerating its actions to increase the supply of missing middle housing, through what is now called the<a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/" target="_blank">Expanding Housing Options</a> program. Some of these accelerated actions focus on the smaller scale, allowing  missing middle housing, such as secondary suites, laneway suites and garden suites, and most recently, multiplexes (May 2023).
						 
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
			In {city}, a detached ADU is called a “laneway suite” or “garden suite”: self-contained residential units located on the same lot as a detached house, semi-detached house, townhouse, or other low-rise house. They are typically located in the back yard and are generally smaller in size, and completely detached from the main house on the lot. However, the key difference is that a laneway suite is next to a public laneway.
						  
		</div>

		<p>
			The City’s zoning bylaws are permissive and regulated by the number of units regardless of form, permitting up to four units on all residential lots. These units can be a combination of secondary suites and garden suites or laneway suites. No vehicular parking is required for these additional dwellings, but they must include a minimum of two bicycle parking spaces per unit. In general, the detached unit has limitations on design, including setbacks, distance from the primary unit, and total covered area. The summary of garden suites rules and regulations can be found <a href="https://www.toronto.ca/wp-content/uploads/2022/02/9320-cityplanning-garden-suites-summary-of-rules-Feb2022.pdf" target="_blank">here</a>.
			
			  
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
			In {city}, an attached ADU is called a “secondary suite”: a self-contained living accommodation for an additional person or persons living together as a separate single housekeeping unit, in which both food preparation and sanitary facilities are provided for the exclusive use of the occupants of the suite, located in and subordinate to a dwelling unit.
						 
		</div>
		<p>
			As part of its Laneway and Garden Suites Initiative, the City launched the <a href="https://www.toronto.ca/community-people/community-partners/housing-partners/housing-initiatives/laneway-suites-program/" target="_blank">Development Charges Deferral Program for Ancillary Secondary Dwelling Units</a> program to encourage eligible property owners to develop these suites by deferring development charges for 20 years. While the City does not have a dedicated team or comprehensive webpage for secondary suites, it does offer an <a href="https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/express-building-permits/" target="_blank">express building permit system</a> for one- to two-unit conversion projects.
						      
		</p>
	</div>



{:else if city === "Waterloo"}

	<div class="text">
		<p>
			Waterloo, Ontario is a mid-sized city with a population of 121,436 (2021 Census) that is located 120 km from downtown Toronto. Waterloo received $22 million in 2024 under the federal HAF to build 650 new housing units in the next three years, over-and-above its historical housing growth. The City is using the funds to create a housing action plan to increase the supply of housing, accelerate the construction of new housing (including affordable housing), create greater certainty in the development approvals and building permit processes, and support long lasting systemic changes.  
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
			In Waterloo, a detached ADU is called a “coach house”: an accessory self-contained ADU that is detached from the principal building and located on the same lot as the principal building.
						
		</div>

		<p>
			The City legalized both ARUs and coach houses in 2018, and under <a href="https://www.waterloo.ca/en/government/resources/Documents/Zoning-bylaw/Zoning-By-law-2018-050.pdf" target="_blank">Zoning By-law 2018-050</a>, permits up to three units on a single lot as-of-right. Neither ARUs nor coach houses can occupy more than 40% of the building floor area, and there are additional regulations on setbacks and heights. There is a requirement to provide at least one parking space for each additional unit, which can be a tandem arrangement in the driveway. 
						 
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
			In {city}}, an attached ADU is called an “additional residential unit” (ARU): a separate self-contained dwelling unit that is subordinate to and located within the same building as the principal dwelling unit or within a coach house.
						 
		</div>
		<p>
			ARUs require a permit from the Grand River Conservation Authority and a building permit from the City. The City has launched an <a href="https://www.engagewr.ca/waterloo-haf-initiative-6" target="_blank">initiative</a> to create a webpage that helps homeowners understand the process, steps, requirements, and costs associated with the construction of ARUs, as well as the financial incentives to encourage homeowners to build market and affordable ARUs. This initiative is expected to be completed by February 2026. In the meantime, residents are encouraged to stay informed by <a href="https://www.engagewr.ca/waterloohafactions" target="_blank">signing up</a> for updates.
						       
		</p>
	</div>


{:else if city === "Victoria"}
	<div class="text">
		<p>
			Victoria, British Columbia has a population of 91,867 (2021 Census). The City has implemented policies to encourage the development of ADUs as part of its strategy to address housing affordability and increase housing options. Announced in February 2024, Victoria’s federal <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund" target="_blank">HAF</a> funds include investing nearly $18 million to support its housing plans, aiming to fast track the creation of more than 900 homes in the next three years, with the potential for over 16,000 new homes by 2034. Its <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-victoria-en.pdf?rev=d0207001-bdce-4d64-a794-8c6ed81df6ad" target="_blank">HAF Action Plan</a> encompasses several key initiatives, including zoning bylaw changes to allow up to six units on a typical residential lot without rezoning, such as by waiving public hearings and rezonings for qualifying affordable housing projects, and modernizing the development application process to expedite permit approvals.
			
			  
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
			In {city}, a detached ADU is called a “garden suite”: a legal, detached, ground-oriented suite in the backyard of a single-family home. Garden suites are designed to be long-term rental housing. They cannot be strata-titled or used as short-term rentals (such as an Airbnb).
						
		</div>

		<p>
			The City allows for detached ADUs, also called garden suites, as legal, ground-oriented suites located in the backyard of single-family homes. Garden suites are designed for long-term rental housing and cannot be strata-titled or used as short-term rentals, such as Airbnb. In Victoria, detached ADUs are permitted as-of-right in several zones, including R1-A, R1-B, R1-G, R-2, R-J, and R-K, while attached ADUs, such as secondary suites, are also allowed in single-family detached houses within these zones. The City permits only one garden suite per lot, and properties that already have secondary suites or existing duplexes are not eligible. Overall, the zoning is permissive for ADUs, allowing for the construction of multiplexes, corner townhouses, and heritage-conserving infill housing in traditional residential areas, which allows development of up to six homes on an average residential lot. No additional parking is required for garden suites; however, the primary dwelling must have at least one parking stall, which cannot be in the front yard. The maximum height for garden suites is set at 3.5 metres, with specific setbacks required from lot lines and existing dwellings.
						   
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
			In {city}, an attached ADU is called a “secondary suite”: a complete living unit with its own kitchen, sleeping area, and washroom facilities contained within another dwelling. The two dwelling units (the primary residence and the secondary suite) and any common spaces make up a single real estate entity that cannot be stratified or otherwise legally separated from the other.
			
		</div>
		<p>
			Victoria requires building, electrical, and plumbing permits, with full payment for these permits required at the time of application. The City provides a clear, easy-to-navigate <a href="https://www.victoria.ca/building-business/permits-development-construction/building-renovating/secondary-suites" target="_blank">webpage</a> with information about missing middle housing and garden suites, along with online tools such as the interactive <a href="https://maps.victoria.ca/Html5Viewer/index.html?viewer=VicMap" target="_blank">Vicmap</a>, which helps residents identify the zone for their property. Additionally, the City provides <a href="https://www.victoria.ca/media/file/secondary-suites-guidelinespdf" target="_blank">design guidelines</a> and a "how-to” guide for secondary suites to assist homeowners with the application process.
						      
		</p>
	</div>


{:else if city === "Vancouver"}

	<div class="text">
		<p>
			Vancouver, British Columbia has a population of 662,248 (2021 Census) and faces one of the most severe housing crises in Canada, driven by high demand, limited supply, and skyrocketing property prices. As part of the HAF, the City of Vancouver plans on adopting a <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-vancouver-en.pdf?rev=e62f4069-012c-4687-bdcd-83b4a115c2ef" target="_blank">HAF Action Plan</a> that aims to increase housing supply and affordability across the city. The plan includes streamlining missing middle housing by updating planning rules to allow for a variety of housing options, optimizing below-market rental development, and implementing significant transit-oriented housing along the new Broadway Subway line. Additionally, it focuses on unlocking non-market housing through financial supports and zoning changes, simplified permit conditions to accelerate review timelines, and modernized permitting services through digital transformation.
						
		</p>
		<p>
			<a href="https://vancouver.ca/files/cov/housing-van-10-year-3-year-plan-council-presentation.pdf" target="_blank">Housing Vancouver 10-year Housing Targets 2024-2033</a> has separate housing targets for different housing typologies (laneway housing, coach houses, multiplexes) and types (rental and ownership). It aims to have many new homes with two or more bedrooms, and increase low-density ground-oriented ownership options.
		
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
			In {city}, a detached ADU is called a “laneway house”: a detached dwelling unit constructed in the rear yard of a site on which is situated a Single-Detached House or Single-Detached House with Secondary Suite, but does not include an Infill Single-Detached House.
			
		</div>

		<p>
			The city has been proactive in legalizing ADUs, with efforts dating back to the 1980s. Vancouver's <a href="https://bylaws.vancouver.ca/zoning/land-uses-by-zoning-district.pdf" target="_blank">policy framework for ADUs</a> is established through provincial building codes and local zoning bylaws. The City allows attached ADUs (secondary suites) by right or conditionally in various zones, depending on the housing form. The City also permits detached ADUs (laneway houses) by right in some zones (RM-11, RM-11N, RM-12N) and conditionally in many others.  The City has implemented policies to streamline ADU development, such as not requiring parking spaces for any development.   
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
			In {city}, an attached ADU is called a “secondary suite”: a smaller dwelling unit within a larger Single-Detached House or Duplex, which must have separate external access and may have shared internal access, but does not include a Lock-Off Unit.
			In {city}, an attached ADU is also called a “lock-off unit”: a smaller dwelling unit within a larger principal dwelling unit, which must have separate external access and shared internal access, and which can be locked off from the larger dwelling unit, but does not include a Secondary Suite. 
						
		</div>
		<p>
			Vancouver requires various permits for ADU development, including a laneway house permit, development permit, and building permit. Fees vary based on the project value.       
		</p>
	</div>


{:else if city === "Winnipeg"}

	<div class="text">
		<p>
			Winnipeg, Manitoba is the capital of the province and its largest city, with a population of 749,607 (2021 Census). The housing market in Winnipeg is considered the most affordable among the seven largest Canadian population centres, and consists of single-detached homes (58%), semi-detached and row houses (8%), and apartments (34%). More than 20% of households spend more than 30% of their income on housing, rendering it unaffordable. The fastest growing demographic group is senior citizens. Immigrant and Indigenous populations, who may require larger dwelling units, are also growing.  
		</p>
		<p>
			In 2023, the City secured $122.4 million through the federal HAF to increase its housing supply by 14,101 housing units over the next three years, including at least 931 affordable units. Its <a href="https://www.winnipeg.ca/building-development/housing/housing-accelerator-fund" target="_blank">HAF Action Plan</a> initiatives include rapid zoning bylaw amendments to streamline zoning rules that promote infill development, increase density, and expand missing middle housing, city-wide. These changes would allow as-of-right permission for up to four units per residential lot, and buildings up to four stories high within 800 metres of high-frequency transit. Another initiative aims to amend and update local area plans that remove barriers to housing development in existing neighbourhoods. The City will also use the HAF funds to digitize and facilitate faster development and approval processes.
						 
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
			In {city}, a detached ADU is called a “detached secondary suite”: a self-contained living space located near a single-family residence. The suite may be an independent structure or located over, or attached to, a detached garage.
			
		</div>

		<p>
			The construction of secondary suites, whether detached or attached, is governed by several key regulations, including the Manitoba Building Code, Winnipeg Building Bylaw, Winnipeg Electrical Bylaw, and Manitoba Plumbing Code.
			</p>
			<p>
			The City allows for only one secondary suite, either attached or detached, per lot. Detached secondary suites are allowed on single-family properties in zones R1 and R2, while attached suites are permitted in a broader range of zones including A, RR5, RR2, R1, R2, RMF, RMU, C1, and C2. The number of units per lot is specified by its zoning regulations. For detached secondary suites, sewer and water services can either be extended from the primary dwelling or installed directly from the street, pending approval from the City's water and waste department. The building codes apply equally to single-family homes and detached secondary suites, requiring adherence to all relevant regulations. The City sets minimum and maximum sizes for all ADUs. Additionally, properties with secondary suites must have at least two off-street parking spaces.   
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
			In {city}, an attached ADU is called a “secondary suite”: a self-contained living space added to, or created within, a single-family residence. The suite is an independent dwelling unit and has a separate entrance.  
		</div>
		<p>
			Development and building permits are mandatory for developing a detached secondary suite. Separate electrical and plumbing permits are also required.
			</p>
			<p>
				The City provides clear, easily accessible online resources, including a comprehensive <a href="https://www.winnipeg.ca/building-development/building-renovating/building-trade-permits/secondary-suites" target="_blank">webpage</a> detailing permit requirements, building codes, and application procedures for both attached and detached ADUs. It also includes links to relevant details and downloadable guides. The application process for secondary suites is straightforward, with options to submit applications online, by email, or in person. The City also provides a direct phone line for permits and a dedicated application form for detached ADUs, saving time and effort for both the applicant and the City.
							       
		</p>
	</div>

{/if}

	


<style>



</style>
