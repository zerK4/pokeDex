export default function Pokemon({ pokemons, loadMore, preparePoke }) {
  return (
    <div className="w-full overflow-x-hidden">
      {pokemons.map((pokemon) => (
        <div
          onClick={(e) => {
            preparePoke(pokemon);
          }}
          className="flex items-center gap-10 hover:bg-neutral-700 ease-in-out duration-200 cursor-pointer w-[50rem] px-10"
          key={Math.random() * 100000000000000}
        >
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
      <button
        onClick={loadMore}
        className="h-10 w-full bg-neutral-700 hover:bg-neutral-400 ease-in-out duration-200 cursor-pointer"
      >
        Load More
      </button>
    </div>
  );
}
