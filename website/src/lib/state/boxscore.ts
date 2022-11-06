import type { BoxScoreData } from "$lib/types";
import { writable } from "svelte/store";

export const boxscore = writable<BoxScoreData>()
