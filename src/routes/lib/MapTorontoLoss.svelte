<script>
	
	import { onMount } from 'svelte';
	import mapboxgl from "mapbox-gl";

	import torontoBoundary from '../assets/toronto/toronto-boundary.geo.json';
	import transitLines from '../assets/toronto/transitLines.geo.json';
	import transitStops from '../assets/toronto/transitStops.geo.json';
	import lostDwellings from '../assets/toronto/lost-units-2017-2023.geo.json';


	let map;

	let unitPermit = "_";
	let unitAddress = "_";
	let unitPrevious = "_";
	let unitProposed = "_";
	let unitDateIssued = "_";
	let unitDateCompleted = "_";
	let unitDescription = "_";

	mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nob29sb2ZjaXRpZXMiLCJhIjoiY2xqOG0zbTQ1MTAzdTNkbnY2OGluMHJ0byJ9.yX_EB8JqRsIRufOOu8LjeQ';
	
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
			
			map.addSource('lostDwellings', {
				'type': 'geojson',
				'data': lostDwellings
			}); 
			map.addLayer({
				'id': 'lostDwellingsWhite',
				'type': 'circle',
				'source': 'lostDwellings',
				'layout': {},
				'paint': {
					'circle-radius': [
						"interpolate",
						["linear"],
						["zoom"],
						11,
						6,
						16,
						18
						],
					'circle-color': '#fff'
				}
			});
			map.addLayer({
				'id': 'lostDwellings',
				'type': 'circle',
				'source': 'lostDwellings',
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
					'circle-color': '#DC4633',
				}
			}); 

			map.addLayer({
				'id': 'lostDwellingsSelected',
				'type': 'circle',
				'source': 'lostDwellings',
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
					'circle-color': '#F1C500',
				}
			});
			map.setFilter('lostDwellingsSelected', ['==', ['get', '_id'], '']);
			
			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10.75)
			}


		});


		map.on('mouseenter', 'lostDwellingsWhite', () => {
			map.getCanvas().style.cursor = 'pointer';
		});

		map.on('mouseleave', 'lostDwellingsWhite', () => {
			map.getCanvas().style.cursor = '';
		});


		map.on('click', 'lostDwellingsWhite', (e) => {

			$: unitPermit = e.features[0].properties.PERMIT_NUM;

			$: unitAddress = e.features[0].properties.STREET_NUM + " " + e.features[0].properties.STREET_NAME + " " + e.features[0].properties.STREET_TYPE + " " + e.features[0].properties.STREET_DIRECTION;

			$: unitPrevious = e.features[0].properties.CURRENT_USE;

			$: unitProposed = e.features[0].properties.PROPOSED_USE;

			$: unitDateIssued = e.features[0].properties.ISSUED_DATE;

			$: unitDateCompleted = e.features[0].properties.COMPLETED_DATE;

			$: unitDescription = e.features[0].properties.DESCRIPTION;

			map.setFilter('lostDwellingsSelected', ['==', ['get', '_id'], e.features[0].properties._id]);

		});

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
		padding-bottom: 4px;
	}

	.category {
		color: #F1C500;
		font-size: 18px;
	}
	
</style>
