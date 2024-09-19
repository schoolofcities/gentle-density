<script>

import maplibregl from 'maplibre-gl';
import { onMount } from 'svelte';
import RangeSlider from "svelte-range-slider-pips";
import csdBoundary from '../assets/csd.geo.json'; 
import transitLines from "../assets/transit-lines-canada.geo.json";
import transitStops from "../assets/transit-stops-canada.geo.json";

export let city;
export let colours;

let map;
let values = [2021,2023];

$: console.log(values);

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
		secondary: "./canadian-cities/Victoria/Victoria_ss.geojson",
		detached: "./canadian-cities/Victoria/Victoria_ds.geojson",
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

let detachedGeo;
let secondaryGeo;
$: fetchGeoJSON(city);


$: if (detachedGeo && map.getLayer('suitesDetached') && map.getLayer('suitesDetachedWhite')) {
	map.setFilter('suitesDetached', [
		'all',
		['>=', ['get', 'Year'], values[0]],
		['<=', ['get', 'Year'], values[1]]
	]);
	map.setFilter('suitesDetachedWhite', [
		'all',
		['>=', ['get', 'Year'], values[0]],
		['<=', ['get', 'Year'], values[1]]
	]);
}

$: if (secondaryGeo && map.getLayer('suitesSecondary') && map.getLayer('suitesSecondaryWhite')) {
	map.setFilter('suitesSecondary', [
		'all',
		['>=', ['get', 'Year'], values[0]],
		['<=', ['get', 'Year'], values[1]]
	]);
	map.setFilter('suitesSecondaryWhite', [
		'all',
		['>=', ['get', 'Year'], values[0]],
		['<=', ['get', 'Year'], values[1]]
	]);
}



async function fetchGeoJSON(city) {
	try {
		const response = await fetch("./canadian-cities/" + city + "/" + city + "_ss.geojson");
		if (response.ok) {
			secondaryGeo = await response.json();
			secondaryGeo.features.forEach(feature => {
				if (feature.properties && feature.properties["DATE OF ISSUE"]) {
					feature.properties.Year = parseInt(feature.properties["DATE OF ISSUE"].slice(-4));
				}
			});
		} else {
		console.error('Failed to load GeoJSON:', response.status);
		}
	} catch (error) {
		console.error('Error fetching GeoJSON:', error);
	}
	try {
		const response2 = await fetch("./canadian-cities/" + city + "/" + city + "_ds.geojson");
		if (response2.ok) {
			detachedGeo = await response2.json();
			detachedGeo.features.forEach(feature => {
				if (feature.properties && feature.properties["DATE OF ISSUE"]) {
					feature.properties.Year = parseInt(feature.properties["DATE OF ISSUE"].slice(-4));
				}
			});
		} else {
			console.error('Failed to load GeoJSON:', response2.status);
			if (load === 1 && map.getSource('suitesDetached')) {
				map.removeLayer('suitesDetached');
				map.removeLayer('suitesDetachedWhite');
				map.removeSource('suitesDetached');
			};
		}
	} catch (error) {
		console.error('Error fetching GeoJSON:', error);
		if (load === 1 && map.getSource('suitesDetached')) {
			map.removeLayer('suitesDetached');
			map.removeLayer('suitesDetachedWhite');
			map.removeSource('suitesDetached');
		};
	}

	if (load === 1) {

		if (map.getSource('suitesSecondary')) {
			map.removeLayer('suitesSecondary');
			map.removeLayer('suitesSecondaryWhite');
			map.removeSource('suitesSecondary');

			map.addSource('suitesSecondary', {
				'type': 'geojson',
				'data': secondaryGeo
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
						10
						],
					'circle-color': '#fff',
				},
				'filter': 
					[
						'all',
						['>=', ['get', 'Year'], values[0]],
						['<=', ['get', 'Year'], values[1]]
					]
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
						3,
						16,
						8
						],
					'circle-color': colours.Secondary.Completed,
				},
				'filter': 
					[
						'all',
						['>=', ['get', 'Year'], values[0]],
						['<=', ['get', 'Year'], values[1]]
					]
			});
		};
		if (map.getSource('suitesDetached')) {
			map.removeLayer('suitesDetached');
			map.removeLayer('suitesDetachedWhite');
			map.removeSource('suitesDetached');
			map.addSource('suitesDetached', {
				'type': 'geojson',
				'data': detachedGeo
			}); 
			map.addLayer({
				'id': 'suitesDetachedWhite',
				'type': 'circle',
				'source': 'suitesDetached',
				'layout': {},
				'paint': {
					'circle-radius': [
						"interpolate",
						["linear"],
						["zoom"],
						11,
						5,
						16,
						10
						],
					'circle-color': '#fff',
				},
				'filter': 
					[
						'all',
						['>=', ['get', 'Year'], values[0]],
						['<=', ['get', 'Year'], values[1]]
					]
			});
			map.addLayer({
				'id': 'suitesDetached',
				'type': 'circle',
				'source': 'suitesDetached',
				'layout': {},
				'paint': {
					'circle-radius': [
						"interpolate",
						["linear"],
						["zoom"],
						11,
						3,
						16,
						8
						],
					'circle-color': colours.Detached.Completed,
				},
				'filter': 
					[
						'all',
						['>=', ['get', 'Year'], values[0]],
						['<=', ['get', 'Year'], values[1]]
					]
			});
		}
	}	
};


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
						"background-color": "#3a74aa"
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
				"fill-color": "#1470ad",
				"fill-outline-color": "#7b9aae",
				"fill-opacity": 1
			}
		})

		map.addLayer({
			"id": "buildings",
			"type": "fill",
			"source": "protomaps",
			"source-layer": "buildings",
			"minzoom": 14,
			"paint": {
				"fill-color": "#235c83",
				"fill-opacity": 1
			}
		}),

		map.addLayer({
			"id": "roads_major",
			"type": "line",
			"source": "protomaps",
			"source-layer": "roads",
			"filter": [
				"any",
				[
					"in",
					"pmap:kind",
					"highway",
					"major_road",
					"medium_road"
				]
			],
			"paint": {
				"line-color": "#8EB6DC",
				"line-opacity": 0.55,
				"line-width": 1.25
			}
		});

		map.addLayer({
			"id": "roads_residential",
			"type": "line",
			"source": "protomaps",
			"source-layer": "roads",
			"filter": [
				"any",
				[
					"in",
					"pmap:kind_detail",
					"residential"
				]
			],
			"paint": {
				"line-color": "#8EB6DC",
				"line-opacity": 0.55,
				"line-width": 0.75
			}
		});

		map.addLayer({
			"id": "roads_minor",
			"type": "line",
			"source": "protomaps",
			"source-layer": "roads",
			"paint": {
				"line-color": "#8EB6DC",
				"line-opacity": 0.15,
				"line-width": 0.15
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
				"line-opacity": 0.25,
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
				'line-color': '#273f75',
				'line-width': [
					'interpolate', ['linear'], ['zoom'],
					8, 1,  
					15, 2  
				],
				'line-opacity': 1,
				'line-dasharray': [6, 2]
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
				'circle-radius': [
					'interpolate', ['linear'], ['zoom'],
					8, 3,  
					15, 7  
				],
				'circle-color': '#273f75'
			}
		});

		map.addLayer({
			"id": "roads_labels_major",
			"type": "symbol",
			"source": "protomaps",
			"source-layer": "roads",
			"minzoom": 6,
			"filter": [
				"any",
				[
					"in",
					"pmap:kind",
					"highway",
					"major_road",
					"medium_road"
				]
			],
			"layout": {
				"symbol-sort-key": [
					"get",
					"pmap:min_zoom"
				],
				"symbol-placement": "line",
				"text-font": [
					"UbuntuMono Regular"
				],
				"text-field": [
					"get",
					"name"
				],
				"text-size": 12
			},
			"paint": {
				"text-color": "#cbd4df",
				"text-halo-color": "#1470ad",
				"text-halo-width": 2
       		}
		});

		

		map.addSource('csdBoundary', {
			'type': 'geojson',
			'data': csdBoundary
		}); 
		map.addLayer({
			"id": "csdBoundary",
			"type": "line",
			"source": "csdBoundary",
			"paint": {
				"line-color": "#f6fffd",
				"line-opacity": 1,
				"line-width": 2,
				'line-dasharray': [2, 1]
			},
			'filter': 
				[
					'all',
					['==', ['get', 'N'], city]
				]
		});

		map.addSource('suitesSecondary', {
			'type': 'geojson',
			'data': secondaryGeo
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
					10
					],
				'circle-color': '#fff',
			},
			'filter': 
				[
					'all',
					['>=', ['get', 'Year'], values[0]],
					['<=', ['get', 'Year'], values[1]]
				]
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
					3,
					16,
					8
					],
				'circle-color': colours.Secondary.Completed,
			},
			'filter': 
				[
					'all',
					['>=', ['get', 'Year'], values[0]],
					['<=', ['get', 'Year'], values[1]]
				]
		});

		map.addSource('suitesDetached', {
			'type': 'geojson',
			'data': detachedGeo
		}); 
		map.addLayer({
			'id': 'suitesDetachedWhite',
			'type': 'circle',
			'source': 'suitesDetached',
			'layout': {},
			'paint': {
				'circle-radius': [
					"interpolate",
					["linear"],
					["zoom"],
					11,
					5,
					16,
					10
					],
				'circle-color': '#fff',
			},
			'filter': 
				[
					'all',
					['>=', ['get', 'Year'], values[0]],
					['<=', ['get', 'Year'], values[1]]
				]
		});
		map.addLayer({
			'id': 'suitesDetached',
			'type': 'circle',
			'source': 'suitesDetached',
			'layout': {},
			'paint': {
				'circle-radius': [
					"interpolate",
					["linear"],
					["zoom"],
					11,
					3,
					16,
					8
					],
				'circle-color': colours.Detached.Completed,
			},
			'filter': 
				[
					'all',
					['>=', ['get', 'Year'], values[0]],
					['<=', ['get', 'Year'], values[1]]
				]
		});
		

	})

	load = 1;

	fetchGeoJSON(city);

});


$: if (load === 1) {
	console.log(city);
	map.flyTo({
		center: cityData[city].center, 
		zoom: cityData[city].zoom, 
	});
}

$: if (load === 1 && map.getSource('csdBoundary')) {
	console.log("meow:")
	map.setFilter('csdBoundary', 
		['==', ['get', 'N'], city]
	)
};

let onDetached = true;
	function filterDetached() {
		if (onDetached) {
			map.setPaintProperty('suitesDetached', 'circle-opacity', 0);
			map.setPaintProperty('suitesDetachedWhite', 'circle-opacity', 0);
			onDetached = false
		} else {
			map.setPaintProperty('suitesDetached', 'circle-opacity', 1);
			map.setPaintProperty('suitesDetachedWhite', 'circle-opacity', 1);
			onDetached = true
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


<div id="map-title">

	<p>Location of Building Permits in {city}</p>

</div>

<div id="map"></div>

<div id="options">

	
		
	<div id="pointLayers">

		<p>Filter by construction type:</p>
		
		<button id="detachedButton" on:click={filterDetached} class="{onDetached ? 'layerOn' : 'layerOff'}" >
			<svg width=10 height=10>
				<circle
					style="fill:{colours.Detached.Completed};stroke-width:2;stroke:#fff"
					cx="5"
					cy="5"
					r="4" />
			</svg>
			Detached Suites
		</button>

		<button id="secondaryButton"  on:click={filterSecondary} class="{onSecondary ? 'layerOn' : 'layerOff'}">
			<svg width=10 height=10>
				<circle
					style="fill:{colours.Secondary.Completed};stroke-width:2;stroke:#fff"
					cx="5"
					cy="5"
					r="4" />
			</svg>
			Secondary Suites
		</button>

	</div>

	<br>

	<div id="range-wrapper">

		<p>Filter by permit issue date:</p>

		<RangeSlider bind:values range pips all='label' step={1} min={2013} max={2023} hoverable={false}/>

	</div>

</div>




<style>

	#map-title {
		margin: 0 auto;
		max-width: 1400px;
		background-color: var(--brandDarkBlue);
    	background-size: 13px 13px;
    	background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
		/* max-width: 700px; */
		height: 40px;
	}
	#map-title p {
		color: white;
		padding-top: 10px;
		font-size: 18px;
		font-family: UbuntuMonoBold, monospace;
		font-weight: 500;
		text-align: center;
	}

	#map {
		margin: 0 auto;
		width: 100%;
		max-width: 1400px;
		height: 600px;
		background-color: #fff;
		opacity: 1;
		border-top: 1px solid var(--brandLightBlue);
		border-bottom: 1px solid var(--brandLightBlue);
	}

	#options {
		margin: 0 auto;
		max-width: 1400px;
		background-color: var(--brandDarkBlue);
    	background-size: 13px 13px;
    	background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff05 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
		/* max-width: 700px; */
		height: 240px;
	}

	#pointLayers {
		margin: 0 auto;
		max-width: 570px;
		color: white;
		padding: 10px;
		padding-left: 16px;
		margin-bottom: -30px;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		overflow: hidden;
		text-align: center;
	}

	#detachedButton {
		float: left;
		margin-left: 20px;
		margin-right: 20px;
		width: 250px;
		border: solid 1px #fff;
		color: white;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		font-size: 16px;
		border: solid 1px #fff;
		padding: 4px;
		margin-bottom: 10px;
		background-color: #2a5e89;
		cursor: pointer;
	}

	#secondaryButton {
		overflow: hidden;
		width: 250px;
		border: solid 1px #fff;
		color: white;
		font-family: UbuntuMonoRegular, monospace;
		font-weight: 400;
		font-size: 16px;
		padding: 4px;
		margin-bottom: 10px;
		background-color: #2a5e89;
		cursor: pointer;
	}

	#detachedButton:hover {
		opacity: 1;
		background-color: var(--brandDarkBlue);
	}

	#secondaryButton:hover {
		opacity: 1;
		background-color: var(--brandDarkBlue);
	}

	@media screen and (max-width: 600px) {
		#pointLayers {
			width: 300px;
		}
		#detachedButton {
			margin-left: 25px;
		}
	}

	.layerOn {
		opacity: 1;
	}
	.layerOff {
		opacity: 0.42;
	}

	#range-wrapper {
		margin: 0 auto;
		max-width: 700px;
		color: white;
		text-align: center;
	}


</style>