import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';
import Search from './pages/Search';
import Categorias from './pages/Catergorias';
import Botao from './Botao';
import ShoppingCart from './ShoppingCart';
import ProdutosPorCategoria from './pages/ProdutosPorCategoria';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchProduct: '',
      categorias: [],
      categoriaSelecionada: '',
      produtosDoCarrinho: [],
    };
  }

  componentDidMount = async () => {
    const categorias = await getCategories();
    this.setState({ categorias });
  }

  handleCategories = (event) => {
    const categoriaSelecionada = event.target.value;
    this.setState({ categoriaSelecionada }, this.getProducts);
  }

  getProducts = async () => {
    const { searchProduct, categoriaSelecionada } = this.state;
    const products = await
    getProductsFromCategoryAndQuery(categoriaSelecionada, searchProduct);
    console.log('chamou');
    this.setState({
      products: products.results,
    });
  }

  handleSearch = (event, searchFor) => {
    event.preventDefault();
    this.setState({ searchProduct: searchFor }, this.getProducts);
  }

  addProductToCart = (event, product) => {
    event.preventDefault();
    this.setState((prevState) => ({
      produtosDoCarrinho: [...prevState.produtosDoCarrinho, product],
    }));
  }

  render() {
    const { products, categorias, produtosDoCarrinho } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Botao />
            <Switch>
              <Route
                exact
                path="/"
                render={ () => (
                  <>
                    <CampoPesquisa />
                    <Search
                      handleSearch={ this.handleSearch }
                      products={ products }
                      addProductToCart={ this.addProductToCart }
                    />
                    <ProdutosPorCategoria
                      products={ products }
                    />
                    <Categorias
                      categorias={ categorias }
                      handleChange={ this.handleCategories }
                    />
                  </>
                ) }
              />
              <Route
                path="/ShoppingCart"
                render={ () => (
                  <ShoppingCart produtosDoCarrinho={ produtosDoCarrinho } />) }
              />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
