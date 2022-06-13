<script lang="ts">
  import River from 'components/River/River.svelte';
  import SwLine from './SwLine/SwLine.svelte';
  import { subwayLines } from 'mocks/mocks';
</script>

<template>
  <River />
  
  <svg id="map" height="747" width="100%" viewBox="0 0 3500 3500" fill="none">
    {#each subwayLines as { nodes, name }}
      <SwLine {name} {nodes} />
    {/each}
  </svg>
</template>

<style lang="less">
  @sw-colors: {
    red: hsl(3 79% 53%);
    green: hsl(140 55% 45%);
    blue: hsl(204 69% 45%);
  };
  
  #map {
    z-index: 1;
  }
</style>
