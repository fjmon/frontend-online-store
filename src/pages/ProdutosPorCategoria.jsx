import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProdutosPorCategoria extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount = async () => {
    this.getProducts();
  }

  getProducts = async () => {
    // A propriedade categoria deve ser passada pelo requisito 4
    const { categoria } = this.props;
    const products = await getProductsFromCategoryAndQuery(categoria, '');
    this.setState({ products: products.results });
  }

  render() {
    const { products } = this.state;
    return (
      <div data-testid="product">
        {
          products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
    );
  }
}

ProdutosPorCategoria.propTypes = {
  categoria: PropTypes.string,
}.isRequired;

export default ProdutosPorCategoria;
