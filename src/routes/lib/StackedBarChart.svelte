<script>

    import {rollup} from 'd3-array';
    import {scaleBand} from 'd3-scale';

    import suitesLaneway from '../assets/laneway-garden-suites.geo.json';

    import suitesSecondary from '../assets/secondary-suites.geo.json';
    
    let divWidth;
    
    $: svgWidth = divWidth - 22;

    let yearCountsSecondary =  Object.fromEntries(rollup(suitesSecondary.features, v => v.length, d => d.properties.year));

    let yearCountsLaneway =  Object.fromEntries(rollup(suitesLaneway.features, v => v.length, d => d.properties.year));

    let years = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];

    function barHeight(amount) {
        return amount * 270 / 200
    }

    function barY(amount) {
        return 270 - barHeight(amount)
    }

    $: xScale = scaleBand()
        .domain(years)
        .range([0, svgWidth - 50])
        .paddingInner(0.37)
        .paddingOuter(0.37);
        // .align(0.6);

    
</script>



<div id="barChart" bind:offsetWidth={divWidth}>

    <svg height=320 width={svgWidth} id="svgChart">

        <pattern id="pattern-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <!-- Now let's draw the circle -->
            <!-- We're going to define the `fill` in the CSS for flexible use -->
            
            <rect x="0" y="0" height="10" width="10" style="fill:#AB1368;" />
            <line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
        </pattern>

        

        {#each years as year}

            {console.log(barHeight(yearCountsSecondary[year]))}
        
            <rect 
                id="bar" 
                x="{50 + xScale(year)}" 
                y="{10 + barY(yearCountsSecondary[year])}" width="{xScale.bandwidth()}" height="{barHeight(yearCountsSecondary[year])}" 
                fill="url(#pattern-lines)"
            />

            <line
                x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y1="280"
                y2="283"
                style="stroke:white;stroke-width:1"
            />

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="{7 + barY(yearCountsSecondary[year])}"
                id="labelBar"
                text-anchor="middle" 
            >{yearCountsSecondary[year]}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="295"
                id="yearLabelWeb"
                text-anchor="middle"
            >{year}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="295"
                id="yearLabelMobile"
                text-anchor="middle"
                transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},304)"
            >{year}</text>
            
        {/each}

        <line x1="50" y1="280" x2="{svgWidth}" y2="280" style="stroke:white;stroke-width:1" />
        <text x=40 y=283 id="label">0</text>

        <line x1="50" y1="212.5" x2="{svgWidth}" y2="212.5" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=33 y=216 id="label">50</text>

        <line x1="50" y1="145" x2="{svgWidth}" y2="145" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=25 y=150 id="label">100</text>

        <line x1="50" y1="77.5" x2="{svgWidth}" y2="77.5" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=25 y=82 id="label">150</text>

        <line x1="50" y1="10" x2="{svgWidth}" y2="10" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=25 y=15 id="label">200</text>

        

    </svg>

</div>



<style>

    #barChart {
        padding: 10px;
        margin: 0 auto;
        width: calc(100% - 30px);
        max-width: 650px;
        height: 320px;
        /* border: solid 1px var(--brandLightBlue); */
    }

    #bar {
        stroke: white;
        stroke-width:1;
    }

    #label {
        font-size: 15px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
    }

    #labelBar {
        font-size: 15px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
        
    }

    #yearLabelWeb {
        font-size: 15px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
    }
    #yearLabelMobile {
        font-size: 15px;
        font-family: 'Ubuntu Mono', monospace;
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

    #svgChart {
        /* border: solid 1px white; */
    }

</style>
