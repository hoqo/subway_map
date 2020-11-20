<script>
  import LegendItem from './LegendItem.svelte';
  import { iLegendItem } from 'interfaces';
  import { dniproRiver, subwayLines } from 'components/Map/mocks';

  const legendItems: iLegendItem[] = [
    dniproRiver,
    ...subwayLines.map(({name, colorCode}) => ({name, colorCode}))
  ];
</script>

<style>
  section {
    display: flex;
    justify-content: space-between;
    margin: 24px;
  }
</style>

<section>
  {#each legendItems as item}
    <LegendItem {item} />
  {/each}
</section>
