<script>
	import { onMount } from "svelte";
	import maplibregl from "maplibre-gl";
	import * as pmtiles from "pmtiles";
	import notTorontoBoundary from "../../../assets/toronto/not-toronto.geo.json";
	import torontoBoundary from "../../../assets/toronto/toronto-boundary.geo.json";
	import formerBoundary from "../../../assets/toronto/former_municipalities_boundaries_data.geo.json";
	import formerCentroids from "../../../assets/toronto/former_municipalities_centroids.geo.json";
	import transitLines from "../../../assets/toronto/transitLines-toronto.geo.json";
	import transitStops from "../../../assets/toronto/transitStops-toronto.geo.json";
	import BaseLayer from "../../../assets/toronto/toronto-white.json";


	// import rooming house data layers based on map input
	export let layer;
	export let oldOverlay;
	export let newOverlay;
	let layername = "Old";
	if (layer === "new") {
		layername = "New";
	} else if (layer === "change") {
		layername = "Change";
	} else {
		layername = "Old";
	}

	

	let map;
	let PMTILES_URL = "/gentle-density/toronto.pmtiles";

	let protocol = new pmtiles.Protocol();
	maplibregl.addProtocol("pmtiles", protocol.tile);

	let pageHeight;
	let pageWidth;

	const maxBounds = [
		[-80.0, 42.0], // SW coords
		[-78.6, 49.5], // NE coords
	];

	onMount(async () => {
		map = new maplibregl.Map({
			container: "map" + layername,
			style: {
				version: 8,
				name: "Empty",
				glyphs: "https://schoolofcities.github.io/fonts/fonts/{fontstack}/{range}.pbf",
				sources: {},
				layers: [
					{
						id: "background",
						type: "background",
						paint: {
							"background-color": "rgba(0,0,0,0)",
						},
					},
				],
			},
			center: [-79.36, 43.71],
			zoom: 10,
			maxZoom: 12, // max zoom 12 or 13
			minZoom: 8,
			bearing: -17.1,
			maxBounds: maxBounds,
			boxZoom: false,
			touchPitch: false,
			attributionControl: false,
		});
		map.addControl(new maplibregl.NavigationControl(), "top-left");
		map.addControl(new maplibregl.ScaleControl(), "bottom-left");

		// disable map rotation using right click + drag
		map.dragRotate.disable();
		map.touchZoomRotate.disableRotation();

		map.scrollZoom.disable();

		let protoLayers = BaseLayer;

		map.on("load", function () {

			map.addSource("torontoBoundary", {
				type: "geojson",
				data: torontoBoundary,
			});
			map.addLayer({
				id: "torontoBoundary",
				type: "fill",
				source: "torontoBoundary",
				layout: {},
				paint: {
					"fill-color": "#fff",
					"fill-opacity": 1
				},
			});

			map.addSource("protomaps", {
				type: "vector",
				url: "pmtiles://" + PMTILES_URL,
			});

			map.addLayer({
				"id": "water",
				"type": "fill",
				"source": "protomaps",
				"source-layer": "water",
				"paint": {
					"fill-color": "#8EB6DC",
					"fill-opacity": 0.25
				}
			})

			

			// protoLayers.forEach((e) => {
			// 	map.addLayer(e);
			// });

			// load old or new or change zoning overlay
			if (layername === "Old") {
				map.addSource("oldOverlay", {
					type: "geojson",
					data: oldOverlay,
				});

				map.addLayer({
					id: "oldOverlay",
					type: "fill",
					source: "oldOverlay",
					layout: {},
					paint: {
						// categorized and colour by max rooms
						"fill-color": [
							"step",
							["get", "MAX_ROOMS"],
							"#fff",
							6,
							"#feebe2",
							10,
							"#fbb4b9",
							12,
							"#f768a1",
							25,
							"#ae017e",
						],
						// categorized by code but colour by max rooms
						// 'fill-color': [
						// 	'match',
						// 	['string', ['get', 'RMG_STRING']],
						// 	"A1", '#fbb4b9',
						// 	"B1", '#feebe2',
						// 	"B2", '#f768a1',
						// 	"B3", '#ae017e',
						// 	"C1", '#fbb4b9',
						// 	'#fff'
						// ]
					},
				});
			} else if (layername === "New") {
				map.addSource("newOverlay", {
					type: "geojson",
					data: newOverlay,
				});
				map.addLayer({
					id: "newOverlay",
					type: "fill",
					source: "newOverlay",
					layout: {},
					paint: {
						"fill-color": [
							"step",
							["get", "m"],
							"#fff",
							6,
							"#feebe2",
							10,
							"#fbb4b9",
							12,
							"#f768a1",
							25,
							"#ae017e",
						],
					},
				});
			} else if (layername === "Change") {
				map.addSource("newOverlay", {
					type: "geojson",
					data: newOverlay,
				});
				map.addLayer({
					id: "newOverlay",
					type: "fill",
					source: "newOverlay",
					layout: {},
					paint: {
						"fill-color": [
							"step",
							["get", "c"],
							"#000",
							-19,
							"#8e0152",
							-6,
							"#c51b7d",
							-4,
							"#de77ae",
							0,
							"#ffffcc",
							2,
							"#d9f0a3",
							6,
							"#addd8e",
							12,
							"#78c679",
							13,
							"#41ab5d",
							19,
							"#238b45",
							25,
							"#005a32"
						],
					},
				});
			}


			map.addLayer({
				"id": "roads",
				"type": "line",
				"source": "protomaps",
				"source-layer": "roads",
				"paint": {
					"line-color": "#8EB6DC",
					"line-opacity": 0.2,
					"line-width": 1
				}
			})


			map.addSource("transitLines", {
				type: "geojson",
				data: transitLines,
			});
			map.addLayer({
				id: "transitLines",
				type: "line",
				source: "transitLines",
				layout: {},
				paint: {
					"line-color": "#8EB6DC",
					"line-width": 1,
					"line-opacity": 0.75,
				},
			});

			map.addSource("transitStops", {
				type: "geojson",
				data: transitStops,
			});
			map.addLayer({
				id: "transitStops",
				type: "circle",
				source: "transitStops",
				layout: {},
				paint: {
					"circle-radius": 2,
					"circle-color": "#8EB6DC",
				},
			});
			map.addLayer({
				id: "transitStopsWhite",
				type: "circle",
				source: "transitStops",
				layout: {},
				paint: {
					"circle-color": "#fff",
					"circle-radius": 1,
					"circle-opacity": 0.42,
				},
			});

			
			map.addSource("notTorontoBoundary", {
				type: "geojson",
				data: notTorontoBoundary,
			});
			map.addLayer({
				"id": "notTorontoBoundary",
				"type": "fill",
				"source": "notTorontoBoundary",
				"paint": {
					"fill-color": "#fff",
					"fill-opacity": 0.65
				}
			})
			
			map.addSource("formerBoundary", {
				type: "geojson",
				data: formerBoundary,
			});
			map.addLayer({
				id: "formerBoundaryLine",
				type: "line",
				source: "formerBoundary",
				layout: {},
				paint: {
					"line-color": "#002b8f",
					"line-width": 1,
					"line-opacity": 0.42,
				},
			});

			map.addLayer({
				id: "torontoBoundaryLine",
				type: "line",
				source: "torontoBoundary",
				layout: {},
				paint: {
					"line-color": "#002b8f",
					"line-width": 1.5,
					"line-opacity": 1,
				},
			});

			// centroids for text labels of former cities
			map.addSource("formerCentroids", {
				type: "geojson",
				data: formerCentroids,
			});
			map.addLayer({
				id: "formerCentroids",
				type: "symbol",
				source: "formerCentroids",
				paint: {
					"text-color": "#002b8f",
					"text-halo-color": "#fff",
					"text-halo-width": 1.5,
					"text-halo-blur": 0,
					"text-opacity": 1
				},
				layout: {
					"text-field": ["get", "AREA_NAME"],
					"text-font": [
						"UbuntuMono Regular"
					],
					"text-offset": [0, -0.2],
					"text-anchor": "center",
					"text-size": 14,
				},
			});

			

			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10.5);
			}
		});
	});
</script>

<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth} />


{#if layer === "old"}

<div id={"map" + layername} class="map"></div>

<div class="legend-wrapper">
	<div id={"legend-" + layername} class="legend">
		<h4>Max rooms</h4>
		<h4>allowable</h4>
		<div><span style="background-color: #feebe2"></span>6</div>
		<div><span style="background-color: #fbb4b9"></span>10</div>
		<div><span style="background-color: #f768a1"></span>12</div>
		<div><span style="background-color: #ae017e"></span>25</div>
	</div>
</div>

{:else if layer === "new"}

<div id={"map" + layername} class="map"></div>

<div class="legend-wrapper">
	<div id={"legend-" + layername} class="legend">
		<h4>Max rooms</h4>
		<h4>allowable</h4>
		<div><span style="background-color: #feebe2"></span>6</div>
		<div><span style="background-color: #f768a1"></span>12</div>
		<div><span style="background-color: #ae017e"></span>25</div>
	</div>
</div>


{:else}

<div id={"map" + layername} class="map"></div>

<div class="legend-wrapper">
	<div id={"legend-" + "change"} class="legend">
		<h4>Change in max</h4>
		<h4>rooms allowable</h4>
		<div><span style="background-color: #8e0152"></span>-19</div>
		<div><span style="background-color: #c51b7d"></span>-6</div>
		<div><span style="background-color: #de77ae"></span>-4</div>
		<div><span style="background-color: #ffffcc"></span>0</div>
		<div><span style="background-color: #d9f0a3"></span>2</div>
		<div><span style="background-color: #addd8e"></span>6</div>
		<div><span style="background-color: #78c679"></span>12</div>
		<div><span style="background-color: #41ab5d"></span>13</div>
		<div><span style="background-color: #238b45"></span>19</div>
		<div><span style="background-color: #005a32"></span>25</div>
	</div>
</div>
{/if}


<style>
	.map {
		width: 100%;
		max-width: 1200px;
		max-height: 800px;
		height: 60vh;
		min-height: 200px;
		margin: 0 auto;
		margin-top: -20px;
		border-top: 1px solid var(--brandLightBlue);
		border-bottom: 1px solid var(--brandLightBlue);
	}

	#top-bar {
		width: calc(100% - 36px);
		background-color: var(--brandDarkBlue);
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(
			-45deg,
			#eaf5ff05 0,
			#eaf5ff05 1.3px,
			var(--brandDarkBlue) 0,
			var(--brandDarkBlue) 50%
		);
		color: white;
		font-size: 17px;
		font-family: UbuntuMonoRegular, monospace;
		padding: 18px;
		padding-top: 28px;
		padding-bottom: 8px;
		font-weight: bold;
	}

	.legend-wrapper {
		position: relative;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.legend {
		background-color: #fff;
		border-radius: 3px;
		bottom: 25px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		font-family: UbuntuMonoRegular;
		font-size: 14px;
		padding: 10px;
		position: absolute;
		right: 20px;
		z-index: 1;
		color: var(--brandDarkBlue);
	}

	.legend h4 {
		margin: 0 0 10px;
		margin-bottom: 5px;
		margin-top: -5px;
	}

	.legend div span {
		/* border-radius: 50%; */
		display: inline-block;
		height: 10px;
		margin-right: 5px;
		width: 10px;
	}
</style>
