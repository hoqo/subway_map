<script>
	import Map from './components/Map/Map.svelte';
	import Legend from './components/Legend/Legend.svelte';
</script>

<style>
 header {
	 text-align: center;
 }
</style>

<template>
	<header>
		<h1>Kyiv Rapid Transit Map</h1>
	</header>

	<!-- role=main to support IE11 and lower -->
	<main role="main">
		<Map />
		<Legend />
	</main>
</template>