import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import PokemonsPage from './PokemonPage';
import PokemonDetail from './PokemonDetail';

export function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/PokemonPage">Pokemon Page</Link>
        </li>
        <li>
          <Link to="/PokemonDetail">Pokemon Detail Page</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <PokemonsPage />
        </Route>
        <Route exact path="/PokemonDetail/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
