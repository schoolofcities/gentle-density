<script>
    
    import { onMount } from 'svelte';
    import mapboxgl from "mapbox-gl";
    import RangeSlider from "svelte-range-slider-pips";

    import torontoBoundary from '../assets/toronto-boundary.geo.json';
    import laneways from '../assets/laneways.geo.json';
    import transitLines from '../assets/transitLines.geo.json';
    import transitStops from '../assets/transitStops.geo.json';
    import suitesLaneway from '../assets/laneway-garden-suites.geo.json';
    import suitesSecondary from '../assets/secondary-suites.geo.json';
    import suitesLanewayActive from '../assets/laneway-suites-active-subset.geo.json';
    import suitesSecondaryActive from '../assets/secondary-suites-active-subset.geo.json';
    import zoneYellowRes from '../assets/zone-yellow.geo.json';
    import zoneOtherRes from '../assets/zone-otherres.geo.json';
    import income2020 from '../assets/2020.geo.json';

    import xSecondary from '../assets/x-secondary.svg';
    import xRearYard from '../assets/x-rearyard.svg';

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

            map.addSource('transitLines', {
                'type': 'geojson',
                'data': transitLines
            });
            map.addLayer({
                'id': 'transitLines',
                'type': 'line',
                'source': 'transitLines',
                'layout': {},
                'paint': {
                    'line-color': '#1d4667',
                    'line-width': 2,
                    'line-opacity': 1
                }
            }, 'admin-0-boundary-disputed');

            map.addSource('transitStops', {
                'type': 'geojson',
                'data': transitStops
            });
            map.addLayer({
                'id': 'transitStops',
                'type': 'circle',
                'source': 'transitStops',
                'layout': {},
                'paint': {
                    'circle-color': '#1d4667'
                }
            }, 'admin-0-boundary-disputed');
            map.addLayer({
                'id': 'transitStopsWhite',
                'type': 'circle',
                'source': 'transitStops',
                'layout': {},
                'paint': {
                    'circle-color': '#fff',
                    'circle-radius': 2,
                    'circle-opacity': 0.42
                }
            }, 'admin-0-boundary-disputed');

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

            map.addSource('zoneYellowRes', {
                'type': 'geojson',
                'data': zoneYellowRes
            });
            map.addLayer({
                'id': 'zoneYellowRes',
                'type': 'fill',
                'source': 'zoneYellowRes',
                'layout': {},
                'paint': {
                    'fill-color': '#1a2d3b',
                    'fill-opacity': 0
                }
            }, 'land-structure-line');

            map.addSource('zoneOtherRes', {
                'type': 'geojson',
                'data': zoneOtherRes
            });
            map.addLayer({
                'id': 'zoneOtherRes',
                'type': 'fill',
                'source': 'zoneOtherRes',
                'layout': {},
                'paint': {
                    'fill-color': '#2e4e66',
                    'fill-opacity': 0
                }
            }, 'land-structure-line');

            map.addSource('income2020', {
                'type': 'geojson',
                'data': income2020
            });
            map.addLayer({
                'id': 'income2020',
                'type': 'fill',
                'source': 'income2020',
                'layout': {},
                'paint': {
                    'fill-color': ["step",["get","i"],"#506b80",75000,"#2e4e66",100000,"#1a2d3b"],
                    'fill-opacity': 0
                }
            }, 'land-structure-line');

            map.addSource('suitesSecondaryActive', {
                'type': 'geojson',
                'data': suitesSecondaryActive
            }); 
            map.addLayer({
                'id': 'suitesSecondaryActive',
                'type': 'symbol',
                'source': 'suitesSecondaryActive',
                'layout': {
                    "icon-image": 'x-secondary',
                    "icon-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        0.45,
                        16,
                        1.3
                        ],
                    "icon-allow-overlap": true   
                },
                'paint': {
                    'icon-color': '#fff',
                    'icon-opacity': 0

                }
            });
    
            map.addSource('suitesLanewayActive', {
                'type': 'geojson',
                'data': suitesLanewayActive
            }); 
            map.addLayer({
                'id': 'suitesLanewayActive',
                'type': 'symbol',
                'source': 'suitesLanewayActive',
                'layout': {
                    "icon-image": 'x-rearyard',
                    "icon-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        0.45,
                        16,
                        1.3
                        ],
                    "icon-allow-overlap": true
                },
                'paint': {
                    'icon-color': '#fff',
                    'icon-opacity': 0
                }
            });


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
    
    let onRearYard = true;
    function filterRearYard() {
        if (onRearYard) {
            map.setPaintProperty('suitesLaneway', 'circle-opacity', 0);
            map.setPaintProperty('suitesLanewayWhite', 'circle-opacity', 0);
            onRearYard = false
        } else {
            map.setPaintProperty('suitesLaneway', 'circle-opacity', 1);
            map.setPaintProperty('suitesLanewayWhite', 'circle-opacity', 1);
            onRearYard = true
        }
    }

    let onSecondary = true;
    function filterSecondary() {
        if (onSecondary) {
            map.setPaintProperty('suitesSecondary', 'circle-opacity', 0);
            map.setPaintProperty('suitesSecondaryWhite', 'circle-opacity', 0);
            onSecondary = false
        } else {
            map.setPaintProperty('suitesSecondary', 'circle-opacity', 1);
            map.setPaintProperty('suitesSecondaryWhite', 'circle-opacity', 1);
            onSecondary = true
        }
    }

    let onActiveRearYard = false;
    function filterActiveRearYard() {
        if (onActiveRearYard) {
            map.setPaintProperty('suitesLanewayActive', 'icon-opacity', 0);
            onActiveRearYard = false;
        } else {
            map.setPaintProperty('suitesLanewayActive', 'icon-opacity', 1);
            onActiveRearYard = true;
        }
    }

    let onActiveSecondary = false;
    function filterActiveSecondary() {
        if (onActiveSecondary) {
            map.setPaintProperty('suitesSecondaryActive', 'icon-opacity', 0);
            onActiveSecondary = false;
        } else {
            map.setPaintProperty('suitesSecondaryActive', 'icon-opacity', 1);
            onActiveSecondary = true;
        }
    }


    let onResYellow = false;
    function filterResYellow() {
        map.setPaintProperty('income2020', 'fill-opacity', 0);
        onIncome = false;
        if (onResYellow) {
            map.setPaintProperty('zoneYellowRes', 'fill-opacity', 0);
            onResYellow = false
        } else {
            map.setPaintProperty('zoneYellowRes', 'fill-opacity', 1);
            onResYellow = true
        }
    }

    let onResOther = false;
    function filterResOther() {
        map.setPaintProperty('income2020', 'fill-opacity', 0);
        onIncome = false;
        if (onResOther) {
            map.setPaintProperty('zoneOtherRes', 'fill-opacity', 0);
            onResOther = false
        } else {
            map.setPaintProperty('zoneOtherRes', 'fill-opacity', 1);
            onResOther = true
        }
    }

    let onLaneway = false;
    function filterLaneway() {
        if (onLaneway) {
            map.setPaintProperty('laneways', 'line-opacity', 0);
            onLaneway = false;
        } else {
            map.setPaintProperty('laneways', 'line-opacity', 1);
            onLaneway = true;
        }
    }

    let onIncome = false;
    function filterIncome() {
        map.setPaintProperty('zoneOtherRes', 'fill-opacity', 0);
        onResOther = false;
        map.setPaintProperty('zoneYellowRes', 'fill-opacity', 0);
        onResYellow = false;
        if (onIncome) {
            map.setPaintProperty('income2020', 'fill-opacity', 0);
            onIncome = false;
        } else {
            map.setPaintProperty('income2020', 'fill-opacity', 0.97);
            onIncome = true;
        }
    }


    

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>

<div id="top-bar">
    <p>Location of rear-yeard and secondary suite building permits in Toronto:</p>
</div>

<div id="map" style="height: {mapHeight}px"></div>

<div id="options-wrapper">
    
    <div id="options">

        <p>Closed (i.e. Cleared) Building Permits:</p>
        
        <div id="pointLayers">
            
            <div id="rearYardButton" on:click={filterRearYard} class="{onRearYard ? 'layerOn' : 'layerOff'}" >
                <svg width=20 height=10>
                    <circle
                        style="fill:#F1C500;stroke-width:2;stroke:#fff"
                        cx="15"
                        cy="5"
                        r="4" />
                </svg>
                Rear-Yard Suites
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

        <p>Open (i.e. Active) Building Permits:</p>

        <div id="pointLayers">
            
            <div id="rearYardButton" on:click={filterActiveRearYard} class="{onActiveRearYard ? 'layerOn' : 'layerOff'}" >
                <img height=11px width=11px src = {xRearYard} alt="xRearYard" style="padding-left: 4px"/>
                Rear-Yard Suites
            </div>

            <div id="secondaryButton"  on:click={filterActiveSecondary} class="{onActiveSecondary ? 'layerOn' : 'layerOff'}">
                <img height=11px width=11px src = {xSecondary} alt="xSecondary" style="padding-left: 4px"/>
                Secondary Suites
            </div>

        </div>


        <p>Residential Zoning:</p>

        <div id="pointLayers">
            
            <div id="resYellowButton" on:click={filterResYellow} class="{onResYellow ? 'layerOn' : 'layerOff'}" >
                <svg width=15 height=10>
                    <rect
                        style="fill:#1a2d3b"
                        x=5
                        y=0
                        width=10
                        height=10/>
                </svg>
                Single-Detached Only
            </div>

            <div id="resOtherButton" on:click={filterResOther} class="{onResOther ? 'layerOn' : 'layerOff'}" >
                <svg width=15 height=10>
                    <rect
                        style="fill:#2e4e66"
                        x=5
                        y=0
                        width=10
                        height=10/>
                </svg>
                Other Low-Density
            </div>


        </div>

        <p>Reference Layers:</p>

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

            <div id="incomeButton" on:click={filterIncome} class="{onIncome ? 'layerOn' : 'layerOff'}" >
                <svg width=0 height=10></svg>
                Income: Low
                <svg width=10 height=10>
                    <rect
                    style="fill:#506b80;stroke-width:1;stroke:#8EB6DC"
                    x=0
                    y=0
                    width=10
                    height=10/>
                </svg>,
                Medium
                <svg width=10 height=10>
                    <rect
                    style="fill:#2e4e66;stroke-width:1;stroke:#8EB6DC"
                    x=0
                    y=0
                    width=10
                    height=10/>
                </svg>,
                High
                <svg width=10 height=10>
                    <rect
                    style="fill:#1a2d3b;stroke-width:1;stroke:#8EB6DC"
                    x=0
                    y=0
                    width=10
                    height=10/>
                </svg>
            </div> 
            <!-- "#506b80",75000,"#2e4e66",100000,"#1a2d3b" -->
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
        padding-bottom: 15px;
        /* height: 340px; */
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
        text-decoration: underline;
        text-decoration-color: #8EB6DC; 
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
        float: left;
        margin-right: 20px;
        width: 290px;
        border: solid 1px #fff;
        padding: 4px;
        margin-bottom: 10px;
        background-color: #2a5e89;
        cursor: pointer;
    }
    
    #incomeButton {
        overflow: hidden;
        width: 290px;
        border: solid 1px #fff;
        padding: 4px;
        margin-bottom: 10px;
        background-color: #2a5e89;
        cursor: pointer;
    }

    #resYellowButton {
        float: left;
        margin-right: 20px;
        width: 290px;
        border: solid 1px #fff;
        padding: 4px;
        margin-bottom: 10px;
        background-color: #2a5e89;
        cursor: pointer;
    }

    #resOtherButton {
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

    #resYellowButton:hover {
        opacity: 1;
        background-color: var(--brandDarkBlue);
    }

    #resOtherButton:hover {
        opacity: 1;
        background-color: var(--brandDarkBlue);
    }

    #lanewayButton:hover {
        opacity: 1;
        background-color: var(--brandDarkBlue);
    }
    
    #incomeButton:hover {
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
