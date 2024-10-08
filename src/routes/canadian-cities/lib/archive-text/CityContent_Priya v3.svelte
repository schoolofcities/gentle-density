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
			Calgary is the third largest municipality in Canada, with a population of 1,306,784, as per the 2021 Census. While having the second lowest cost of living in the country, over 84,600 households cannot afford to pay for housing in the neighbourhoods they reside in.  As the City keeps growing, housing needs also increases and is expected to reach 100,000 by 2026. The federal government recognizes the need and awarded $228.5 million for the funding of seven initiatives to deliver 6,825 units over and above their three-year average growth under the <a href="https://www.calgary.ca/social-services/funding/housing-accelerator-fund.html" target="_blank">Housing Accelerator Fund (HAF) Action Plan</a>. The City has specific targets for units close to transit, missing middle, multi-unit and affordable. Under the HAF, the will initiate incentives for legal secondary suites and promote missing middle land use districts.   
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
			A Detached ADU in {city} is called Backyard Suite: is a self-contained residence that is detached from the main residence, that includes garage suites, garden suites, or laneway homes.  
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
			An attached ADU in {city} is called secondary suite: is a self-contained residence, that is located within the main residence. This can be located on any floor within the home, like the basement, main floor or upper floor.
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
			Even though Edmonton is cited as the most affordable housing market in Canada, 46,115 households cannot afford to pay for housing. In their Affordable Housing Strategy 2023-2026, the city details that 56,000 residents are in core housing need and by 2026, they plan to build 2,700 units of affordable housing.  In 2024, Edmonton was awarded $175 million to implement its <a href="https://www.edmonton.ca/programs_services/housing/housing-accelerator-fund" target="_blank">Housing Accelerator Fund (HAF) Action Plan</a> between 2024 and 2026 to deliver more than 5,200 new homes over-and-above what would typically be expected. Under the HAF, the city promises the promotion of Secondary Suites and Backyard Housing while investing in affordable housing. The City has specific targets for Transit-oriented development, Multi-unit housing, and Missing Middle. 
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
			One formof Detached ADU in {city} is called Backyard House: is defined as a building containing 1 or more Dwellings that is located within the Rear Yard, and partially or wholly within the Rear Setback of the applicable Zone, of a Residential Site. 
			</p>

			<p>
			Another form of Detached ADU in {city} is called Garden Suite: means an accessory building containing a dwelling which is located separate from the principal use which is single Detached Housing, Semi-detached Housing, or Multi-unit Housing in the form of row housing.   
		</p>
		</div>

		<p>
			Edmonton <a href="Get to know your Zoning Bylaw, A Guide to Charter Bylaw 20001, May 2024 (edmonton.ca)" target="_blank">Zoning Bylaw 20001</a> states that Secondary Suites are permitted in the RS zones with up to a maximum of 8 dwellings units are permitted on an interior lot. They are also permitted in RSF, RSM, and RM that are zones defined by volume. In the Rural Residential (RR) Zone, a maximum of three dwellings are permitted in the form of one single-detached house, one backyard house, and one secondary suite per site. The minimum on-site parking requirements have been removed allowing properties to determine their own requirements based on their activities or lifestyle.   
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
			An attached ADU in {city} is called Secondary Suite: a Dwelling that is subordinate to, and located within, a building in the form of Single Detached Housing, Semi-detached Housing, Row Housing, or Backyard Housing. A Secondary Suite is not a principal Dwelling. A Secondary Suite has a separate entrance from the principal Dwelling, either from a common indoor landing or directly from outside the building. A Secondary Suite has less Floor Area than the principal Dwelling. A Secondary Suite is not separated from the principal Dwelling by a condominium conversion or subdivision.  
		</div>
		<p>
			The application process for both secondary suites and backyard homes is straightforward as the City’s <a href="https://www.edmonton.ca/residential_neighbourhoods/secondary-suites" target="_blank">webpage</a> walks applicants through the process. Though it must be noted that the webpage needs to be updated according to the new Zoning By Law regulations. Applications can be submitted online or in person and a detailed list of permits and fees are explained to aid in the completion of the application. They also offer a <a href="https://www.edmonton.ca/sites/default/files/public-files/assets/PDF/Secondary_Suite_Design_Guide.pdf?cb=1727102177" target="_blank">Secondary Suite Design Guide</a> to walk through all design requirements and considerations. Currently, it is unclear if Edmonton has an incentive program for secondary suites or backyard housing as their Secondary Suites Grant Program is not available on the website anymore.          
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
			Additional Residential Dwelling Unit (ARDU): is a dwelling unit that is self-contained, subordinate to and located on the same lot of a primary dwelling unit. This applied to both attached and detached ADUs.  
			</p>
		<p>
			A Detached ADU in {city} is called Garden Suite means a one-unit detached dwelling unit containing bathroom and kitchen facilities that is separate from and subordinate to a primary dwelling unit and that is designed to be portable and temporary.
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
			An attached ADU in {city} is called Additional Residential Dwelling Unit (ARDU): is also a dwelling unit that is self-contained, subordinate to and located within the same building of a primary dwelling unit.
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
			A Detached ADU in {city} are called Backyard Suites: are separate free-standing buildings, either built overtop an accessory structure like a garage, or simply on their own. They are often referred to as granny suites, carriage flats and could be in the form of a tiny house. 
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
			Attached ADUs in {city} are called Secondary Suites: are separate dwelling units that are completely contained within a home. They are often referred to as in-law suites or basement apartments. 
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
			A Detached ADU in {city} is called Detached ADU (D-ADU): is a self-contained dwelling unit that is separate from the main dwelling on a lot.
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
			An attached ADU in {city} is called Internal ADU (I-ADU): is a conversion of interior space within or through a new addition to an existing dwelling. 
		</div>
		<p>
			Under HAF, the City has announced <a href="https://www.hamilton.ca/sites/default/files/2024-04/housing-secretariat-ADU-Multiplex-Housing-Incentive-Program.pdf" target="_blank">ADU And Multiplex Housing Incentive Program</a> which provides financial incentives like rebates of application fees and forgivable loans if affordability parameters are met. The program has some restrictions on site locations and a cap of $2,000 per building permit. 
			</p>
			<p>
			As of 2024, the City has made great strides in engaging its communities through Reimagining Neighbourhoods, which is a project for providing housing choice and more affordable housing options for its residents. The City has a dedicated <a href="https://www.hamilton.ca/build-invest-grow/construction-renovation/residential-building-renovation/additional-dwelling-units" target="_blank">webpage</a> and a dedicated team to review and issue ADU <a href="https://www.hamilton.ca/sites/default/files/2022-12/construction-building-permit-construct-demolish-application-form-dec2022.pdf" target="_blank">building permits</a>. The permit needs to be submitted in-person by the property owner or an agent on behalf of the owner, such as a contractor or designer, along with drawings and fees. The fee is charged at a flat rate for both attached and detached units, however, some ADUs may be subject to additional Parkland and Development charges. The City has published a <a href="https://www.hamilton.ca/sites/default/files/2024-02/buildingpermit-checklist-additional-dwelling-unity-ADU.pdf" target="_blank">checklist</a> and <a href="https://www.hamilton.ca/sites/default/files/2024-02/buildingpermit-drawing-additional-dwelling-unit-ADU.pdf" target="_blank">sample drawings</a> for reference.       
		</p>
	</div>



{:else if city === "Kingston"}

	<div class="text">
		<p>
			Amalgamated since 1998, Kingston has a population of 132,485 (as per the 2021 Census) and is considered a mid-sized city today. In 2022, Kingston adopted a single zoning by-law which regulates land uses as well as development across most of the city. In 2024, the City received federal funding of $27.6 million under the Housing Accelerator Fund (HAF) to build 900 housing units over the next three years.  Under this fund, the City promises to make zoning amendments to support infill housing. In addition, <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summaries-kingston-en.pdf?rev=538fa4fd-2d36-4791-9889-d28001dd7b60" target="_blank">Kingston's Action Plan</a> commits to nine local initiatives that will support building a range of different types of homes and densities to meet the diverse needs of the community, such as affordable tiny homes and additional residential units. The City has issued 470 building permits for additional residential units in the past five years. 
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
			A Detached ADU in {city} is called Additional Residential Unit (ARU): is an independent dwelling unit located on the same property as a single-detached or semi-detached house or townhouse dwelling. ARUs detached may also be known as carriage houses or tiny homes. 
		</div>

		<p>
			Kingston began allowing ARUs in some parts of the city as part of a pilot project and expanded that permission city-wide five years ago. The most recent <a href="https://www.cityofkingston.ca/media/huup3ag5/planning_zoningbylaw_2022-62_part1_sections1-19.pdf" target="_blank">By-Law Number 2022-62</a> allows for one attached and one detached ARU on a single property, permitting up to 3 units on most residential lots in the city, with the exception of rural properties. Each ARU requires at least one parking space that can be provided in a tandem arrangement. The gross floor area of the additional units can be equal to or less than that of the principal dwelling, consider restrictions on distance and height for the detached unit and must comply with Ontario Building Code. There is a cap of 8 bedrooms per lot, for example, 3 in the main building, 3 in the secondary unit, and 2 in the third unit.    
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
			An attached ADU in {city} is called Additional Residential Unit (ARU): is an independent dwelling unit located within the same building as a single-detached or semi-detached house or townhouse dwelling. ARUs attached may also be known as secondary suites or in-law suites. 
		</div>
		<p>
			All ARU developments require a building permit, where the rules for permits are different for a new build construction unit versus renovating an existing building. Applications can be submitted through the City's online portal DASH (Development and Services Hub), promising to issue a permit within 10 business days or request additional information as needed. The City has a clear <a href="https://www.cityofkingston.ca/building-and-renovating/building-permits/additional-residential-units-arus/" target="_blank">webpage</a> and has issued a <a href="https://www.cityofkingston.ca/media/adyfer21/planning_guide_secondresidentialunitpermits.pdf" target="_blank">second residential unit permit guide</a> to share the relevant information with the public in an accessible format.
			</p>
			<p>
			In addition, under HAF funding the city has launched a dedicated financial assistance initiative called <a href="https://www.cityofkingston.ca/building-and-renovating/building-permits/additional-residential-units-arus/aru-incentive-programs/" target="_blank">ARU Incentive Program</a>, under which, the property owners that create either ARU (attached or detached) can get funding options including forgivable loan incentives and grants. The program comes under some conditions including aspects of affordability for a five-year period, accessibility design features and provision for future projects.        
		</p>
	</div>

{:else if city === "Kitchener"}

	<div class="text">
		<p>
			Kitchener is considered a mid-sized city, with a population of 575,847, as per the 2021 Census. With just a little over 100 km distance to Toronto’s downtown, Kitchener has been highly affected by high housing costs there. Yet the City is known to have many best practices in support of Missing Middle housing. Kitchener received federal funding of over $42.4 million under the Housing Accelerator Fund (HAF) in 2023 to fast-track the construction of 1,216 new homes by early 2027. Kitchener also received provincial funding under <a href="https://news.ontario.ca/en/release/1003397/to-build-more-homes-ontario-launching-building-faster-fund-and-expanding-strong-mayor-powers" target="_blank">Building Faster Fund</a> in April 2024 for successfully meeting their annual targets. Announcements are yet to be made about City's initiatives under the new funding program.  
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
			A Detached ADU in {city} is called Additional Dwelling (Detached): means the use of a building containing one or two additional dwelling unit(s) on the same lot as a single detached dwelling, semi-detached dwelling, or a street townhouse dwelling (as the principal use). An additional dwelling detached is not an accessory building and is commonly called a called a backyard home, granny-flat, or carriage house. 
		</div>

		<p>
			Kitchener produced an ADU-enabling zoning change in 2021, producing 12% of new units in the form of ADUs that year. In 2024, through an award-winning community consultation process, zoning regulations were updated. The <a href="https://www.therecord.com/news/waterloo-region/kitchener-to-allow-up-to-four-units-on-a-single-lot-city-wide/article_3086c0eb-aaa6-52fe-b07a-8d7557939a0d.html" target="_blank">new regulations and official plan changes</a> permit up to four dwelling units on any residential lot, subject to design regulations. These units could be combinations of attached and detached, with a maximum of three within the primary dwelling and two within the detached suite. This as-of-right zoning change, moving from form to number of units, provides a significant opportunity to expand the number of units in existing neighbourhoods. One caveat on servicing that must be noted is that Kitchener property standards bylaw requires that waste containers located on with three- or four-unit residential properties are stored within a building, structure or enclosure to ensure they are screened from view and free of odours.
			</p>
			<p>
			An architect or designer is required to sign the drawings if one building has three or more units. These developments will also require building permits and associated application fees could also include zoning (occupancy) certificate, new driveway or driveway widening permit, development charges, and regional permits if property is on a regional road. There is no minimum parking requirement in parts of the city that are walkable and well-served by public transit (800m of LRT Station) and up to 0.6 parking space per dwelling unit is required for those outside of that distance.   
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
			An attached ADU in {city} is called Additional Dwelling Unit (Attached): means the use of a single detached dwelling, semi-detached dwelling unit, or street townhouse dwelling unit where separate self-contained dwelling unit(s) are located within the principal building. An ADU (attached) is commonly called a duplex, triplex or fourplex when located in the main building. 
		</div>
		<p>
			The City has a clear and easy-to-use <a href="https://www.kitchener.ca/en/building-and-renovating/additional-dwelling-units.aspx" target="_blank">webpage</a> for ADU development and offers guides such as <a href="https://www.kitchener.ca/en/resourcesGeneral/Documents/DSD_BUILD_Duplex_Guide.pdf" target="_blank">Adding a Second Unit</a> and <a href="https://www.kitchener.ca/en/resourcesGeneral/Documents/DSD_PLAN_Home-Owners-Additional-Dwelling-Units-Guide.pdf#:~:text=In%20Kitchener%2C%20they%20are%20all%20called%20additional%20dwelling,a%20single%20detached%2C%20semi-detached%20or%20street-fronting%20townhouse%20dwelling." target="_blank">Guide to Additional Dwelling Units</a> to explains common questions and deficiencies for building inspections when building a secondary suite and <a href="https://www.kitchener.ca/en/resourcesGeneral/Documents/DSD_BUILD_2021_Process_Guide_Duplex.pdf" target="_blank">Duplex Information Guide and Process</a> that includes the permit process flowchart.        
		</p>
	</div>


{:else if city === "Mississauga"}
	<div class="text">
		<p>
			Mississauga is one of the three municipalities in Peel Region, located west of City of Toronto, with a population of 717,961, as per the 2021 Census. It is the sixth largest city in the country by population, over half of which are foreign-born (immigrants). In February 2023, the City released <a href="https://www.mississauga.ca/projects-and-strategies/city-projects/growing-mississauga-an-action-plan-for-new-housing/" target="_blank">Growing Mississauga</a>, a four-year action plan to get more housing built and make it more affordable. In December 2023, the City was awarded $112.9 million under the Housing Accelerator Fund (HAF) to fast track the delivery of 3,000 homes in the next three years and over 35,200 homes over the next decade. The City has taken this opportunity to renew its commitment to affordable housing and working to update its official plan and zoning bylaw to allow up to 4 units per lot as-of-right City-wide.    
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
			A Detached ADU in {city} is called Detached ARU, or garden suite, coach house, tiny home, laneway suite: means a unit with its own kitchen, sanitary facilities, and bedrooms/sleeping area and is located within an ancillary structure on the same lot as a detached dwelling, semi-detached, linked dwelling, or street townhouse. 
		</div>

		<p>
			The City allows one detached ARU on lots which can be one or two storeys, depending on the size and type of your lot. No additional parking space is required. For both the units, water and wastewater connections can be shared with the primary home or separate connections can be requested, and guidelines are to be followed for new electrical and natural gas services. Zoning approvals, permit fees and charges depend on which type of unit(s) are being built. There are also Ontario Building Code requirements that have implications on design.     
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
			An attached ADU in {city} is called Additional Residential Unit (ARU): means a unit with its own kitchen, sanitary facilities, and bedrooms/sleeping area and is contained within a detached dwelling, semi-detached, linked dwelling, or street townhouse.   
		</div>
		<p>
			To simplify the permit approval process and help lower costs, the City offers <a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/find-property-information/" target="_blank">property information tool</a> and <a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/pre-approved-garden-suite-plans/" target="_blank">pre-approved plans</a> for studio and one-bedroom garden suites. The designs can be customized for exterior and interior finishes without additional approvals. The application process for ARUs is straightforward as the City's <a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/building-more-units-on-your-property/additional-residential-units/" target="_blank">webpage</a> walks applicants through the process. Applications can be submitted online, and a detailed list of permits and fees are explained to aid in the completion of the application.       
		</p>
	</div>


{:else if city === "Moncton"}


	<div class="text">
		<p>
			Moncton is the most populous city of New Brunswick with a population of 79,470 in the city and 119,785 in the Census metropolitan area (CMA), according to the 2021 census. Together with the City of Dieppe and the Town of Riverview, the City of Moncton forms part of a tri-community urban setting. Recent growth rates for the City of Moncton and the Greater Moncton Region (Census Metropolitan Area) are amongst the highest in the country, and Moncton is recognized as an economic driver for New Brunswick. According to estimates of future population growth produced by Urban Growth Strategy (2021), the total population of Moncton is forecasted to increase by 46.2% from 2021 to 2046. 
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
			A Detached ADU in {city} is called Garden Suite: is a detached accessory dwelling placed or erected in the rear yard of an existing single unit dwelling lot.   
		</div>

		<p>
			The City has <a href="https://www5.moncton.ca/docs/bylaws/By-Law_Z-222_Zoning_Arrete_zonage.pdf" target="_blank">restrictive zoning</a>, allowing either of attached of detached unit in one lot. Accessory dwelling units are permitted in R-1B, R2, R2U, RM and R3 zones, with the conditions that it will not exceed 35% of the dwelling’s gross floor area and be permitted in a single unit dwelling only. Garden suite is permitted in R-1B, R2, R2U and RM zones and has area, height and setback restrictions. Both ADU and garden suites require one parking space in addition to the parking required for the main use of the lot. 
			</p>
			<p>
			In 2023, the City received federal funding of $15.5 million under Housing Accelerator Fund (HAF) to fast-track more than 490 housing units over the next three years. Under the <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-moncton-en.pdf?rev=609119ee-f1a2-484f-936d-bbc0a4eadea1" target="_blank">HAF Action Plan</a>, the City promises to implement an Accessory Dwelling Unit (ADU) Grant Program to encourage homeowners to build ADUs, such as basement apartments and detached garden suites, to increase housing supply in existing neighbourhoods. In addition, the City will provide a new three-year program of $10,000 grants to assist homeowners in creating gentle density units. With implementation through 2026, the City also intends to review of planning regulations to support and simplify the requirements for building ADUs City-wide in residential zones. Under HAF, the City has committed to run grant programs (e.g. Accessory Dwelling Unit Grant Program), implement e-permitting systems, and streamline its zoning by-law, amongst other actions.
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
			An attached ADU in {city} is called Accessory Dwelling: is a dwelling unit which is secondary to the principal dwelling unit and, with the exception of a garden suite, contained in the same building. 
		</div>
		<p>
			The developments require a building permit, and documents that need to be submitted in-person. The City offers a <a href="https://www5.moncton.ca/docs/bi/13E_Creating_a_Secondary_Suite_small_apartment.pdf" target="_blank">checklist</a> for the creation of secondary suites (small apartment) within a single-family dwelling. As of now, the City does not have a dedicated webpage for the development of ADUs.  
			</p>
	</div>


{:else if city === "Ottawa"}
	<div class="text">
		<p>
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
			A Detached ADU in {city} is called Coach House: is defined as a separate dwelling unit that is subsidiary to and located on the same lot as an associated principal dwelling unit but is contained in its own building that may also contain uses accessory to the principal dwelling. 
		</div>

		<p>
			Since 2005 secondary dwelling units, also known as accessory apartments and in-law suites, are permitted in all areas of the city, apart from the former Village of Rockliffe Park, and coach houses have been legal since 2016. 
			</p>
			<p>
			Policies dictating the use of ADUs and coach houses are outlined in the city's <a href="https://documents.ottawa.ca/sites/documents/files/zoning_bylaw_part5_section133_en.pdf" target="_blank">Zoning By-law No. 2008-250, section 133</a>. An ADU and a coach house may be put on the same lot, but the total number of units cannot exceed three units. Only one ADU and coach house may be built on a lot. The maximum number of bedrooms between the primary residence, ADU, and coach house cannot exceed 12 bedrooms. Building permits are required for both, and there may also be situations that require a Committee of Adjustment Minor Variance application for coach houses. No additional parking space is required for either.  
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
			An attached ADU in {city} is called Additional dwelling unit (ADU) (apartment): is a separate dwelling unit located in the same building as an associated principal dwelling unit in a detached dwelling, linked-detached dwelling, semi-detached dwelling, duplex dwelling, or townhouse dwelling.  
		</div>
		<p>
			The City offers webpages detailing the requirements, process, costs and timelines associated with adding an <a href="https://ottawa.ca/en/planning-development-and-construction/building-and-renovating/do-i-need-building-permit/adding-apartment-additional-dwelling-units" target="_blank">ADU apartment</a> and an <a href="https://ottawa.ca/en/planning-development-and-construction/building-and-renovating/do-i-need-building-permit/adding-coach-house-additional-dwelling-units-accessory-structure#section-9525a446-1923-454a-8c3e-153f75afc887" target="_blank">ADU coach house</a>. The approximate timeline based on City Council approved enhanced service level is 15 business days for the first review. Applications can be submitted online or in-person. For more details, the City alsp offers a <a href="https://documents.ottawa.ca/sites/documents.ottawa.ca/files/how_to_coach_en.pdf" target="_blank">how-to-guide</a>.       
		</p>
	</div>


{:else if city === "Regina"}


	<div class="text">
		<p>
			Regina is the capital of Saskatchewan with a population of 226,404 (as per the 2021 census) making it the 16th largest city in Canada. According to Regina’s Housing Comprehensive Strategy, affordable rental housing in the city is lacking and has become an area of concern with the rising levels of immigration. In the 2019 follow up report to the Housing Comprehensive Strategy, 12,255 households are in core housing need, where 74% cannot afford to pay for housing.  
		</p>
		<p>
			In the city’s <a href="https://www.regina.ca/about-regina/official-community-plan/?gad_source=1&gclid=EAIaIQobChMIlsXB0KzSiAMVbjbUAR019h4eEAAYASAAEgItkvD_BwE" target="_blank">Official Plan</a>, secondary suites are considered a key aspect for future housing availability. The plan states that the city must allow for the construction of new housing types, allowing specific housing needs and attainable housing options. The plan advocates for a diversity of housing types and makes room for the consideration of alternative housing types, such as garden suites, live-work units, small-lot detached dwellings, and mixed-use buildings. In the plan, both secondary suites and garden suites are considered low density developments.  
		</p>
		<p>
		In 2024, Regina signed <a href="https://www.regina.ca/home-property/housing/housing-accelerator-fund/" target="_blank">an agreement with the Federal government for $35.2 million</a> under the Housing Accelerator Fund (HAF) with the goal of adding 1,100 units over the next three years. The 11 initiatives proposed by the City include advancing development of missing middle housing in central neighbourhoods, support the provision of greater housing diversity in established neighbourhoods. 
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
			A Detached ADU in {city} is called: Backyard Suites: is s a subordinate, self-contained dwelling unit within an accessory building or portion of an accessory building, in the side or rear yard, on a lot that contains a principal Dwelling, Unit.
		</div>

		<p>
			The City’s <a href="https://open.regina.ca/dataset/bylaw-no-2019-19-the-regina-zoning-bylaw-2019" target="_blank">Zoning Bylaw</a> Part 2C.2 is dedicated to polices concerning secondary suites detailing permitted locations of construction and allowed floor area. Secondary suites are allowed in most residential zones and are limited in size to the lesser of 40 per cent of the gross floor area of the primary dwelling or 80 square metres. The maximum number of secondary suites per principal dwelling unit is one. One parking stall is recommended on site for the secondary suite. Part 2C.3 of the Bylaw is dedicated to polices around backyard suites. There can only be one backyard suite per principal dwelling unit on one lot and cannot be built if the primary dwelling already contains of a secondary suite. Its size is limited to the floor area of the principal dwelling or 80 square metres. One parking stall is required onsite for the backyard suite.    
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
			An attached ADU in {city} is called Secondary Suite: is a subordinate, self-contained Dwelling, Unit within a building or portion of a building that contains a principal Dwelling, Unit, and where both dwelling units constitute a single real estate entity. 
		</div>
		<p>
			To apply for these developments, the City of Regina includes <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Application-Package-Secondary-Suite.pdf" target="_blank">Secondary Suite Permit Application Package</a> and <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Application-Package-Backyard-Suite.pdf" target="_blank">Backyard Suite Permit Application Package</a> on the website detailing the process for applicants. Applications can either be submitted online or in person at City Hall. Currently, the process time of a permit application is 10 days. The City also offers guides for backyard suites such as <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Advisory-Backyard-Suites.pdf" target="_blank">Planning & Development Services Advisory</a> and <a href="https://www.regina.ca/export/sites/Regina.ca/bylaws-permits-licences/building-demolition/.galleries/pdfs/Design-Requirements-Backyard-Suites.pdf" target="_blank">Design Requirements</a>.  
			</p>
			<p>
			Both Secondary and backyard suites are eligible for a 25% tax exemption for 5 years if built in the city center or in certain inner-city areas. Buildings must be used for long-term rental purposes to qualify.       
		</p>
	</div>


{:else if city === "Toronto"}
<div class="text">
		<p>
			Toronto, capital of Ontario, has a population of 2,794,356 people, as per the 2021 Census. While modestly sized, it is a major urban center of the country. To keep up with its growing population, Toronto needs to annually add approximately 30-40,000 new housing units. The City of Toronto has received federal funding totalling $471 million under the Housing Accelerator Fund (HAF), which will result in achieving an additional 11,780 homes on top of current projection over the next three years. Under the HAF, the City also promises to expand Missing Middle housing options through off-the-shelf designs, education campaigns, forgiving planning rules and easier permitting processes.  
		</p>
		<p>
			Around 2018-2019, the City of Toronto started taking accelerating actions to increase missing middle housing supply, in what is now the <a href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/expanding-housing-options/" target="_blank">Expanding Housing Options</a> program.  Some of these accelerated actions addressed smaller scale of missing middle housing i.e. Secondary Suites, allowed Laneway Suites and Garden Suites, and most recently in May 2023, allowing multiplexes.  
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
			A Detached ADU in {city} is called Laneway Suites and Garden Suites: are self-contained residential units located on the same lot as a detached house, semi-detached house, townhouse, or other low-rise house. They are typically located in the back yard and are generally smaller in size, and completely detached from the main house on the lot. However, the key difference is that a laneway suite is next to a public laneway.  
		</div>

		<p>
			The City’s zoning bylaws are permissive and regulated by the number of units regardless of form, permitting up to four units on all residential lots. These units can be a combination of secondary suites and garden or laneway suites. No vehicular parking is required for these additional dwellings, but they must include a minimum of two bicycle parking spaces per unit. In general, the detached unit design has limitations on setbacks, distance from primary unit, and total covered area. The summary of Garden Suites rules and regulations can be found <a href="https://www.toronto.ca/wp-content/uploads/2022/02/9320-cityplanning-garden-suites-summary-of-rules-Feb2022.pdf" target="_blank">here</a>.    
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
			An attached ADU in {city} is called Secondary Suite: is a self-contained living accommodation for an additional person or persons living together as a separate single housekeeping unit, in which both food preparation and sanitary facilities are provided for the exclusive use of the occupants of the suite, located in and subordinate to a dwelling unit.  
		</div>
		<p>
			As part of the Laneway and Garden Suites Initiative, the City launched the <a href="https://www.toronto.ca/community-people/community-partners/housing-partners/housing-initiatives/laneway-suites-program/" target="_blank">Development Charges (DC) Deferral Program for Ancillary Secondary Dwelling Units</a> program to encourage eligible property owners to develop these suites by deferring DC for 20 years. While the City does not have a dedicated team or a comprehensive webpage for secondary suites, it does offer an <a href="https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/express-building-permits/" target="_blank">express building permit system</a> for one to two unit conversion projects.       
		</p>
	</div>



{:else if city === "Waterloo"}

	<div class="text">
		<p>
			Waterloo is another mid-sized city with a population of 121,436 (as per the 2021 Census) in Ontario that is home to University of Waterloo and 120 km from downtown Toronto. Waterloo has received federal funding of $22 million under Housing Accelerator Fund (HAF) to build 650 new housing units in 3 years (over and above their historical housing growth). Waterloo will use this grant to support an action plan that will increase the supply of housing, accelerate the construction of new housing (including new affordable housing), create greater certainty in the development approvals and building permit process, and support long lasting systemic changes.  
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
			A Detached ADU in {city} is called Coach House: means an accessory self-contained ADU that is detached from the principal building and located on the same lot as the principal building.
		</div>

		<p>
			The City legalized both ARUs and Coach Houses in 2018, and according to <a href="https://www.waterloo.ca/en/government/resources/Documents/Zoning-bylaw/Zoning-By-law-2018-050.pdf" target="_blank">Zoning By-law 2018-050</a>, it permits up to 3 units on a single lot as-of-right. The ARUs nor Coach Houses can occupy more than 40% of the building floor area, with some additional regulations on setbacks and heights. There is a requirement of at least one parking space for each additional unit, which can be a tandem arrangement in the driveway. In 2022, 14% of Waterloo’s total new housing supply for the entire region was secondary suites, laneway houses or tiny homes added to existing properties by homeowners – five times the forecasted rate for this typology.  
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
			An attached ADU in {city} is called Additional Residential Unit (ARU): means a separate self-contained dwelling unit that is subordinate to and located within the same building as the principal dwelling unit or within a coach house. 
		</div>
		<p>
			The development requires a permit from Grand River Conservation Authority and then a building permit. While the information on ARU’s is not clearly represented on the City’s website, they have launched an <a href="https://www.engagewr.ca/waterloo-haf-initiative-6" target="_blank">initiative</a> to create a webpage that helps homeowners understand the process, steps, requirements and costs associated with the construction of ARUs, as well as the financial incentives to encourage homeowners to build market and affordable ARUs. This initiative is expected to be completed by February 2026. In the meanwhile, residents are encouraged to stay informed for updates by <a href="https://www.engagewr.ca/waterloohafactions" target="_blank">signing up</a>.       
		</p>
	</div>


{:else if city === "Victoria"}
	<div class="text">
		<p>
			Victoria has a population of 91,867, according to the 2021 census. The City has implemented policies to encourage the development of Accessory Dwelling Units (ADUs) as part of its strategy to address housing affordability and increase housing options. Victoria is also benefiting from the federal Housing Accelerator Fund (HAF). Announced in February 2024, this initiative includes an investment of nearly $18 million to support Victoria's housing plans, aiming to fast-track the creation of over 900 homes in the region within the next three years, with the potential for over 16,000 new homes over the next decade. The <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-victoria-en.pdf?rev=d0207001-bdce-4d64-a794-8c6ed81df6ad" target="_blank">HAF Action Plan</a> encompasses several key initiatives, including zoning bylaw changes to allow up to six units on typical residential lots without rezoning, waiving public hearings and rezonings for qualifying affordable housing projects, and modernizing the development application process to expedite permit approvals.  
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
			A Detached ADU in {city} is called Garden Suite: is a legal, detached, ground-oriented suite in the backyard of a single-family home. Garden suites are designed to be long-term rental housing. They cannot be strata-titled or used as short-term rentals (such as an Airbnb) 
		</div>

		<p>
			The city allows for detached ADUs, known as Garden Suites as legal, ground-oriented suites located in the backyard of single-family homes. These Garden Suites are designed for long-term rental housing and cannot be strata-titled or used as short-term rentals, such as Airbnb. In Victoria, detached ADUs are permitted by right in several zones, including R1-A, R1-B, R1-G, R-2, R-J, and R-K, while attached ADUs, such as secondary suites, are also allowed in single-family detached houses within these zones. The city permits only one Garden Suite per lot, and properties that already have secondary suites or existing duplexes are not eligible. Overall, the zoning is permissive for ADUs, allowing for the construction of house-plexes, corner townhouses, and heritage-conserving infill housing in traditional residential areas, which can lead to the development of up to six homes on an average residential lot. Notably, no additional parking is required for Garden Suites; however, the primary dwelling must have at least one parking stall, which cannot be in the front yard. The maximum height for Garden Suites is set at 3.5 meters, with specific setbacks required from lot lines and existing dwellings.   
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
			An attached ADU in {city} is called Secondary Suite: is a complete living unit with its own kitchen, sleeping area, and washroom facilities contained within another dwelling. The two dwelling units (the primary residence and the secondary suite) and any common spaces make up a single real estate entity that cannot be stratified or otherwise legally separated from the other. 
		</div>
		<p>
			Victoria requires building, electrical, and plumbing permits, with full payment for these permits required at the time of application submission. The City also a clear, easy-to-navigate <a href="https://www.victoria.ca/building-business/permits-development-construction/building-renovating/secondary-suites" target="_blank">webpage</a> with information about Missing Middle Housing and Garden Suites, along with online tools such as the interactive <a href="https://maps.victoria.ca/Html5Viewer/index.html?viewer=VicMap" target="_blank">Vicmap</a>, which helps residents identify the zone their property is located on. Additionally, the city provides <a href="https://www.victoria.ca/media/file/secondary-suites-guidelinespdf" target="_blank">design guidelinesd</a> and a "How to add a secondary suite" guide to assist homeowners in the application process.       
		</p>
	</div>


{:else if city === "Vancouver"}

	<div class="text">
		<p>
			Vancouver has a population of 662,248 (according to the 2021 census) and faces one of the most severe housing crises in Canada, driven by high demand, limited supply, and skyrocketing property prices. As part of the Housing Accelerator Fund (HAF), the city of Vancouver plans on adopting the <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/action-plan-summaries/haf-action-plan-summary-vancouver-en.pdf?rev=e62f4069-012c-4687-bdcd-83b4a115c2ef" target="_blank">HAF plan</a> which aims at increasing housing supply and affordability across the city. This plan includes streamlining missing middle housing by updating planning rules to allow for a variety of housing options, optimizing below-market rental development, and implementing significant transit-oriented housing along the new Broadway Subway line. Additionally, the plan focuses on unlocking non-market housing through financial supports and zoning changes, simplifying permit conditions to accelerate review timelines, and modernizing permitting services through digital transformation.
		</p>
		<p>
		<a href="https://vancouver.ca/files/cov/housing-van-10-year-3-year-plan-council-presentation.pdf" target="_blank">Housing Vancouver 10-year Housing Targets 2024-2033</a> has separate housing targets for housing typologies (laneway housing, coach houses, plexes etc.) and types (rentals and ownership). They aim to have many new homes with two-bedrooms or more, and increase low-density ground-oriented ownership options.
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
			A Detached ADU in {city} is called Laneway House: is a detached dwelling unit constructed in the rear yard of a site on which is situated a Single Detached House or Single Detached House with Secondary Suite, but does not include Infill Single Detached House.
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
			An attached ADU in {city} is called Secondary Suite: A smaller dwelling unit within a larger Single Detached House or Duplex, which must have separate external	access and may have shared internal access, but does not include a Lock-Off Unit.
		</div>
		<p>
			Vancouver requires various permits and fees for ADU development, including a laneway house permit, development permit, and building permit (fees vary based on project value).        
		</p>
	</div>


{:else if city === "Winnipeg"}

	<div class="text">
		<p>
			Winnipeg is the capital of Manitoba and is considered its largest city with a population of 749,607, as per the 2021 Census. The housing market in Winnipeg is considered the most affordable among the seven largest Canadian population centres, it consists of 77% detached homes, 8% attached, and 16% condominiums. Yet, more than 20% of the households live in non-affordable homes, spending 30% or more of their income on housing. The fastest growing demographics in the city are seniors. Immigrant and Indigenous populations, who require larger dwelling units, are also growing.  
		</p>
		<p>
			In 2023, the city secured $122.4 million under the Housing Accelerator Fund (HAF) to increase its housing supply by 14,101 housing units in total over the next three years including at least 931 affordable units. The <a href="https://www.winnipeg.ca/building-development/housing/housing-accelerator-fund" target="_blank">HAF action plan</a> initiatives include rapid zoning bylaw amendments that aim to streamline zoning rules to promote infill development, increase density, and expand missing middle housing city-wide. These proposed changes to the zoning bylaw would allow as-of-right permission for up to four units per residential lot and buildings up to four stories high within 800 meters of high-frequency transit. Another initiative aims to amend and update local area plans to remove barriers to housing development in existing neighbourhoods. Also, the city will use the HAF funds to digitize and facilitate faster development and approval processes. 
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
			A Detached ADU in {city} is called Detached Secondary Suite: is a self-contained living space located near a single-family residence. The suite may be an independent structure or located over, or attached to, a detached garage.
		</div>

		<p>
			The construction of secondary suites, whether detached or attached, is governed by several key regulations, including the Manitoba Building Code, Winnipeg Building By-law, Winnipeg Electrical By-law, and Manitoba Plumbing Code.
			</p>
			<p>
			The city allows for only one secondary suite, either attached or detached, per lot. Detached secondary suites are allowed on single family properties in zones R1 and R2, while attached suites are permitted in a broader range of zones including A, RR5, RR2, R1, R2, RMF, RMU, C1, and C2. The number of units per lot is dictated by the specific zoning regulations. For detached secondary suites, sewer and water services can either be extended from the primary dwelling or installed directly from the street, pending approval from the City of Winnipeg's Water and Waste Department. The building codes apply equally to single-family homes and detached secondary suites, necessitating adherence to all relevant regulations. The City sets minimum and maximum unit size for detached and attached ADUs. Additionally, properties with secondary suites must have at least two off-street parking spaces.   
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
			An attached ADU in {city} is called Secondary Suite: is a self-contained living space added to, or created within, a single-family residence. The suite is an independent dwelling unit and has a separate entrance.  
		</div>
		<p>
			Development and building permits are mandatory for developing a detached secondary suite. Separate electrical and plumbing permits are also required.
			</p>
			<p>
			The City provides clear, easily accessible online resources, including a comprehensive <a href="https://www.winnipeg.ca/building-development/building-renovating/building-trade-permits/secondary-suites" target="_blank">webpage</a> detailing permit requirements, building codes, and application procedures for secondary suites, for both attached and detached suites. The page also includes links to relevant details and downloadable guides. The application process for secondary suites is straightforward, with options to submit applications online, via email, or in person, ensuring convenience for homeowners. They have direct phone line for permits and dedicated application form for detached ADUs, saving time and effort for both the applicant and the City.       
		</p>
	</div>

{/if}

	



<style>

	.definition {
		background-color: #ffffffb6;
		border: solid 1px var(--brandDarkBlue);
		padding: 10px;
		padding-left: 15px;
		margin-top: 15px;
		font-style: italic;
	}

</style>
