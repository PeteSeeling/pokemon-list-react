import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <div className='pokemons'>
      {pokemons.map((Pokemon, i) => <Pokemon key={`${Pokemon.pokemon}-${i}`} pokemon={Pokemon} />)}
    </div>
  );
}