import App from './App.svelte';
import type { ExtendedWindow } from 'interfaces';

const app = new App({
	target: document.body
});

(window as ExtendedWindow & typeof globalThis).app = app;

export {app};