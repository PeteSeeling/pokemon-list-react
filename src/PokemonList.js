import Pokemon from './Pokemon';
import { getPokemons } from './services/fetch-utils';
import { useState, useEffect } from 'react';

export default function PokemonList() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons(){
      const response = await getPokemons();
      setPokemons(response);
    }
    fetchPokemons();
  }, []);

  return (
    <div className='pokemons'>
      {pokemons.map((pokemon, i) => <Pokemon key={`${pokemon.pokemonname}-${i}`} pokemon={pokemon} />)}
    </div>
  );}
