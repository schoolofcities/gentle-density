<script>

import "../assets/styles.css";
import Top from "$lib/TopSofC.svelte";
import pages from "$lib/pages.json";


console.log(pages);


</script>


<Top/>

<body>

	<div class="home">

		<div class="text">

			<h3>Gentle Density</h3>

			{#each pages as page}

				<p>
					<a href={"./" + page.name}>
						{page.title}
					</a>
				</p>

			{/each}

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

	.home a {
		color: white;
	}
	.home a:hover {
		color: var(--brandYellow);
	}


</style>