<script>
	
	import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import * as pmtiles from 'pmtiles';
	import torontoBoundary from '../../assets/toronto/toronto-boundary.geo.json';
	import transitLines from '../../assets/toronto/transitLines-toronto.geo.json';
	import transitStops from '../../assets/toronto/transitStops-toronto.geo.json';
	import BaseLayer from "../../assets/toronto/toronto.json";



	let map;
	let PMTILES_URL = "/gentle-density/toronto.pmtiles";

	let protocol = new pmtiles.Protocol();
	maplibregl.addProtocol('pmtiles', protocol.tile);

	

	let pageHeight;
	let pageWidth;
	let mapHeight = 650;
	$: if (pageHeight < 650) {
		mapHeight = pageHeight - 200;
	} else {
		mapHeight = 650
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
		map.addControl(new maplibregl.NavigationControl(), 'top-left');
		map.addControl(new maplibregl.ScaleControl(), 'bottom-left');

		// disable map rotation using right click + drag
		map.dragRotate.disable();
		map.touchZoomRotate.disableRotation();

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

			map.addSource('transitLines', {
				'type': 'geojson',
				'data': transitLines,
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
				'data': transitStops,
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
			
			
			
			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10.5)
			}


		});

	});

	

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>

<div id="top-bar">
	<p>Title of the map!</p>
</div>

<div id="map" style="height: {mapHeight}px"></div>




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
		font-family: UbuntuMonoRegular, monospace;
		padding: 18px;
		padding-top: 28px;
		padding-bottom: 8px;
		font-weight: bold;
	}

	#top-bar p {
		max-width: 720px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 4px;
		/* font-size: 14px; */
	}
	
</style>