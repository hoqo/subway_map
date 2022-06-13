<script lang="ts">
  import type { iSubwayStation } from 'interfaces';
  import { curveCatmullRom, line } from 'd3';
  import type { Line } from 'd3';

  export let nodes;
  export let name;

  const lineGenerator: Line<[number, number]> = line().curve(
    curveCatmullRom.alpha(1)
  );

  // filter through all nodes and get only those that have a name -> hence a station
  // TODO: consider having styling nodes and stations separately
  const getSwStations = (nodes: iSubwayStation[]) =>
    nodes.filter(({ name }) => !!name);
</script>

<template>
  <g fill="none">
    <path
      id={name}
      d={lineGenerator(nodes.map(({ point }) => Object.values(point)))}
      stroke-width="30"></path>

    {#each getSwStations(nodes) as { name, point: { x, y } }}
      <circle id={name} cx={x} cy={y} r="50"></circle>
      <text {x} {y}>{name}</text>
    {/each}
  </g>
</template>

<style lang="less">
  @sw-colors: {
    red: hsl(3 79% 53%);
    green: hsl(140 55% 45%);
    blue: hsl(204 69% 45%);
  };

  //TODO add dynamic color
  @main-color: attr(id);

  path {
    stroke: @main-color;
  }

  circle {
    fill: hsl(3 79% 53%);
  }

  text {
    fill: black;

    font-size: 3rem;
    font-weight: 500;
  }
</style>
