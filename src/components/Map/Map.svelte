<script lang="ts">
  import River from 'components/River/River.svelte';
  import { subwayLines } from 'components/Map/mocks';
  import { iSubwayStation } from 'interfaces';
  import { Line, line, curveCatmullRom } from 'd3';

  const lineGenerator: Line = line().curve(curveCatmullRom.alpha(1));

  // filter through all nodes and get only those that have a name -> hence a station
  // TODO: consider having styling nodes and stations separately
  const getSWStations = (nodes: iSubwayStation[]) =>
    nodes.filter(({ name }): Boolean => !!name);
</script>

<style>
  #map {
    z-index: 1;
  }

  .map-container {
    position: relative;
  }
</style>

<section class="map-container">
  <River />

  <svg id="map" width="1200" height="740" viewBox="0 0 3500 3500" fill="none">
    {#each subwayLines as { nodes, colorCode }}
      <g fill="none">
        <path
          d={lineGenerator(nodes.map(({ point }) => Object.values(point)))}
          stroke={colorCode}
          stroke-width="40" />

        {#each getSWStations(nodes) as { point: { x, y } }, index}
          {#if index === 0 || index === getSWStations(nodes).length - 1}
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
</section>
