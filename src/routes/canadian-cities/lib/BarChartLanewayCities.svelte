<script>
    import { rollup } from 'd3-array';
    import { scaleBand } from 'd3-scale';

    import torontoLaneway from '../../assets/toronto/laneway-garden-suites.geo.json';
    import edmontonLaneway from '../../assets/edmonton/gs-edmonton.geo.json';

    let divWidth;
    
    // Adjusting the SVG width to fit two charts side by side
    $: svgWidth = divWidth - 22;

    // Assuming both datasets use the same years
    let years = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022", "2023", "2024"];

    // Calculate total number of permits for Toronto and Edmonton
    let yearCountsToronto = Object.fromEntries(rollup(torontoLaneway.features, v => v.length, d => d.properties.year));
    let yearCountsEdmonton = Object.fromEntries(rollup(edmontonLaneway.features, v => v.length, d => d.properties.year));

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
    console.log(sumValues(yearCountsToronto));
    console.log(sumValues(yearCountsEdmonton));

    function barHeight(amount) {
        return amount * 270 / 200
    }

    function barY(amount) {
        return 270 * 0.25 - barHeight(amount)
    }

    $: xScale = scaleBand()
        .domain(years)
        .range([0, svgWidth - 50])
        .paddingInner(0.37)
        .paddingOuter(0.37);

</script>

<div class="chart-grid">
    <!-- Toronto Chart -->
    <div id="barChart" class="chart-container" bind:offsetWidth={divWidth}>
        <svg height="280" width="{svgWidth}" id="svgChartToronto">
            <text 
                x="50" 
                y="29"
                id="title"
            >Closed "New Laneway / Rear Yard</text>
            <text 
                x="50" 
                y="49"
                id="title"
            >Suite" Building Permits by Year</text>

            <pattern id="pattern-lines-green" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">            
                <rect x="0" y="0" height="10" width="10" style="fill:#F1C500;" />
                <line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
            </pattern>

            {#each years as year}
                <rect 
                    id="bar" 
                    x="{50 + xScale(year)}" 
                    y="{150 + barY(yearCountsToronto[year])}" 
                    width="{xScale.bandwidth()}" 
                    height="{barHeight(yearCountsToronto[year])}" 
                    fill="url(#pattern-lines-green)"
                />

                <line
                    x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                    x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y1="217.5"
                    y2="220.5"
                    style="stroke:white;stroke-width:1"
                />

                <text 
                    x="{svgWidth / 2}" 
                    y="270"
                    id="labelCity"
                >Toronto</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="{147 + barY(yearCountsToronto[year])}"
                    id="labelBar"
                    text-anchor="middle" 
                >{yearCountsToronto[year]}</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="232.5"
                    id="yearLabelWeb"
                    text-anchor="middle"
                >{year}</text>

                <text 
                    x="{7 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="215"
                    id="yearLabelMobile"
                    text-anchor="middle"
                    transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},181)"
                >{year}</text>
            {/each}

            <line x1="50" y1="218" x2="{svgWidth}" y2="218" style="stroke:white;stroke-width:1;opacity:1"/>
            <text x=40 y=222 id="label">0</text>

            <line x1="50" y1="150" x2="{svgWidth}" y2="150" style="stroke:white;stroke-width:1;opacity:0.3"/>
            <text x=33 y=154 id="label">50</text>

            <line x1="50" y1="82" x2="{svgWidth}" y2="82" style="stroke:white;stroke-width:1;opacity:0.3"/>
            <text x=26 y=86 id="label">100</text>
        </svg>
    </div>

    <!-- Edmonton Chart -->
    <div id="barChart" class="chart-container" bind:offsetWidth={divWidth}>
        <svg height="280" width="{svgWidth}" id="svgChartEdmonton">
            <pattern id="pattern-lines-green" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">            
                <rect x="0" y="0" height="10" width="10" style="fill:#F1C500;" />
                <line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
            </pattern>

            {#each years as year}
                <rect 
                    id="bar" 
                    x="{50 + xScale(year)}" 
                    y="{150 + barY(yearCountsEdmonton[year])}" 
                    width="{xScale.bandwidth()}" 
                    height="{barHeight(yearCountsEdmonton[year])}" 
                    fill="url(#pattern-lines-green)"
                />

                <line
                    x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                    x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y1="217.5"
                    y2="220.5"
                    style="stroke:white;stroke-width:1"
                />

                <text 
                    x="{svgWidth / 2}" 
                    y="270"
                    id="labelCity"
                >Edmonton</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="{147 + barY(yearCountsEdmonton[year])}"
                    id="labelBar"
                    text-anchor="middle" 
                >{yearCountsEdmonton[year]}</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="232.5"
                    id="yearLabelWeb"
                    text-anchor="middle"
                >{year}</text>

                <text 
                    x="{7 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="215"
                    id="yearLabelMobile"
                    text-anchor="middle"
                    transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},181)"
                >{year}</text>
            {/each}

            <line x1="50" y1="218" x2="{svgWidth}" y2="218" style="stroke:white;stroke-width:1;opacity:1" />
            <text x=40 y=222 id="label">0</text>

            <line x1="50" y1="150" x2="{svgWidth}" y2="150" style="stroke:white;stroke-width:1;opacity:0.3" />
            <text x=33 y=154 id="label">50</text>

            <line x1="50" y1="82" x2="{svgWidth}" y2="82" style="stroke:white;stroke-width:1;opacity:0.3" />
            <text x=26 y=86 id="label">100</text>

        </svg>
    </div>

    <!-- Victoria Chart -->
    <div id="barChart" class="chart-container" bind:offsetWidth={divWidth}>
        <svg height="280" width="{svgWidth}" id="svgChartToronto">
        <pattern id="pattern-lines-green" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">            
                <rect x="0" y="0" height="10" width="10" style="fill:#F1C500;" />
                <line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
            </pattern>

            {#each years as year}
                <rect 
                    id="bar" 
                    x="{50 + xScale(year)}" 
                    y="{150 + barY(yearCountsToronto[year])}" 
                    width="{xScale.bandwidth()}" 
                    height="{barHeight(yearCountsToronto[year])}" 
                    fill="url(#pattern-lines-green)"
                />

                <line
                    x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                    x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y1="217.5"
                    y2="220.5"
                    style="stroke:white;stroke-width:1"
                />

                <text 
                    x="{svgWidth / 2}" 
                    y="270"
                    id="labelCity"
                >Victoria</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="{147 + barY(yearCountsToronto[year])}"
                    id="labelBar"
                    text-anchor="middle" 
                >{yearCountsToronto[year]}</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="232.5"
                    id="yearLabelWeb"
                    text-anchor="middle"
                >{year}</text>

                <text 
                    x="{7 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="215"
                    id="yearLabelMobile"
                    text-anchor="middle"
                    transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},181)"
                >{year}</text>
            {/each}

            <line x1="50" y1="218" x2="{svgWidth}" y2="218" style="stroke:white;stroke-width:1;opacity:1" />
            <text x=40 y=222 id="label">0</text>

            <line x1="50" y1="150" x2="{svgWidth}" y2="150" style="stroke:white;stroke-width:1;opacity:0.3" />
            <text x=33 y=154 id="label">50</text>

            <line x1="50" y1="82" x2="{svgWidth}" y2="82" style="stroke:white;stroke-width:1;opacity:0.3" />
            <text x=26 y=86 id="label">100</text>
        </svg>
    </div>

    <!-- Calgary Chart -->
    <div id="barChart" class="chart-container" bind:offsetWidth={divWidth}>
        <svg height="280" width="{svgWidth}" id="svgChartEdmonton">
            <pattern id="pattern-lines-green" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">            
                <rect x="0" y="0" height="10" width="10" style="fill:#F1C500;" />
                <line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
            </pattern>

            {#each years as year}
                <rect 
                    id="bar" 
                    x="{50 + xScale(year)}" 
                    y="{150 + barY(yearCountsEdmonton[year])}" 
                    width="{xScale.bandwidth()}" 
                    height="{barHeight(yearCountsEdmonton[year])}" 
                    fill="url(#pattern-lines-green)"
                />

                <line
                    x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                    x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y1="217.5"
                    y2="220.5"
                    style="stroke:white;stroke-width:1"
                />

                <text 
                    x="{svgWidth / 2}" 
                    y="270"
                    id="labelCity"
                >Calgary</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="{147 + barY(yearCountsEdmonton[year])}"
                    id="labelBar"
                    text-anchor="middle" 
                >{yearCountsEdmonton[year]}</text>

                <text 
                    x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="232.5"
                    id="yearLabelWeb"
                    text-anchor="middle"
                >{year}</text>

                <text 
                    x="{7 + xScale(year) + xScale.bandwidth() / 2}" 
                    y="215"
                    id="yearLabelMobile"
                    text-anchor="middle"
                    transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},181)"
                >{year}</text>
            {/each}

            <line x1="50" y1="218" x2="{svgWidth}" y2="218" style="stroke:white;stroke-width:1;opacity:1" />
            <text x=40 y=222 id="label">0</text>

            <line x1="50" y1="150" x2="{svgWidth}" y2="150" style="stroke:white;stroke-width:1;opacity:0.3" />
            <text x=33 y=154 id="label">50</text>

            <line x1="50" y1="82" x2="{svgWidth}" y2="82" style="stroke:white;stroke-width:1;opacity:0.3" />
            <text x=26 y=86 id="label">100</text>

        </svg>
    </div>
</div>

<style>
     #barChart {
        padding: 10px;
        padding-left: 0px;
        margin: 0 auto;
        width: calc(100% - 30px);
        max-width: 650px;
        height: 280px;
        /* border: solid 1px var(--brandLightBlue); */
    }

    #bar {
        stroke: white;
        stroke-width:1;
        opacity: 1;
    }

    #label {
        font-size: 12px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 900;
        fill: rgba(255, 255, 255, 0.803);
    }

    #labelBar {
        font-size: 12px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 900;
        fill: rgba(255, 255, 255, 0.803);
    }

    #labelCity {
        font-size: 15px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 900;
        fill: rgba(255, 255, 255, 0.803);
    }

    #yearLabelWeb {
        font-size: 12px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 900;
        fill: rgba(255, 255, 255, 0.803);
    }
    #yearLabelMobile {
        font-size: 12px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 900;
        fill: rgba(255, 255, 255, 0.803);
        opacity: 0;
    }
    @media(max-width: 900px) {
        #yearLabelWeb {
            opacity: 0
        }
        #yearLabelMobile {
            opacity: 1;
        }
    }

    .chart-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px; 
        margin-bottom: 10px;
    }
    .chart-container {
        max-width: calc(50% - 10px);
        height: 260px; 
    }
    @media(max-width: 680px) {
        .chart-container {
            width: 100%; /* make sure that the  chart takes full width when stacked vertically */
        }
        .chart-grid{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 10px; 
            margin-bottom: 10px;
        }
        #yearLabelWeb {
            opacity: 1
        }
        #yearLabelMobile {
            opacity: 0;
        }
    }
    @media(max-width: 425px) {
        #yearLabelWeb {
            opacity: 0
        }
        #yearLabelMobile {
            opacity: 1;
        }
    }

    #title {
        font-size: 17px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 700;
        fill: rgba(255, 255, 255, 0.99);
    }

    #svgChart {
        /* border: solid 1px white; */
    }


</style>
