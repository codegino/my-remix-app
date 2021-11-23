import { Link, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon");
};

export function meta() {
  return {
    title: "Pokemons",
    description: "List of Pokemons",
  };
}

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
