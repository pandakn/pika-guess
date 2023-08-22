import { writable } from "svelte/store";

// Create the writable store
export const countdownStore = writable(10); // default 10 sec.
