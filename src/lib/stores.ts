import { writable, type Writable } from 'svelte/store';

export const user = writable({})
export let refreshCount = writable(1)
export const invalidate = writable(true);
