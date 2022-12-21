<script>
    
    import { onMount } from 'svelte';
    import mapboxgl from "mapbox-gl";
    
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Nob29sb2ZjaXRpZXMiLCJhIjoiY2w2Z2xhOXprMTYzczNlcHNjMnNvdGlmNCJ9.lOgVHrajc1L-LlU0as2i2A';
    
    let pageHeight;
    let pageWidth;
    let mapHeight = 800;
    $: if (pageHeight < 800) {
        mapHeight = pageHeight - 200;
    } else {
        mapHeight = 800
    }
    
    const layerOpacity = 0.69;
    let message = " ";    
    let map;
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
			maxZoom: 17,
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
            
            if (pageHeight > 700 && pageWidth > 800) {
                map.zoomTo(11)
            }
        });
        
        // map.on('mousemove', 'VotingSubDivisionsFill', (e) => {
        //     if (candidate === "margin") {
        //         message = "Ward: " + e.features[0].properties.ward + " --- Poll: " + e.features[0].properties.vsd + " --- Margin: " + Math.round(100 * e.features[0].properties[candidates[candidate].column]) + "%"
        //     } else if (candidate === "race") {
        //         let name = "1) Tory 2) Peñalosa"
        //         if (e.features[0].properties.contest === "Tory-Brown") {
        //             name = "1) Tory 2) Brown"
        //         }
        //         if (e.features[0].properties.contest === "Penalosa-Brown") {
        //             name = "1) Peñalosa 2) Brown"
        //         }
        //         if (e.features[0].properties.contest === "Penalosa-Tory") {
        //             name = "1) Peñalosa 2) Tory"
        //         }
        //         if (e.features[0].properties.contest === "Brown-Penalosa") {
        //             name = "1) Brown 2) Peñalosa"
        //         }
        //         message = "Ward: " + e.features[0].properties.ward + " --- Poll: " + e.features[0].properties.vsd + " --- Top-two finishers: " + name
        //     } else {
        //         message = "Ward: " + e.features[0].properties.ward + " --- Poll: " + e.features[0].properties.vsd + " --- Total Votes: " + e.features[0].properties.total + " --- Votes for " + candidates[candidate].name + ": " + e.features[0].properties[candidates[candidate].column] +  " --- % for " + candidates[candidate].name + ": " + Math.round(100 * e.features[0].properties[candidates[candidate].column] / e.features[0].properties.total) + "%"  
        //     }
                  
        // });
        // map.on('mouseleave', 'VotingSubDivisionsFill', () => {
        //     message = " "
        // });
    });

</script>



<svelte:window bind:innerHeight={pageHeight} bind:innerWidth={pageWidth}/>

<div id="map" style="height: {mapHeight}px"></div>






<style>
    .map {
		width: 100%;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
	}
</style>
