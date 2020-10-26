import type { SvelteComponentDev } from "svelte/internal";

export interface ExtendedWindow extends Window {
  app: SvelteComponentDev,
}