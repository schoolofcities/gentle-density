<script>

import maplibregl from 'maplibre-gl';
import { onMount } from 'svelte';

export let city;

let map;

const cityData = {
	'Calgary': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-114.06388, 51.04702],
		zoom: 10,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Edmonton': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-113.49679, 53.54371],
		zoom: 10,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Guelph': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-80.247954, 43.545879],
		zoom: 12,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Halifax': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-63.57505, 44.64660],
		zoom: 10,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Hamilton': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-79.868900, 43.255131],
		zoom: 12,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Kingston': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-76.52333, 44.24097],
		zoom: 12,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Kitchener': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-80.48713, 43.44994],
		zoom: 12,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Mississauga': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-79.641030, 43.592813],
		zoom: 11,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Moncton': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-64.79054, 46.09771],
		zoom: 12,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Ottawa': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-75.67754, 45.40899],
		zoom: 11,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Regina': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-104.60958, 50.45530],
		zoom: 12,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Toronto': {
		maxBounds: [
			[-80.0, 37.0], 
			[-78.6, 45.5] 
		],
		center: [-79.36,43.71],
		zoom: 10,
		maxZoom: 14,
		minZoom: 8,
		bearing: 0,
	},
	'Vancouver': {
		maxBounds: [
			[-123.43, 48.39], // SW coords
			[-123.27, 48.47] // NE coords
		],
		center: [-123.12367, 49.26239],
		zoom: 11,
		maxZoom: 14,
		minZoom: 9,
		bearing: 0
	},
	'Victoria': {
		secondary: "../../../../data/canadian-cities/Victoria/Victoria_ss.geojson",
		maxBounds: [
			[-123.43, 48.39], // SW coords
			[-123.27, 48.47] // NE coords
		],
		center: [-123.35, 48.428],
		zoom: 12,
		maxZoom: 14,
		minZoom: 9,
		bearing: 0
	},
	'Winnipeg': {
		maxBounds: [
			[-123.43, 48.39], // SW coords
			[-123.27, 48.47] // NE coords
		],
		center: [-97.139020, 49.894669],
		zoom: 12,
		maxZoom: 14,
		minZoom: 9,
		bearing: 0
	},
	'Waterloo': {
		maxBounds: [
			[-123.43, 48.39], // SW coords
			[-123.27, 48.47] // NE coords
		],
		center: [-80.521696, 43.465082],
		zoom: 12,
		maxZoom: 14,
		minZoom: 9,
		bearing: 0
	}
}


$: fetchGeoJSON(city);

async function fetchGeoJSON(city) {
	const url = `https://example.com/geojson/${city}.geojson`; // Construct the URL using the city name
	try {
		const response = await fetch(url);
		if (response.ok) {
		geojsonData = await response.json();
		} else {
		console.error('Failed to load GeoJSON:', response.status);
		}
	} catch (error) {
		console.error('Error fetching GeoJSON:', error);
	}
}

let load = 0;

onMount(() => {
	
	map = new maplibregl.Map({
		container: "map", 
		style: {
			"version": 8,
			"name": "Empty",
			"glyphs": "https://schoolofcities.github.io/fonts/fonts/{fontstack}/{range}.pbf",
			"sources": {
				'protomaps': {
					type: 'vector',
					url: 'https://api.protomaps.com/tiles/v3.json?key=30ce074e38619138'
				}
			},
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
		center: cityData[city].center,
		zoom: cityData[city].zoom,
		maxZoom:cityData[city].maxZoom,
		minZoom: cityData[city].minZoom,
		bearing: cityData[city].bearing,
		// maxBounds: cityData[city].maxBounds,
		boxZoom: false,
		touchPitch: false,
		attributionControl: false
	});

	map.dragRotate.disable();
	map.touchZoomRotate.disableRotation();
	map.addControl(new maplibregl.NavigationControl(), 'top-left');
	map.addControl(new maplibregl.ScaleControl(), 'bottom-left');
	map.scrollZoom.disable();
	
	map.on('load', function() {

		map.addLayer({
			"id": "water",
			"type": "fill",
			"source": "protomaps",
			"source-layer": "water",
			"paint": {
				"fill-color": "#8EB6DC",
				"fill-outline-color": "#dedede",
				"fill-opacity": 0.3
			}
		})

		map.addLayer({
			"id": "roads_major",
			"type": "line",
			"source": "protomaps",
			"source-layer": "roads",
			"paint": {
				"line-color": "#8EB6DC",
				"line-opacity": 0.65,
				"line-width": 1
			}
		});

		map.addLayer({
			"id": "roads_highway",
			"type": "line",
			"source": "protomaps",
			"source-layer": "roads",
			"filter": [
				"all",
				[
					"==",
					"pmap:kind",
					"highway"
				]
			],
			"paint": {
				"line-color": "#8EB6DC",
				"line-opacity": 0.65,
				"line-width": [
					"interpolate",
					[
						"exponential",
						1
					],
					[
						"zoom"
					],
					6, 1, 10, 1.5
				]
			}
		
		});

	})

	load = 1;

});


$: if (load === 1) {
	console.log(city);
	map.flyTo({
		center: cityData[city].center, 
		zoom: cityData[city].zoom, 
	});
}


</script>



<div id="map"></div>



<style>

	#map {
		margin: 0 auto;
		width: 100%;
		max-width: 1400px;
		height: 600px;
		background-color: #fff;
		opacity: 0.8;
		border-top: 1px solid var(--brandLightBlue);
		border-bottom: 1px solid var(--brandLightBlue);
	}

</style>