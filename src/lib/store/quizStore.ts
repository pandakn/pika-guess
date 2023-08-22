import { writable } from "svelte/store";
import type { PokemonQuestion } from "../../types/pokemon";

// Define the interface for the selectedPoke
interface SelectedPoke extends Pick<PokemonQuestion, "name" | "isCorrect"> {}

// Define the initial state
const initial = {
  score: 0,
  selectedPoke: null as SelectedPoke | null, // Initialize as null or an initial value
  showConfetti: false,
};

// Create the writable store
export const quizStore = writable(initial);
