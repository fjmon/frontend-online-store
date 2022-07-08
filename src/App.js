import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';
import Search from './pages/Search';
import Categorias from './pages/Catergorias';
import Botao from './Botao';
import ShoppingCart from './ShoppingCart';
import ProdutosPorCategoria from './pages/ProdutosPorCategoria';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriaSelecionada: '',
    };
  }

  // A chave categoriaSelecionada do estado será utilizada no requisito 6
  salvaCategoria = (categorias) => {
    this.setState({ categoriaSelecionada: categorias });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Botao />
            <Switch>
              <Route exact path="/" component={ CampoPesquisa } />
              <Route path="/ShoppingCart" component={ ShoppingCart } />
            </Switch>
          </BrowserRouter>
        </header>
        <Search />
        <ProdutosPorCategoria />
        <Categorias salvaCategoria={ this.salvaCategoria } />
      </div>
    );
  }
}

export default App;
