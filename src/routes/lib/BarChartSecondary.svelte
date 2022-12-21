<script>

    import {rollup} from 'd3-array';
    import {scaleBand} from 'd3-scale';

    import suitesSecondary from '../assets/secondary-suites.geo.json';
    
    let divWidth;
    
    $: svgWidth = divWidth - 22;

    let yearCountsSecondary =  Object.fromEntries(rollup(suitesSecondary.features, v => v.length, d => d.properties.year));

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
    
</script>



<div id="barChart" bind:offsetWidth={divWidth}>

    <svg height=370 width={svgWidth} id="svgChart">

        <text 
            x="50" 
            y="10"
            id="title"
        >Closed "Second Suite (New)"</text>
        <text 
            x="50" 
            y="30"
            id="title"
        >Building Permits by Year</text>


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
                y="{60 + barY(yearCountsSecondary[year])}" width="{xScale.bandwidth()}" height="{barHeight(yearCountsSecondary[year])}" 
                fill="url(#pattern-lines)"
            />

            <line
                x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y1="330"
                y2="333"
                style="stroke:white;stroke-width:1"
            />

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="{57 + barY(yearCountsSecondary[year])}"
                id="labelBar"
                text-anchor="middle" 
            >{yearCountsSecondary[year]}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="345"
                id="yearLabelWeb"
                text-anchor="middle"
            >{year}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="345"
                id="yearLabelMobile"
                text-anchor="middle"
                transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},354)"
            >{year}</text>
            
        {/each}

        <line x1="50" y1="330" x2="{svgWidth}" y2="330" style="stroke:white;stroke-width:1" />
        <text x=40 y=333 id="label">0</text>

        <line x1="50" y1="262.5" x2="{svgWidth}" y2="262.5" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=33 y=266 id="label">50</text>

        <line x1="50" y1="195" x2="{svgWidth}" y2="195" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=25 y=200 id="label">100</text>

        <line x1="50" y1="127.5" x2="{svgWidth}" y2="127.5" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=25 y=132 id="label">150</text>

        <line x1="50" y1="50" x2="{svgWidth}" y2="50" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=25 y=55 id="label">200</text>

        

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
