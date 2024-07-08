<script>

	import "../assets/styles.css";

	export let currentPage;

	let pages = [
		{
			"name": "canadian-residential-conversions",
			"title": "Tracking Residential Dwelling Conversions: An Exploration of Canadian Building Permit Survey Data",
			"date": "07/2024"
		},
		{
			"name": "toronto-rooming-houses",
			"title": "Zoning for Multi-Tenant Housing in Toronto",
			"date": "05/2024"
		},
		{
			"name": "toronto-renoductions",
			"title": "Reno-ductions: Loss of Gentle Density in Toronto",
			"date": "01/2024"
		},
		{
			"name": "toronto-building-permits",
			"title": "Tracking Gentle Density in Toronto: Visualizing Building Permit Data From 2013 To 2023",
			"date": "01/2024"
		}
	]

</script>


<div class="read-more">

	<div class="text">

		<br>

		<h3>Read More</h3>

			{#each pages as page}

				{#if currentPage !== page.name}

					<p>
					<a href={"./" + page.name}>
						{page.title}
					</a>
					</p>

				{/if}

			{/each}

		<br>

	</div>

</div>


<style>

	.read-more {
		width: 100%;
		/* margin: 0 auto; */
		margin-bottom: 0px;
		background-color: var(--brandDarkBlue);
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff13 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
	}

	.read-more h3 {
		color: white;
		text-decoration: none;
	}

	.read-more p {
		color: white;
		font-size: 16px;
	}

	.read-more a {
		color: white;
	}
	.read-more a:hover {
		color: var(--brandYellow);
	}

</style>