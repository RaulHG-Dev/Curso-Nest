export const pokemonIds = [1, 2, 3, 4, 5, 6];

interface Pokemon {
  id: number;
  name: string;
  age?: number; // el signo de interrogación indica que es opcional
}

export const bulbasaur:Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const charmander:Pokemon = {
  id: 4,
  name: "Charmander",
  age: 1
};

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, charmander);