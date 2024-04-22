<script>
	import { onMount } from "svelte";
	import maplibregl from "maplibre-gl";
	import * as pmtiles from "pmtiles";
	import torontoBoundary from "../../../assets/toronto/toronto-boundary.geo.json";
	import transitLines from "../../../assets/toronto/transitLines-toronto.geo.json";
	import transitStops from "../../../assets/toronto/transitStops-toronto.geo.json";
	import BaseLayer from "../../../assets/toronto/toronto.json";

	// import rooming house data layers based on map input
	export let layer;
		let layername = "old";
		if (layer === "new") {
			layername = "new";
		};
	
	import oldOverlay from "../../../assets/toronto/zoning_rooming_house_overlay_old.geo.json";
	import newOverlay from "../../../assets/toronto/zoning_rooming_house_overlay_Qnew.geo.json";


	let map;
	let PMTILES_URL = "/gentle-density/toronto.pmtiles";

	let protocol = new pmtiles.Protocol();
	maplibregl.addProtocol("pmtiles", protocol.tile);

	let pageHeight;
	let pageWidth;
	let mapHeight = 650;
	$: if (pageHeight < 650) {
		mapHeight = pageHeight - 200;
	} else {
		mapHeight = 650;
	}

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
			maxZoom: 15,
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
			map.addSource("protomaps", {
				type: "vector",
				url: "pmtiles://" + PMTILES_URL,
			});

			protoLayers.forEach((e) => {
				map.addLayer(e);
			});

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
					"line-color": "#1d4667",
					"line-width": 2,
					"line-opacity": 1,
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
					"circle-color": "#1d4667",
				},
			});
			map.addLayer({
				id: "transitStopsWhite",
				type: "circle",
				source: "transitStops",
				layout: {},
				paint: {
					"circle-color": "#fff",
					"circle-radius": 2,
					"circle-opacity": 0.42,
				},
			});

			map.addSource("torontoBoundary", {
				type: "geojson",
				data: torontoBoundary,
			});
			map.addLayer({
				id: "torontoBoundary",
				type: "line",
				source: "torontoBoundary",
				layout: {},
				paint: {
					"line-color": "#fff",
					"line-width": 1,
					"line-opacity": 1,
				},
			});


			// load old or new zoning overlay
			if (layername === "old") {
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

			}	else if (layername === "new") {
				map.addSource('newOverlay', {
					'type': 'geojson',
					'data': newOverlay,
				});
				map.addLayer({
					'id': 'newOverlay',
					'type': 'fill',
					'source': 'newOverlay',
					'layout': {},
					'paint': {
						'fill-color': [
							'step',
							['get', 'MAX_ROOMS'], '#fff',
							6, '#feebe2',
							10, '#fbb4b9',
							12, '#f768a1',
							25, '#ae017e',
						]
					}
				});
			};



			if (pageHeight > 700 && pageWidth > 800) {
				map.zoomTo(10.5);
			}


		});
	});
</script>

<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth} />

<div id="top-bar">
	<p>Zoning for Multi-Tenant Houses</p>
</div>

<div id={"map" + layername} class="map" style="height: {mapHeight}px"></div>

<div style="position: relative">
	<div id="rooms-legend" class="legend">
		<h4>Max Rooms</h4>
		<div><span style="background-color: #feebe2"></span>6</div>
		<div><span style="background-color: #fbb4b9"></span>10</div>
		<div><span style="background-color: #f768a1"></span>12</div>
		<div><span style="background-color: #ae017e"></span>25</div>
	</div>
</div>

<style>
	.map {
		width: 100%;
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

	#top-bar p {
		max-width: 720px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 4px;
		/* font-size: 14px; */
	}

	.legend {
        background-color: #fff;
        border-radius: 3px;
        bottom: 25px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        font:
            12px/20px 'Helvetica Neue',
            Arial,
            Helvetica,
            sans-serif;
        padding: 10px;
        position: absolute;
        right: 20px;
        z-index: 1;
    }

    .legend h4 {
        margin: 0 0 10px;
    }

    .legend div span {
        /* border-radius: 50%; */
        display: inline-block;
        height: 10px;
        margin-right: 5px;
        width: 10px;
    }
</style>