<script>

    import suitesLaneway from '../assets/laneway-garden-suites.geo.json';

    import suitesSecondary from '../assets/secondary-suites.geo.json';

    let divWidth;
    
    $: svgWidth = divWidth - 22

    $: console.log(divWidth);


</script>



<div id="barChart" bind:offsetWidth={divWidth}>

    <svg height=300 width={svgWidth} id="svgChart">

        <line x1="50" y1="0" x2="50" y2="280" style="stroke:white;stroke-width:1" />
        <line x1="50" y1="280" x2="750" y2="280" style="stroke:white;stroke-width:1" />

    </svg>

</div>



<style>

    #barChart {
        padding: 10px;
        margin: 0 auto;
        width: calc(100% - 30px);
        max-width: 800px;
        height: 320px;
        /* border: solid 1px var(--brandLightBlue); */
    }

    /* #svgChart {
        background-color: rgba(255, 255, 255);
    } */

</style>
