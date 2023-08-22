import { writable } from "svelte/store";
import { fetchPokemonsInfo } from "../services/pokemon";

// Create a loading state
const loadingState = {
  isLoading: true,
  data: [],
};

// Create the writable store with the loading state
export const pokemonStore = writable(loadingState);

// Fetch data and update the store
(async () => {
  try {
    const initialPokemonData = await fetchPokemonsInfo();
    pokemonStore.set({
      isLoading: false,
      data: initialPokemonData,
    });
  } catch (error) {
    // Handle error
    console.error("Error fetching initial data:", error);
    pokemonStore.set({
      isLoading: false,
      data: [],
    });
  }
})();
