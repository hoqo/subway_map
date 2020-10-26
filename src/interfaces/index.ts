import type { SvelteComponent } from "svelte/internal";

export interface ExtendedWindow extends Window {
  app: SvelteComponent,
}

export interface iLegendItem {
  value: string,
  colorCode: string,
}