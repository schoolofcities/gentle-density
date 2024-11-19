<script>

	import "../assets/styles.css";

	import pages from "./pages.json";

	export let currentPage;

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