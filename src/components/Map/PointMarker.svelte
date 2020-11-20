<script lang="ts">
  import River from 'components/River/River.svelte';
  import { subwayLine } from 'components/Map/mocks';
  import { iSubwayStation } from 'interfaces';
  import { Line, line, curveCatmullRom } from 'd3';

  let stations: iSubwayStation[];

  const lineGenerator: Line = line().curve(curveCatmullRom.alpha(1));

  $: {
    stations = subwayLine.stations.filter(({ name }): Boolean => !!name);
  }
</script>

<section class="map-container">
  <River />

  <svg id="map" width="1200" height="740" viewBox="0 0 3500 3500" fill="none">
    <g fill="none">
      <path
        d={lineGenerator(subwayLine.stations.map(({ point }) =>
          Object.values(point)
        ))}
        stroke={subwayLine.colorCode}
        stroke-width="40" />

      {#each stations as { point: {x, y} }, index}
        {#if index === 0 || index === stations.length - 1}
          <rect
            x={x - 50}
            {y}
            width="100"
            height="30"
            fill={subwayLine.colorCode}
          />
        {:else}
          <rect
            {x}
            {y}
            width="50"
            height="30"
            fill={subwayLine.colorCode}
          />
        {/if}
      {/each}
    </g>
  </svg>
</section>
