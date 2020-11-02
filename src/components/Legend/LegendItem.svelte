<script>
  import { iLegendItem } from 'interfaces';

  export let item: iLegendItem;
</script>

<style>
  .container {
    display: flex;
  }

  .color-block {
    background-color: var(--color);
    height: 24px;
    width: 24px;
    border-radius: 4px;
    margin-right: 16px;
  }

  .name {
  }
</style>

<template>
  <div class="container">
    <div class="color-block" style="--color: {item.colorCode}"></div>
    <span class="name"><strong>{item.name}</strong></span>
  </div>
</template>
