import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }){
  return (
    <div>
      <Link to={`PokemonDetail/${pokemon.id}`}>
        <div className='pokemon-detail-card'>
          <p>{pokemon.pokemonname}</p>
          <img src={pokemon.url_image} />
        </div>
      </Link>
    </div>
  );
}