<script>
  import LegendItem from './LegendItem.svelte';
  import {iLegendItem} from 'interfaces';

  const legendItems: iLegendItem[] = [
    {
      value: 'Dnipro River',
      colorCode: '#aae3ff',
    }
  ];
</script>

<style>
    section {
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