import type { PokemonQuestion } from "../../types/pokemon";
import { generateRandomNumbers } from "../utils/randomNumber";

export const fetchPokemonsInfo = async (): Promise<PokemonQuestion[]> => {
  const randomId = generateRandomNumbers(4, 1, 650);

  const correctPokemonId =
    randomId[Math.floor(Math.random() * randomId.length)];

  const fetchPromises = randomId.map(async (i) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonData = await response.json();
    return {
      ...pokemonData,
      isCorrect: i === correctPokemonId,
    } as PokemonQuestion;
  });

  const pokeData = await Promise.all(fetchPromises);

  return pokeData;
};
