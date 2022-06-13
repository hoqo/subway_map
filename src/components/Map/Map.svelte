<script lang="ts">
  import River from 'components/River/River.svelte';
  import { subwayLines } from 'components/Map/mocks';
  import type { iSubwayStation } from 'interfaces';
  import { curveCatmullRom, line } from 'd3';
  import type { Line } from 'd3';

  const lineGenerator: Line<[number, number]> = line()
    .curve(curveCatmullRom.alpha(1));

  // filter through all nodes and get only those that have a name -> hence a station
  // TODO: consider having styling nodes and stations separately
  const getSwStations = (nodes: iSubwayStation[]) =>
    nodes.filter(({ name }) => !!name);
</script>

<template>
  <River />

  <svg id="map" height="747" width="100%" viewBox="0 0 3500 3500" fill="none">
    {#each subwayLines as { nodes, colorCode }}
      <g fill="none">
        <path
          d={lineGenerator(nodes.map(({ point }) => Object.values(point)))}
          stroke={colorCode}
          stroke-width="40"
        />

        {#each getSwStations(nodes) as { point: { x, y } }, index}
          {#if index === 0 || index === getSwStations(nodes).length - 1}
            <!--TODO: get two points of the line stroke and compute the end position-->
            <rect x={x - 50} {y} width="100" height="30" fill={colorCode} />
          {:else}
            <rect {x} {y} width="50" height="30" fill={colorCode} />
          {/if}
        {/each}
      </g>
    {/each}
  </svg>

  <!--  <canvas id="map-canvas" height="747" width="1020">Canvas not supported</canvas>-->
</template>

<style>
    #map {
        z-index: 1;
    }
</style>
