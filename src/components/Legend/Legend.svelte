<script>
  import LegendItem from './LegendItem.svelte';
  import {iLegendItem} from 'interfaces';

  const legendItems: iLegendItem[] = [
    {
      name: 'Dnipro River',
      colorCode: '#aae3ff',
    },
    {
      name: 'Red metro line',
      colorCode: 'red',
    },
    {
      name: 'Green metro line',
      colorCode: 'green',
    },
    {
      name: 'Blue metro line',
      colorCode: 'blue',
    },
  ];
</script>

<style>
    section {
        display: flex;
        justify-content: space-between;
        margin: 24px;
    }
</style>

<template>
    <section>
        {#each legendItems as item}
            <LegendItem item={item} />
        {/each}
    </section>
</template>