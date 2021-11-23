import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  const { pokemonName } = params;

  const details = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  ).then((res) => res.json());

  return {
    name: pokemonName,
    weight: details.weight,
    img: details.sprites.front_default,
    id: details.id,
  };
};

export default function Pokemon() {
  const pokemon = useLoaderData();

  return (
    <div>
      <h1>
        {pokemon.name} #{pokemon.id}
      </h1>
      <img src={pokemon.img} alt={pokemon.name} />
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}
