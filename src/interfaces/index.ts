import type { SvelteComponent } from 'svelte/internal';
import type { tBend, tPoint } from 'types';

export interface ExtendedWindow extends Window {
  app: SvelteComponent,
}

export interface iLegendItem {
  name: string,
  colorCode: string,
}

export interface iSubwayStation {
  name?: string,
  // data needed to build a svg / graph
  // TODO: consider having points as an array
  point: tPoint,
  bend?: tBend,
  adjacentStation?: iSubwayStation,
}

export interface iSubwayLine {
  name: string,
  colorCode: string,
  nodes: iSubwayStation[],
}

// http://www.evolutionoftheweb.com/ - all is rendered with svgs, not in a canvas
