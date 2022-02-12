import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  

  return (
    <div className='pokemons'>
      {pokemons.map((pokemon, i) => <Pokemon key={`${pokemon.pokemonname}-${i}`} pokemon={pokemon} />)}
    </div>
  );}
