import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchAndPlacePokemon(){
      const data = await getSinglePokemon(params.id);
          
      setPokemon(data);
    }
    fetchAndPlacePokemon();
  }, [params.id]);

  return (
    <><Link to='/'>Home Page</Link>
      <div className='pokemon-detail'>
        <div className='pokemon-data'>
          <p>{pokemon.pokemon}</p>
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
              
              
        </div></div></>
  );

}