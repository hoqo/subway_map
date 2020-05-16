<script>
	import Map from './Map/Map.svelte';

</script>

<style>
 header {
	 text-align: center;
 }
</style>

<header>
	<h1>Kyiv Rapid Transit Map</h1>
</header>

<!-- role=main to support IE11 and lower -->
<main role="main">
	<Map />
</main>