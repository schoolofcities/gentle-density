<script>
	
	import { onMount } from 'svelte';
	import RangeSlider from "svelte-range-slider-pips";
    import maplibregl from 'maplibre-gl';
    import * as pmtiles from 'pmtiles';
	import BaseLayer from "../assets/toronto/toronto.json";

	import victoriaBoundary from '../assets/victoria/victoria-boundary.geo.json';
    import laneways from '../assets/toronto/laneways.geo.json';
	import transitLines from '../assets/victoria/transitLines_victoria.geo.json';
	import transitStops from '../assets/victoria/transitStops_victoria.geo.json';
	import suitesLaneway from '../assets/toronto/laneway-garden-suites.geo.json';
	import suitesSecondary from '../assets/toronto/secondary-suites.geo.json';
	import suitesLanewayActive from '../assets/toronto/laneway-suites-active-subset-012024update.geo.json';
	import suitesSecondaryActive from '../assets/toronto/secondary-suites-active-subset-012024update.geo.json';
	import zoneYellowRes from '../assets/toronto/zone-yellow.geo.json';
	import zoneOtherRes from '../assets/toronto/zone-otherres.geo.json';
	import income2020 from '../assets/toronto/2020.geo.json';

	import xSecondary from '../assets/toronto/x-secondary.svg';
	import xRearYard from '../assets/toronto/x-rearyard.svg';

	let values = [2022,2023];

	let load = 0;
	
	let map;
	let PMTILES_URL = "/gentle-density/victoria.pmtiles";

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


	const maxBounds = [
		[-123.43,48.39], // SW coords
		[-123.27, 48.47] // NE coords
	];

	onMount(() => {

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
            center: [-123.35,48.428],
			zoom: 13,
			maxZoom: 20,
			minZoom: 8,
			maxBounds: maxBounds,
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
				url: "pmtiles://" + PMTILES_URL,
			});

			protoLayers.forEach(e => {
				map.addLayer(e);
			});

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
			});

			map.addSource('victoriaBoundary', {
				'type': 'geojson',
				'data': victoriaBoundary
			});
			map.addLayer({
				'id': 'victoriaBoundary',
				'type': 'line',
				'source': 'victoriaBoundary',
				'layout': {},
				'paint': {
					'line-color': '#fff',
					'line-width': 1,
					'line-opacity': 1
				}
			});

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
			}, 'roads_tunnels_medium_casing');

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
			},'roads_tunnels_medium_casing');

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
			},'zoneYellowRes');

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
			});

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

			map.addSource('suitesSecondaryActive', {
				'type': 'geojson',
				'data': suitesSecondaryActive
			});
			let xSecondaryImage = new Image();
			xSecondaryImage.src = xSecondary;
			xSecondaryImage.onload = function() {
				map.addImage('x-secondary', xSecondaryImage);
 
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
			};
	
			map.addSource('suitesLanewayActive', {
				'type': 'geojson',
				'data': suitesLanewayActive
			}); 
			let xRearYardImage = new Image();
        	xRearYardImage.src = xRearYard;
        	xRearYardImage.onload = function() {
				map.addImage('x-rearyard', xRearYardImage);
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
			};


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
				map.zoomTo(10.75);
				
			}


			

			load = 1
			filterPoints(values)

		});

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


		<p>Historical Residential Zoning (prior to May 10, 2023)</p>

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
