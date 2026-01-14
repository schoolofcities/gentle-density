<script>

    import {rollup} from 'd3-array';
    import {scaleBand} from 'd3-scale';

    import suitesLaneway from '../assets/Active-rear-2018-2025.geo.json';
    
    let divWidth;
    
    $: svgWidth = divWidth - 22;

    let yearCountsLaneway =  Object.fromEntries(rollup(suitesLaneway.features, v => v.length, d => d.properties.year));

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

    let years = ["2018", "2019","2020","2021","2022", "2023", "2024", "2025"];

    let yLabels = [0, 100, 200, 300, 400, 500]

    function barHeight(amount) {
        return amount * 150 / 200
    }

    function barY(amount) {
        return 500 * 0.75 - barHeight(amount)
    }

    $: xScale = scaleBand()
        .domain(years)
        .range([0, svgWidth - 50])
        .paddingInner(0.37)
        .paddingOuter(0.37);
        // .align(0.6);

</script>



<div id="barChart" bind:offsetWidth={divWidth}>

    <svg height=800 width={svgWidth} id="svgChart">

        <text 
            x="20" 
            y="13"
            id="title"
        >Active "New Laneway / Rear Yard Suite"</text>
        <text 
            x="20" 
            y="37"
            id="title"
        >building permits by issue year</text>


        <pattern id="pattern-lines-yellow" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">            
            <rect x="0" y="0" height="10" width="10" style="fill:#F1C500;" />
            <line x1="0" y1="0" x2="10" y2="10" style="stroke:white;stroke-width:1" />
        </pattern>

        {#each years as year}

            <rect 
                id="bar" 
                x="{50 + xScale(year)}" 
                y="{80 + barY(yearCountsLaneway[year])}" width="{xScale.bandwidth()}" height="{barHeight(yearCountsLaneway[year])}" 
                fill="url(#pattern-lines-yellow)"
            />

            <line
                x1="{50 + xScale(year) + xScale.bandwidth() / 2}"
                x2="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y1="455"
                y2="460"
                style="stroke:white;stroke-width:1"
            />

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="{77 + barY(yearCountsLaneway[year])}"
                id="labelBar"
                text-anchor="middle" 
            >{yearCountsLaneway[year]}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="475"
                id="yearLabelWeb"
                text-anchor="middle"
            >{year}</text>

            <text 
                x="{50 + xScale(year) + xScale.bandwidth() / 2}" 
                y="475"
                id="yearLabelMobile"
                text-anchor="middle"
            >{year}</text>
            
        {/each}


        {#each yLabels as yLabel}

            <line x1="70" y1="{455 - yLabel * 0.75}" x2="{svgWidth}" y2="{455 - yLabel * 0.75}" style="stroke:white;stroke-width:1;opacity:0.2" />
            <text x=60 y={455 - yLabel * 0.75} id="label">{yLabel}</text>

        {/each}
        
		<line x1="70" y1="455" x2="{svgWidth}" y2="455" style="stroke:white;stroke-width:1;opacity:0.89" />

		<!-- <line x1="50" y1="216" x2="{svgWidth}" y2="216" style="stroke:white;stroke-width:1;opacity:0.3" />
		<text x=25 y=200 id="label">100</text>

		<line x1="50" y1="148" x2="{svgWidth}" y2="148" style="stroke:white;stroke-width:1;opacity:0.3" />
		<text x=25 y=150 id="label">150</text>

		<line x1="50" y1="80" x2="{svgWidth}" y2="80" style="stroke:white;stroke-width:1;opacity:0.3" />
		<text x=25 y=100 id="label">200</text>

		<line x1="350" y1="12" x2="{svgWidth}" y2="12" style="stroke:white;stroke-width:1;opacity:0.3" /> -->

        

    </svg>

</div>



<style>

     #barChart {
        padding: 10px;
        padding-left: 0px;
        margin: 0 auto;
        width: calc(100% - 30px);
        max-width: 650px;
        height: 480px;
        /* border: solid 1px var(--brandLightBlue); */
    }

    #bar {
        stroke: white;
        stroke-width:1;
        opacity: 1;
    }

    #label {
        font-size: 15px;
        font-family: UbuntuMonoRegular, monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
        text-anchor: end;
    }

    #labelBar {
        font-size: 15px;
        font-family: UbuntuMonoRegular, monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
        
    }

    #yearLabelWeb {
        font-size: 15px;
        font-family: UbuntuMonoRegular, monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
    }

    #yearLabelMobile {
        font-size: 13px;
        font-family: UbuntuMonoRegular, monospace;
        font-weight: 400;
        fill: rgba(255, 255, 255, 0.803);
        opacity: 0;
    }

    #title {
        font-size: 21px;
        font-family: UbuntuMonoBold, monospace;
        font-weight: normal;
        fill: rgba(255, 255, 255, 0.99);
    }

    @media(max-width: 500px) {
        #yearLabelWeb {
            opacity: 0
        }
        #yearLabelMobile {
            opacity: 1;
        }
        #title {
            font-size: 17px;
        }
    }

    

    #svgChart {
        /* border: solid 1px white; */
    }


</style>
