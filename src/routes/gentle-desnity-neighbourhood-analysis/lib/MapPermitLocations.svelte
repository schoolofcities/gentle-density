<script>
	
	import { onMount } from 'svelte';
	import RangeSlider from "svelte-range-slider-pips";
    import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
    import * as pmtiles from 'pmtiles';
	import BaseLayer from "../../../assets/toronto/toronto.json";

	import torontoBoundary from '../../../assets/toronto/toronto-boundary.geo.json';
	import transitLines from '../assets/transitLines-toronto.geo.json';
	import transitStops from '../assets/transitStops-toronto.geo.json';
	
	// Import the new ADU permits file
	import aduPermits from '../assets/adu_permits_2022_2025.geo.json';

	let load = 0;
	
	let map;
	let PMTILES_URL = "/gentle-density/toronto.pmtiles";

	let protocol = new pmtiles.Protocol();
	maplibregl.addProtocol('pmtiles', protocol.tile);

	
	let pageHeight;
	let pageWidth;
	let mapHeight = 750; // Updated to match container max-height
	$: if (pageHeight < 800) {
		mapHeight = pageHeight - 200;
	} else {
		mapHeight = 750
	}

	const maxBounds = [
		[-80.0, 42.0], // SW coords
		[-78.6, 49.5] // NE coords
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
			center: [-79.36,43.71],
			zoom: 10,
			maxZoom: 15,
			minZoom: 8,
			bearing: -17.1,
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
			});

			// Transit layers
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
					'line-width': 1,
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
					'circle-radius': 3,
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
			
			// Add the new ADU permits source and layer as yellow points
			map.addSource('aduPermits', {
				'type': 'geojson',
				'data': aduPermits
			});
			
			// Add white outline for better visibility
			map.addLayer({
				'id': 'aduPermitsWhite',
				'type': 'circle',
				'source': 'aduPermits',
				'layout': {},
				'paint': {
					'circle-radius': [
						"interpolate",
						["linear"],
						["zoom"],
						11,
						3.5,
						16,
						13
						],
					'circle-color': '#fff',
					'circle-opacity': 0.75
				}
			});
			
			// Add yellow points
			map.addLayer({
				'id': 'aduPermits',
				'type': 'circle',
				'source': 'aduPermits',
				'layout': {},
				'paint': {
					'circle-radius': [
						"interpolate",
						["linear"],
						["zoom"],
						11,
						2.5,
						16,
						10
						],
					'circle-color': '#FFD700', // Yellow color
					'circle-opacity': 1,
					// 'circle-stroke-width': 1,
					// 'circle-stroke-color': '#fff'
				}
			});
			
			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10);
				
			}

			load = 1

		});

	});

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>



<div id="map-container">
	<div id="top-bar">
	<p>Location of Accessory Dwelling Units (ADUs) issued in the City of Toronto 2022-2025</p>
</div>
	<div id="map" style="height: {mapHeight}px"></div>
</div>

<style>
	#map-container {
		max-width: 1000px;
		/* max-height: 700px; */
		margin: 0 auto;
		width: 100%;
	}

	#map {
		width: 100%;
		height: 100%;
		max-height: 500px;
		border-top: 1px solid var(--brandLightBlue);
		/* border-bottom: 1px solid var(--brandLightBlue); */
	}

	#top-bar {
		width: calc(100%);
		max-width: 100%;
		margin: 0 auto;
		background-color: var(--brandDarkBlue);
		/* background-size: 13px 13px;
		background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%); */
		color: white;
		font-family: UbuntuMonoRegular, monospace;
		/* padding: 18px; */
		padding-top: 28px;
		padding-bottom: 8px;
		font-weight: bold;
	}
	#top-bar p {
		max-width: 720px;
		width: calc(100% - 36px);
		font-weight: normal;
		font-size: 20px;
		padding-left: 18px;
		padding-right: 18px;
		margin: 0 auto;
		font-family: UbuntuMonoBold, monospace;
	}
</style>