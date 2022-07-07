import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';
import Search from './pages/Search';
import ProdutosPorCategoria from './pages/ProdutosPorCategoria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ CampoPesquisa } />
          </Switch>
        </BrowserRouter>
      </header>
      <Search />
      <ProdutosPorCategoria />
    </div>
  );
}

export default App;
