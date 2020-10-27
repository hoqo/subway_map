import type { SvelteComponent } from "svelte/internal";

export interface ExtendedWindow extends Window {
  app: SvelteComponent,
}

export interface iLegendItem {
  name: string,
  colorCode: string,
}

type tBend = 'left' | 'right';

type tPoint = {
  x: number,
  y: number,
}

export interface iSubwayStation {
  name: string,
  // data needed to build an svg / graph
  point: tPoint,
  bend: tBend,
  adjacentStation?: iSubwayStation,
}

export interface iSubwayLine {
  name: string,
  colorCode: string,
  stations: iSubwayStation[],
}
