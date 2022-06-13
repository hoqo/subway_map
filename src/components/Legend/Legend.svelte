<script lang="ts">
  import LegendItem from './LegendItem.svelte';
  import type { iMapItem } from 'interfaces';
  import { dniproRiver, subwayLines } from 'components/Map/mocks';

  const legendItems: iMapItem[] = [
    dniproRiver,
    ...subwayLines.map(({ name, colorCode }) => ({ name, colorCode })),
  ];
</script>

<style lang="less">
  ul {
    list-style-type: none;

    &:before {
      content: attr(aria-label);
      margin-bottom: 24px;
      font-size: 1.5em;
    }
  }
</style>

<ul aria-label="Legend">
  {#each legendItems as item}
    <LegendItem {item} />
  {/each}
</ul>
