import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchProduct: '',
    };
  }

  updateSearch = ({ target }) => {
    const { value } = target;
    this.setState({ searchProduct: value });
  }

  render() {
    const { handleSearch, products, addProductToCart } = this.props;
    const { searchProduct } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.updateSearch }
            value={ searchProduct }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ (event) => { handleSearch(event, searchProduct); } }
          >
            Search
          </button>
        </form>
        <section data-testid="product">
          {
            products.length < 1 ? <p>Nenhum produto foi encontrado</p> : (
              products.map((product) => (
                <ProductCard
                  key={ product.id }
                  product={ product }
                  addProductToCart={ addProductToCart }
                />
              )))
          }
        </section>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func,
}.isRequired;

export default Search;
