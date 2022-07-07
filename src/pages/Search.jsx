import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '',
      products: [],
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ searchProduct: value });
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { searchProduct } = this.state;
    const data = await getProductsFromCategoryAndQuery('', searchProduct);
    const { results } = data;
    this.setState({ products: results });
  }

  render() {
    const { searchProduct, products } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ searchProduct }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Search
          </button>
        </form>
        <section>
          {
            products.length < 1 ? <p>Nenhum produto foi encontrado</p> : (
              products.map((product) => (
                <ProductCard key={ product.id } product={ product } />
              )))
          }
        </section>
      </div>
    );
  }
}

export default Search;
