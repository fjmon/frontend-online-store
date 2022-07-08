import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';
import Botao from './Botao';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Botao />
      <Switch>
        <Route exact path="/" component={ CampoPesquisa } />
        <Route exact path="/ShoppingCart">
          <ShoppingCart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
