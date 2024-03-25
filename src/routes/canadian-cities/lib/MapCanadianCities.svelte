<script>
	
	import { onMount } from 'svelte';
	import RangeSlider from "svelte-range-slider-pips";
    import maplibregl from 'maplibre-gl';
    import * as pmtiles from 'pmtiles';
	import BaseLayer from "../../../assets/toronto/toronto.json";

    // Toronto
    import torontoBoundary from '../../../assets/toronto/toronto-boundary.geo.json';
    import torontoTransitLines from '../../../assets/toronto/transitLines-toronto.geo.json';
    import torontoTransitStops from '../../../assets/toronto/transitStops-toronto.geo.json';
	// import torontoSuitesLaneway from '../assets/toronto/laneway-garden-suites.geo.json'; 
	// import torontoSuitesSecondary from '../assets/toronto/secondary-suites.geo.json'; 
    import torontoSuitesLaneway from '../../../assets/toronto/gs-toronto.geo.json';
    import torontoSuitesSecondary from '../../../assets/toronto/ss-toronto.geo.json';
    
    // Victoria
    import victoriaBoundary from '../../../assets/victoria/victoria-boundary.geo.json';
    import victoriaTransitLines from '../../../assets/victoria/transitLines-victoria.geo.json';
    import victoriaTransitStops from '../../../assets/victoria/transitStops-victoria.geo.json';
    // import victoriaSuitesLaneway from '../assets/victoria/gs-victoria.geo.json';
    // import victoriaSuitesSecondary from '../assets/victoria/ss-victoria.geo.json';
    
    // Edmonton
    import edmontonBoundary from '../../../assets/edmonton/edmonton-boundary.geo.json';
    import edmontonTransitLines from '../../../assets/edmonton/transitLines-edmonton.geo.json';
    import edmontonTransitStops from '../../../assets/edmonton/transitStops-edmonton.geo.json';
    import edmontonSuitesLaneway from '../../../assets/edmonton/gs-edmonton.geo.json';
    import edmonotnSuitesSecondary from '../../../assets/edmonton/ss-edmonton.geo.json';

    // Calgary
    import calgaryBoundary from '../../../assets/calgary/calgary-boundary.geo.json';
    import calgaryTransitLines from '../../../assets/calgary/transitLines-calgary.geo.json';
    import calgaryTransitStops from '../../../assets/calgary/transitStops-calgary.geo.json';
    // import calgarySuitesLaneway from '../assets/calgary/gs-calgary.geo.json';
    // import calgarySuitesSecondary from '../assets/calgary/ss-calgary.geo.json';


	let values = [2022,2023];

	let load = 0;
	
	let map;
    var isloaded = 0;
    export let city;

	let protocol = new pmtiles.Protocol();
	maplibregl.addProtocol('pmtiles', protocol.tile);

	
	let pageHeight;
	let pageWidth;
	let mapHeight = 760;
	$: if (pageHeight < 800) {
		mapHeight = pageHeight - 200;
	} else {
		mapHeight = 760
	}


    const cityData = {
        'Toronto': {
            PMTILES_URL: "/gentle-density/toronto.pmtiles",
            cityBoundary: torontoBoundary,
            cityTransitLines: torontoTransitLines,
            cityTransitStops: torontoTransitStops,
            citySuitesLaneway: torontoSuitesLaneway,
            citySuitesSecondary: torontoSuitesSecondary,
            maxBounds: [
                [-80.0, 37.0], // SW coords
		        [-78.6, 45.5] // NE coords
            ],
            center: [-79.36,43.71],
			zoom: 10,
			maxZoom: 15,
			minZoom: 8,
			bearing: -17.1,
        },
        'Victoria': {
            PMTILES_URL: "/gentle-density/victoria.pmtiles",
            cityBoundary: victoriaBoundary,
            cityTransitLines: victoriaTransitLines,
            cityTransitStops: victoriaTransitStops,
            // citySuitesLaneway: victoriaSuitesLaneway,
            // citySuitesSecondary: victoriaSuitesSecondary,
            maxBounds: [
                [-123.43, 48.39], // SW coords
                [-123.27, 48.47] // NE coords
            ],
            center: [-123.35,48.428],
			zoom: 13,
			maxZoom: 20,
			minZoom: 8,
            bearing: 0
        },
        'Edmonton': {
            PMTILES_URL: "/gentle-density/edmonton.pmtiles",
            cityBoundary: edmontonBoundary,
            cityTransitLines: edmontonTransitLines,
            cityTransitStops: edmontonTransitStops,
            citySuitesLaneway: edmontonSuitesLaneway,
            citySuitesSecondary: edmonotnSuitesSecondary,
            maxBounds: [
                [-114.0, 53.15], // SW coords
                [-113.0, 53.75] // NE coords
            ],
            center: [-113.49,53.54],
			zoom: 10,
			maxZoom: 15,
			minZoom: 8,
            bearing: 0
        },
        'Calgary': {
            PMTILES_URL: "/gentle-density/calgary.pmtiles",
            cityBoundary: calgaryBoundary,
            cityTransitLines: calgaryTransitLines,
            cityTransitStops: calgaryTransitStops,
            // citySuitesLaneway: calgarySuitesLaneway,
            // citySuitesSecondary: calgarySuitesSecondary,
            maxBounds: [
                [-114.55, 50.83], // SW coords
                [-113.6, 51.22] // NE coords
            ],
            center: [-114.07,51.03],
			zoom: 10,
			maxZoom: 15,
			minZoom: 8,
            bearing: 0
        }
    };

    function loadmap(cityname) {
		map = new maplibregl.Map({
			container: "map", 
			style: {
					"version": 8,
					"name": "Empty",
					"glyphs": "https://schoolofcities.github.io/fonts/fonts/{fontstack}/{range}.pbf",
					"sources": {},
					"layers": [
						{
							"id": "background",
							"type": "background",
							"paint": {
								"background-color": "rgba(0,0,0,0)"
							}
						}
					]
				},
            center: cityData[cityname].center,
            zoom: cityData[cityname].zoom,
            maxZoom:cityData[cityname].maxZoom,
            minZoom: cityData[cityname].minZoom,
            bearing: cityData[cityname].bearing,
            maxBounds: cityData[cityname].maxBounds,//[0], cityData[cityname].maxBounds[1]],
			boxZoom: false,
			touchPitch: false,
			attributionControl: false
		});

		map.dragRotate.disable();
		map.touchZoomRotate.disableRotation();
		map.addControl(new maplibregl.NavigationControl(), 'top-left');
		map.addControl(new maplibregl.ScaleControl(), 'bottom-left');
		map.scrollZoom.disable();

		let protoLayers = BaseLayer;

		map.on('load', function() {


			map.addSource('protomaps', {
				type: "vector",
				url: "pmtiles://" + cityData[cityname].PMTILES_URL,
			});

			protoLayers.forEach(e => {
				map.addLayer(e);
			});

			map.addSource('cityBoundary', {
				'type': 'geojson',
				'data': cityData[cityname].cityBoundary
			});
			map.addLayer({
				'id': 'cityBoundary',
				'type': 'line',
				'source': 'cityBoundary',
				'layout': {},
				'paint': {
					'line-color': '#fff',
					'line-width': 1,
					'line-opacity': 1
				}
			});

			map.addSource('transitLines', {
				'type': 'geojson',
				'data': cityData[cityname].cityTransitLines
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
			});

			map.addSource('transitStops', {
				'type': 'geojson',
				'data': cityData[cityname].cityTransitStops
			});
			map.addLayer({
				'id': 'transitStops',
				'type': 'circle',
				'source': 'transitStops',
				'layout': {},
				'paint': {
					'circle-color': '#1d4667'
				}
			});

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
			});


			map.addSource('suitesSecondary', {
				'type': 'geojson',
				'data': cityData[cityname].citySuitesSecondary
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
				'data': cityData[cityname].citySuitesLaneway
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
						12
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
						8
						],
					'circle-color': '#F1C500',
				}
			}); 
			
			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10.75);	
			}

			load = 1
			filterPoints(values)

		});
	};

    onMount(() => {
        isloaded = 1;
	});

    $: if (isloaded > 0) {loadmap(city)};

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

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>

<div id="top-bar">
	<p>Location of rear-yard and secondary suite building permits in Toronto:</p>
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

		<RangeSlider bind:values range pips all='label' step={1} min={2013} max={2023} hoverable={false}/>
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
		/* font-size: 17px; */
		font-family: UbuntuMonoRegular, monospace;
		padding: 18px;
		padding-top: 28px;
		padding-bottom: 8px;
		font-weight: bold;
	}
	#top-bar p {
		max-width: 720px;
		width: 100%;
		/* font-size: 14px; */
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
		font-family: UbuntuMonoRegular, monospace;
		max-width: 620px;
		width: inheret;
		margin: 0 auto;
		padding-right: 0px;
		padding-left: 18px;
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
		/* font-size: 14.3px; */
		font-family: UbuntuMonoRegular, monospace;
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

	#rearYardButton:hover {
		opacity: 1;
		background-color: var(--brandDarkBlue);
	}

	#secondaryButton:hover {
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
