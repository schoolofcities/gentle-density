<script>
    
    import { onMount } from 'svelte';
    import mapboxgl from "mapbox-gl";
    import RangeSlider from "svelte-range-slider-pips";

    import torontoBoundary from '../assets/toronto-boundary.geo.json';
    import laneways from '../assets/laneways.geo.json';
    import suitesLaneway from '../assets/laneway-garden-suites.geo.json';
    import suitesSecondary from '../assets/secondary-suites.geo.json';


    let values = [2020,2022];

    let load = 0;


    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nob29sb2ZjaXRpZXMiLCJhIjoiY2w2Z2xhOXprMTYzczNlcHNjMnNvdGlmNCJ9.lOgVHrajc1L-LlU0as2i2A';
    
    let pageHeight;
    let pageWidth;
    let mapHeight = 760;
    $: if (pageHeight < 800) {
        mapHeight = pageHeight - 200;
    } else {
        mapHeight = 760
    }

    const layerOpacity = 0.69;
    let message = " ";    
    let map = null;
    const maxBounds = [
		[-79.6772, 43.4400], // SW coords
		[-79.04763, 44.03074] // NE coords
	];
    onMount(() => {
        

        map = new mapboxgl.Map({
			container: "map", 
			style: 'mapbox://styles/schoolofcities/clbxv21c4000414n2hcio6l5o',
			center: [-79.37, 43.715],
			zoom: 10,
			maxZoom: 16,
			minZoom: 8.5,
			bearing: -17.1,
			projection: 'globe',
			scrollZoom: true,
            maxBounds: maxBounds,
			attributionControl: true
		});
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');
        map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
        map.scrollZoom.disable();

        map.on('load', function() {

            map.addSource('torontoBoundary', {
                'type': 'geojson',
                'data': torontoBoundary
            });
            map.addLayer({
                'id': 'torontoBoundary',
                'type': 'line',
                'source': 'torontoBoundary',
                'layout': {},
                'paint': {
                    'line-color': '#fff',
                    'line-width': 1,
                    'line-opacity': 1
                }
            }, 'admin-0-boundary-disputed');

            map.addSource('laneways', {
                'type': 'geojson',
                'data': laneways
            });
            map.addLayer({
                'id': 'laneways',
                'type': 'line',
                'source': 'laneways',
                'layout': {},
                'paint': {
                    'line-color': '#fff',
                    'line-width': 1,
                    'line-opacity': 0
                }
            }, 'admin-0-boundary-disputed');

            map.addSource('suitesSecondary', {
                'type': 'geojson',
                'data': suitesSecondary
            }); 
            map.addLayer({
                'id': 'suitesSecondaryWhite',
                'type': 'circle',
                'source': 'suitesSecondary',
                'layout': {},
                'paint': {
                    'circle-radius': [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        5,
                        16,
                        14
                        ],
                    'circle-color': '#fff',
                }
            });
            map.addLayer({
                'id': 'suitesSecondary',
                'type': 'circle',
                'source': 'suitesSecondary',
                'layout': {},
                'paint': {
                    'circle-radius': [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        4,
                        16,
                        10
                        ],
                    'circle-color': '#AB1368',
                }
            });  
            
            map.addSource('suitesLaneway', {
                'type': 'geojson',
                'data': suitesLaneway
            }); 
            map.addLayer({
                'id': 'suitesLanewayWhite',
                'type': 'circle',
                'source': 'suitesLaneway',
                'layout': {},
                'paint': {
                    'circle-radius': [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        5,
                        16,
                        14
                        ],
                    'circle-color': '#fff'
                }
            });
            map.addLayer({
                'id': 'suitesLaneway',
                'type': 'circle',
                'source': 'suitesLaneway',
                'layout': {},
                'paint': {
                    'circle-radius': [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        4,
                        16,
                        10
                        ],
                    'circle-color': '#F1C500',
                }
            }); 

            // function filterSecondary(years) {

            //     map.setFilter('suitesSecondary',[
            //         "all",
            //         ['>=', ['get', 'year'], years[0].toString()],
            //         ['<=', ['get', 'year'], years[1].toString()]
            //     ]);
            //     map.setFilter('suitesSecondaryWhite',[
            //         "all",
            //         ['>=', ['get', 'year'], years[0].toString()],
            //         ['<=', ['get', 'year'], years[1].toString()]
            //     ]);

            // };

            // filterSecondary(values);

            
            if (pageHeight > 700 && pageWidth > 800) {
                map.zoomTo(10.75)
            }

            load = 1
            filterPoints(values)



        });
        
        // map.on('mousemove', 'VotingSubDivisionsFill', (e) => {
        //     if (candidate === "margin") {
        //         message = "Ward: " + e.features[0].properties.ward + " --- Poll: " + e.features[0].properties.vsd + " --- Margin: " + Math.round(100 * e.features[0].properties[candidates[candidate].column]) + "%"
        //     } else if (candidate === "race") {
        //         let name = "1) Tory 2) Peñalosa"
        //         if (e.features[0].properties.contest === "Tory-Brown") {
        //             name = "1) Tory 2) Brown"
        //         }
        //         if (e.features[0].properties.contest === "Penalosa-Brown") {
        //             name = "1) Peñalosa 2) Brown"
        //         }
        //         if (e.features[0].properties.contest === "Penalosa-Tory") {
        //             name = "1) Peñalosa 2) Tory"
        //         }
        //         if (e.features[0].properties.contest === "Brown-Penalosa") {
        //             name = "1) Brown 2) Peñalosa"
        //         }
        //         message = "Ward: " + e.features[0].properties.ward + " --- Poll: " + e.features[0].properties.vsd + " --- Top-two finishers: " + name
        //     } else {
        //         message = "Ward: " + e.features[0].properties.ward + " --- Poll: " + e.features[0].properties.vsd + " --- Total Votes: " + e.features[0].properties.total + " --- Votes for " + candidates[candidate].name + ": " + e.features[0].properties[candidates[candidate].column] +  " --- % for " + candidates[candidate].name + ": " + Math.round(100 * e.features[0].properties[candidates[candidate].column] / e.features[0].properties.total) + "%"  
        //     }
                  
        // });
        // map.on('mouseleave', 'VotingSubDivisionsFill', () => {
        //     message = " "
        // });

        

    });

    function filterPoints(years) {

        if (load > 0) {
            map.setFilter('suitesSecondary',[
            "all",
            ['>=', ['get', 'year'], years[0].toString()],
            ['<=', ['get', 'year'], years[1].toString()]
        ]);
            map.setFilter('suitesSecondaryWhite',[
                "all",
                ['>=', ['get', 'year'], years[0].toString()],
                ['<=', ['get', 'year'], years[1].toString()]
            ]);
            map.setFilter('suitesLaneway',[
            "all",
            ['>=', ['get', 'year'], years[0].toString()],
            ['<=', ['get', 'year'], years[1].toString()]
        ]);
            map.setFilter('suitesLanewayWhite',[
                "all",
                ['>=', ['get', 'year'], years[0].toString()],
                ['<=', ['get', 'year'], years[1].toString()]
            ]);
        }
    };
    
    $: filterPoints(values)
    
    let onRearYard = true
    function filterRearYard() {
        if (onRearYard) {
            // circle-opacity
            map.setPaintProperty('suitesLaneway', 'circle-opacity', 0);
            map.setPaintProperty('suitesLanewayWhite', 'circle-opacity', 0);
            onRearYard = false
        } else {
            map.setPaintProperty('suitesLaneway', 'circle-opacity', 1);
            map.setPaintProperty('suitesLanewayWhite', 'circle-opacity', 1);
            onRearYard = true
        }
    }

    let onSecondary = true
    function filterSecondary() {
        if (onSecondary) {
            // circle-opacity
            map.setPaintProperty('suitesSecondary', 'circle-opacity', 0);
            map.setPaintProperty('suitesSecondaryWhite', 'circle-opacity', 0);
            onSecondary = false
        } else {
            map.setPaintProperty('suitesSecondary', 'circle-opacity', 1);
            map.setPaintProperty('suitesSecondaryWhite', 'circle-opacity', 1);
            onSecondary = true
        }
    }

    let onLaneway = false
    function filterLaneway() {
        if (onLaneway) {
            // circle-opacity
            map.setPaintProperty('laneways', 'line-opacity', 0);
            onLaneway = false
        } else {
            map.setPaintProperty('laneways', 'line-opacity', 0.87);
            onLaneway = true
        }
    }

    

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>

<div id="top-bar">
    <p>Location of Gentle Density cleared building permits in Toronto:</p>
</div>

<div id="map" style="height: {mapHeight}px"></div>

<div id="options-wrapper">
    
    <div id="options">

        <p>Closed (i.e. Cleared) Building Permits</p>
        
        <div id="pointLayers">
            
            <div id="rearYardButton" on:click={filterRearYard} class="{onRearYard ? 'layerOn' : 'layerOff'}" >
                <svg width=20 height=10>
                    <circle
                        style="fill:#F1C500;stroke-width:2;stroke:#fff"
                        cx="15"
                        cy="5"
                        r="4" />
                </svg>
                Laneway & Garden Suites
            </div>

            <div id="secondaryButton"  on:click={filterSecondary} class="{onSecondary ? 'layerOn' : 'layerOff'}">
                <svg width=20 height=10>
                    <circle
                        style="fill:#ab1269;stroke-width:2;stroke:#fff"
                        cx="15"
                        cy="5"
                        r="4" />
                </svg>
                Secondary Suites
            </div>

        </div>

        <RangeSlider bind:values range pips all='label' step={1} min={2013} max={2022} hoverable={false}/>

        <p>Open (i.e. Active) Building Permits</p>

        


        <p>Reference Layers</p>

        <div id="pointLayers">
            
            <div id="lanewayButton" on:click={filterLaneway} class="{onLaneway ? 'layerOn' : 'layerOff'}" >
                <svg width=20 height=10>
                    <line
                        style="stroke-width:1.5;stroke:#fff"
                        x1=5
                        x2=20
                        y1=5
                        y2=5/>
                </svg>
                Laneways
            </div>

        </div>

    </div>

</div>



<style>
    #map {
		width: 100%;
        border-top: 1px solid var(--brandLightBlue);
        border-bottom: 1px solid var(--brandLightBlue);
	}

    #top-bar {
        width: calc(100% - 36px);
        background-color: var(--brandDarkBlue);
        background-size: 13px 13px;
        background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
        color: white;
        font-size: 17px;
        font-family: 'Ubuntu Mono', monospace;
        padding: 18px;
        padding-top: 28px;
        padding-bottom: 8px;
        font-weight: bold;
    }
    #top-bar p {
        max-width: 720px;
        width: 100%;
        margin: 0 auto;
    }

    #options-wrapper {
        width: 100%;
        height: 250px;
        background-color: var(--brandDarkBlue);
        background-size: 13px 13px;
        background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
    }
    

    #options {
        margin: 0 auto;
        padding-top: 7px;
        width: 100%;
        max-width: 650px;
    }
    #options p {
        color: white;
        font-size: 17px;
        font-family: 'Ubuntu Mono', monospace;
        max-width: 620px;
        width: 100%;
        margin: 0 auto;
        padding: 18px;
        padding-top: 7px;
        padding-bottom: 7px;
    }

    #pointLayers {
        color: white;
        padding: 10px;
        padding-left: 16px;
        padding-bottom: 1px;
        font-size: 17px;
        font-family: 'Ubuntu Mono', monospace;
        font-weight: 400;
        overflow: hidden;
    }

    #rearYardButton {
        float: left;
        margin-right: 20px;
        width: 290px;
        border: solid 1px #fff;
        padding: 4px;
        margin-bottom: 10px;
        background-color: #2a5e89;
        cursor: pointer;
    }

    #secondaryButton {
        overflow: hidden;
        width: 290px;
        border: solid 1px #fff;
        padding: 4px;
        margin-bottom: 10px;
        background-color: #2a5e89;
        cursor: pointer;
    }

    #lanewayButton {
        overflow: hidden;
        width: 290px;
        border: solid 1px #fff;
        padding: 4px;
        margin-bottom: 10px;
        background-color: #2a5e89;
        cursor: pointer;
    }

    #rearYardButton:hover {
        opacity: 1;
        background-color: var(--brandDarkBlue);
    }

    #secondaryButton:hover {
        opacity: 1;
        background-color: var(--brandDarkBlue);
    }

    #lanewayButton:hover {
        opacity: 1;
        background-color: var(--brandDarkBlue);
    }


    .layerOn {
        opacity: 1;
    }
    .layerOff {
        opacity: 0.42;
    }


    
    
    
</style>
