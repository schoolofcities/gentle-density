<script>

import "../assets/styles.css";
import Top from "$lib/TopSofC.svelte";
import pages from "$lib/pages.json";

</script>



<svelte:head>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>

    <title>Gentle Density in Canadian Cities | School of Cities</title>
    <meta name="description" content="Maps, data, and policy discussion.">
    <meta name="author" content="Jeff Allen">

	<meta property="og:title" content="Gentle Density in Canadian Cities" />
    <meta property="og:description" content="Maps, data, and policy discussion." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/gentle-density" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-mulit-city.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/gentle-density" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Gentle Density in Canadian Cities" />
    <meta name="twitter:description" content="Maps, data, and policy discussion." />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/gentle-density/main/static/web-card-multi-city.png" /> 

</svelte:head>




<Top/>

<body>

	<div class="home">

		<div class="text">

			<h3>Gentle Density</h3>

			<p class="blurb">
				Gentle density is the gradual addition of housing within existing neighbourhoods, through accessory dwelling units, laneway and garden suites, rooming houses, and small multiplexes. This collection of maps, data, and analysis from the School of Cities tracks how it is permitted and built in Toronto and other Canadian cities, and what that means for housing policy.
			</p>

			<ul>
				{#each pages as page}
					<li>
						<a href={"./" + page.name}>
							{page.title}
						</a>
					</li>
				{/each}
			</ul>

		</div>

	</div>

</body>





<style>

	.home {
		width: 100vw;
		height: 100vh;
		margin: 0 auto;
		margin-bottom: 0px;
		background-color: var(--brandDarkBlue);
		background-size: 13px 13px;
		background-image: repeating-linear-gradient(-45deg, #eaf5ff05 0, #eaf5ff13 1.3px, var(--brandDarkBlue) 0, var(--brandDarkBlue) 50%);
	}

	.home h3 {
		padding-top: 80px;
		color: white;
		font-size: 48px;
		text-decoration: none;
	}

	.home p {
		color: white;
		font-size: 18px;
		line-height: 24px;
		padding-top: 10px;
	}

	.home ul {
		color: white;
		list-style: disc;
		padding-left: 24px;
		margin: 0;
	}

	.home li {
		font-size: 18px;
		line-height: 24px;
		padding-top: 15px;
	}

	.home .blurb {
		max-width: 700px;
		margin-bottom: 20px;
	}

	.home a {
		color: white;
	}
	.home a:hover {
		color: var(--brandYellow);
	}


</style>