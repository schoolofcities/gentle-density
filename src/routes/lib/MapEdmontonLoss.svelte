<script>
	
	import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    import * as pmtiles from 'pmtiles';
	import edmontonBoundary from '../assets/edmonton/edmonton-boundary.geo.json';
	import transitLines from '../assets/edmonton/transitLines_edmonton.geo.json';
	import transitStops from '../assets/edmonton/transitStops_edmonton.geo.json';
	import lostDwellings from '../assets/toronto/lost-units-2017-2023.geo.json';
	import BaseLayer from "../assets/toronto/toronto.json";



	let map;
	let PMTILES_URL = "/gentle-density/edmonton.pmtiles";

	let protocol = new pmtiles.Protocol();
	maplibregl.addProtocol('pmtiles', protocol.tile);

	let unitPermit = "_";
	let unitAddress = "_";
	let unitPrevious = "_";
	let unitProposed = "_";
	let unitDateIssued = "_";
	let unitDateCompleted = "_";
	let unitDescription = "_";

	

	let pageHeight;
	let pageWidth;
	let mapHeight = 650;
	$: if (pageHeight < 650) {
		mapHeight = pageHeight - 200;
	} else {
		mapHeight = 650
	}

	const layerOpacity = 0.69;
	let message = " ";    

	const maxBounds = [
		[-114.0,53.15], // SW coords
		[-113.0, 53.75] // NE coords
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
			center: [-113.49,53.54],
			zoom: 10,
			maxZoom: 15,
			minZoom: 8,
			// bearing: -17.1,
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

			map.addSource('edmontonBoundary', {
				'type': 'geojson',
				'data': edmontonBoundary
			});
			map.addLayer({
				'id': 'edmontonBoundary',
				'type': 'line',
				'source': 'edmontonBoundary',
				'layout': {},
				'paint': {
					'line-color': '#fff',
					'line-width': 1,
					'line-opacity': 1
				}
			});
			
			// map.addSource('lostDwellings', {
			// 	'type': 'geojson',
			// 	'data': lostDwellings
			// }); 
			// map.addLayer({
			// 	'id': 'lostDwellingsWhite',
			// 	'type': 'circle',
			// 	'source': 'lostDwellings',
			// 	'layout': {},
			// 	'paint': {
			// 		'circle-radius': [
			// 			"interpolate",
			// 			["linear"],
			// 			["zoom"],
			// 			11,
			// 			6,
			// 			16,
			// 			18
			// 			],
			// 		'circle-color': '#fff'
			// 	}
			// });
			// map.addLayer({
			// 	'id': 'lostDwellings',
			// 	'type': 'circle',
			// 	'source': 'lostDwellings',
			// 	'layout': {},
			// 	'paint': {
			// 		'circle-radius': [
			// 			"interpolate",
			// 			["linear"],
			// 			["zoom"],
			// 			11,
			// 			5,
			// 			16,
			// 			12
			// 			],
			// 		'circle-color': '#DC4633',
			// 	}
			// }); 

			// map.addLayer({
			// 	'id': 'lostDwellingsSelected',
			// 	'type': 'circle',
			// 	'source': 'lostDwellings',
			// 	'layout': {},
			// 	'paint': {
			// 		'circle-radius': [
			// 			"interpolate",
			// 			["linear"],
			// 			["zoom"],
			// 			11,
			// 			5,
			// 			16,
			// 			12
			// 			],
			// 		'circle-color': '#F1C500',
			// 	}
			// });
			// map.setFilter('lostDwellingsSelected', ['==', ['get', '_id'], '']);
			
			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10.5)
			}


		});


		// map.on('mouseenter', 'lostDwellingsWhite', () => {
		// 	map.getCanvas().style.cursor = 'pointer';
		// });

		// map.on('mouseleave', 'lostDwellingsWhite', () => {
		// 	map.getCanvas().style.cursor = '';
		// });


		// map.on('click', 'lostDwellingsWhite', (e) => {

		// 	$: unitPermit = e.features[0].properties.PERMIT_NUM;

		// 	$: unitAddress = e.features[0].properties.STREET_NUM + " " + e.features[0].properties.STREET_NAME + " " + e.features[0].properties.STREET_TYPE + " " + e.features[0].properties.STREET_DIRECTION;

		// 	$: unitPrevious = e.features[0].properties.CURRENT_USE;

		// 	$: unitProposed = e.features[0].properties.PROPOSED_USE;

		// 	$: unitDateIssued = e.features[0].properties.ISSUED_DATE;

		// 	$: unitDateCompleted = e.features[0].properties.COMPLETED_DATE;

		// 	$: unitDescription = e.features[0].properties.DESCRIPTION;

		// 	map.setFilter('lostDwellingsSelected', ['==', ['get', '_id'], e.features[0].properties._id]);

		// });

	});

	

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>

<div id="top-bar">
	<p>Location of lost gentle density dwelling units (click on a dot to show details)</p>
</div>

<div id="map" style="height: {mapHeight}px"></div>

<div id="top-bar">
	<p><span class="category">Permit Number:</span> {unitPermit}</p>
	<p><span class="category">Address:</span> {unitAddress}</p>
	<p><span class="category">Issued Date:</span> {unitDateIssued}</p>
	<p><span class="category">Completed Date:</span> {unitDateCompleted}</p>
	<p><span class="category">Previous Use:</span> {unitPrevious}</p>
	<p><span class="category">Completed Use:</span> {unitProposed}</p>
	<p><span class="category">Description:</span> {unitDescription}</p>
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
		font-family: UbuntuMonoRegular, monospace;
		padding: 18px;
		padding-top: 10px;
		padding-bottom: 20px;
		font-weight: bold;
	}
	#top-bar p {
		max-width: 720px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 4px;
		/* font-size: 14px; */
	}

	.category {
		color: #F1C500;
		font-family: UbuntuMonoBold;
		/* font-size: 16px; */
	}
	
</style>