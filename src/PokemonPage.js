import { useEffect, useState } from 'react';
import { getPokemons } from './services/fetch-utils';


function App() {
  const [pokemons, setpokemons] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokemons = await getPokemons(from, to);

      setpokemons(pokemons);

    }
    fetch();
  }, [page]);

  return (
    <><h2>Current Page {page}</h2><div className='buttons'>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
    <PokemonList pokemons={pokemons} /></>
  );


}
export default App;
