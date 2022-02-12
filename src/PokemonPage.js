import { useEffect, useState } from 'react';
import { getPokemons } from './services/fetch-utils';
import PokemonList from './PokemonList';


function App() {
  const [pokemons, setpokemons] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetch() {
      const start = page * perPage - perPage;
      const end = page * perPage;
     
      const data = await getPokemons(start, end);
    
      setpokemons(data);
    }
    fetch();
  }, [page]);

  return (
    <><header className='page-header'>
      <h2>Current Page {page}</h2>
    </header><><div className='list-page'>
      <div className='buttons'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1} >Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      
      </div>
      <PokemonList pokemons={pokemons} />
    </div>
    </></>
  );


}
export default App;
