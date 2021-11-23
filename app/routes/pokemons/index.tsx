import { Link, LoaderFunction, useLoaderData } from "remix";
import type { MetaFunction } from "remix";

export const loader: LoaderFunction = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json());
};

export const meta: MetaFunction = () => {
  return {
    title: "Pokemons",
    description: "List of Pokemons",
  };
};

export default function Pokemons() {
  const data = useLoaderData();

  return (
    <div>
      <h2>Pokemons</h2>
      <ul>
        {data.results?.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
