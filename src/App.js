import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';
import Search from './pages/Search';
import Categorias from './pages/Catergorias';
import Botao from './Botao';
import ShoppingCart from './ShoppingCart';

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
            <Switch>
              <Route path="/" component={ CampoPesquisa } />
              <Route exact path="/ShoppingCart">
                <ShoppingCart />
              </Route>
            </Switch>
          </BrowserRouter>
        </header>
        <Search />
        <Categorias salvaCategoria={ this.salvaCategoria } />
      </div>
    );
  }
}

export default App;
