<script>

    import {rollup} from 'd3-array';
    import {scaleBand} from 'd3-scale';

    import suitesLaneway from '../assets/toronto/laneway-garden-suites.geo.json';
    
    let divWidth;
    
    $: svgWidth = divWidth - 22;

    let yearCountsLaneway =  Object.fromEntries(rollup(suitesLaneway.features, v => v.length, d => d.properties.year));

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
    console.log(yearCountsLaneway);

    let years = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022", "2023"];

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
        // .align(0.6);

</script>



<div id="barChart" bind:offsetWidth={divWidth}>

    <svg height=260 width={svgWidth} id="svgChart">

        <text 
            x="50" 
            y="13"
            id="title"
        >Closed "New Laneway / Rear Yard</text>
        <text 
            x="50" 
            y="33"
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
                y="{120 + barY(yearCountsLaneway[year])}" width="{xScale.bandwidth()}" height="{barHeight(yearCountsLaneway[year])}" 
                fill="url(#pattern-lines-green)"
            />

            <line
                x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y1="187.5"
                y2="190.5"
                style="stroke:white;stroke-width:1"
            />

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="{117 + barY(yearCountsLaneway[year])}"
                id="labelBar"
                text-anchor="middle" 
            >{yearCountsLaneway[year]}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="202.5"
                id="yearLabelWeb"
                text-anchor="middle"
            >{year}</text>

            <text 
                x="{45 + xScale(year) + xScale.bandwidth() / 2}" 
                y="212.5"
                id="yearLabelMobile"
                text-anchor="middle"
                transform="rotate(-45,{57 + xScale(year) + xScale.bandwidth() / 2},151)"
            >{year}</text>
            
        {/each}


        <line x1="50" y1="188" x2="{svgWidth}" y2="188" style="stroke:white;stroke-width:1;opacity:1" />
        <text x=40 y=192 id="label">0</text>

        <line x1="50" y1="120" x2="{svgWidth}" y2="120" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=33 y=124 id="label">50</text>

        <line x1="50" y1="52" x2="{svgWidth}" y2="52" style="stroke:white;stroke-width:1;opacity:0.3" />
        <text x=26 y=56 id="label">100</text>

        

    </svg>

</div>



<style>

     #barChart {
        padding: 10px;
        padding-left: 0px;
        margin: 0 auto;
        width: calc(100% - 30px);
        max-width: 650px;
        height: 210px;
        /* border: solid 1px var(--brandLightBlue); */
    }

    #bar {
        stroke: white;
        stroke-width:1;
        opacity: 1;
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
