<script>

	import "../../assets/styles.css";

	import Top from "../../lib/TopSofC.svelte";

	import Map from "./lib/MapZoning.svelte";



</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

	<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />

</svelte:head>



<Top/>

<main>

	<div class="blueprint" style="background-image: url('../gentle-density/blueprint-background-loss.png');">

		<div class="title">
			<h1>
				Title!
			</h1>
			<h2>
				SubTitle!
			</h2>
			<h2>
				
			</h2>
			<p>Authors</p>
			<p>April 2024</p>
		</div>

	</div>


	<div class="arrow">
		<p>▼</p>
	</div>

	<div class="text">

		<p>
			Hello I am some text! 
		</p>


		<p>
			Hello I am some more text! 
		</p>
		
	</div>



	<Map/>

	<div class="text">
		<p>
			More text!
		</p>
	</div>
	<div class="text">
		<h3>Data & Methods</h3>
		<p>
			Describe the data sources, etc. here :)
		</p>
	</div>


</main>




<style>
	
	.red {
		color: #DC4633;
	}

</style>