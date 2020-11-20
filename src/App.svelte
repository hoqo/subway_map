<script>
  import Map from 'components/Map/Map.svelte';
  import Legend from 'components/Legend/Legend.svelte';
</script>

<style>
  :global(body) {
      padding: 0;
  }

  header {
    text-align: center;
  }
</style>

<template>
  <header>
    <h1>Kyiv Rapid Transit Map</h1>
  </header>

  <main>
    <Map />
    <Legend />
  </main>
</template>
