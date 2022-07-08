import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Botao from './Botao';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Botao />
      <Switch>
        {/* <Route path="/" component={ CampoPesquisa } /> */}
        <Route exact path="/ShoppingCart">
          <ShoppingCart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
