<script>
	import logo from '../assets/top-logo.svg';
</script>

<div id="bar">

	<div id="logo">
		<a href="https://www.schoolofcities.utoronto.ca/"><img src={logo} alt="School of Cities"></a>
	</div>

</div>

<style>
	#bar {
		position: fixed;
		overflow: hidden;
   		top: 0px;
		height: 50px;
		background-color: var(--brandDarkBlue);
		margin-bottom: 20px;
		border-bottom: 1px solid var(--brandLightBlue);
		width: 100%;
		min-width: 200px;
		padding-left: 0px;
		padding-right: 0px;
		/* text-align: center; */
		z-index: 5;
		opacity: 0.92;
		/* box-shadow: 0 2px 0 0 var(--brandLightBlue); */
	}

	#logo {
		margin: auto;
		max-width: 142px;
		/* background-color: aquamarine; */
	}

	a {
		color: black;
	}
	a:hover {
		opacity: 0.7;
	}

	img {
		color: blue;
	}
	img:hover {
		opacity: 0.5;
		cursor: pointer;
	}
</style>
