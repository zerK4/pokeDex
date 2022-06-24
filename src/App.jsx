import { useState, useEffect } from "react";
import Chart from "./Chart";
import Pokemon from "./Pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeView, setPokeView] = useState([]);
  const [loadPokemons, setLoadPokemons] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const loadMore = () => {
    getAllPokemons();
  };

  const preparePoke = (item) => {
    setPokeView(item);
  };

  const getAllPokemons = async () => {
    const response = await fetch(loadPokemons);
    const data = await response.json();
    setLoadPokemons(data.next);
    const createPokemon = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((currentList) => [...currentList, data]);
      });
    };
    createPokemon(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App bg-neutral-900 min-h-screen flex justify-center items-center text-white px-10">
      <div className="flex flex-wrap gap-10 h-[50rem] w-[70rem]">
        <div className="left lg:w-[20rem] max-h-[50rem] overflow-auto flex justify-center shadow-md shadow-white">
          <Pokemon
            pokemons={pokemons}
            loadMore={loadMore}
            preparePoke={preparePoke}
          />
        </div>
        <div className="right lg:w-[40rem] min-h-[10rem] w-auto overflow-hidden h-[50rem] flex justify-center shadow-md shadow-white">
          <Chart pokeView={pokeView} />
        </div>
      </div>
    </div>
  );
}

export default App;
