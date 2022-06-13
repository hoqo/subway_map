import type { tBend, tPoint } from 'types';

export interface iMapItem {
  name: string;
}

export interface iSubwayStation {
  name?: string;
  // data needed to build a svg / graph
  // TODO: consider having points as an array
  point: tPoint;
  bend?: tBend;
  adjacentStation?: iSubwayStation;
}

export interface iSubwayLine extends iMapItem {
  nodes: iSubwayStation[];
}

// http://www.evolutionoftheweb.com/ - all is rendered with svgs, not in a canvas
