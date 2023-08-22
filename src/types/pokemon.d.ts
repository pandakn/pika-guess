export interface Pokemon {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PokemonQuestion extends Pokemon {
  isCorrect: boolean;
}
