import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchAndPlacePokemon(){
      const response = await getSinglePokemon(id);
          
      setPokemon(response);
    }
    fetchAndPlacePokemon();
  }, [id]);

  return (

    <><>
      <button><NavLink to='/'>Home Page</NavLink></button></><div className='pokemon-detail'>
      <div className='pokemon-data'>
        <p>{pokemon.pokemonname}</p>
        <img className='pokemon-image' src={pokemon.url_image} />
        <p>{pokemon.height} Inches Tall</p>
        <p>Weighs {pokemon.weight} Pounds</p>
        <p>{pokemon.type_1} Type</p>
        <p>{pokemon.type_2} Type 2</p>
        <p>{pokemon.attack} Attack Points</p>
        <p>{pokemon.defense} Defense Points</p>
        <p>{pokemon.hp} HP</p>
        <p>{pokemon.ability} Ability</p>
        <p>{pokemon.egg_gounp_1} Egg Group</p>
      </div>
    </div></>
  );}