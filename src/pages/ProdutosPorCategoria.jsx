import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ProdutosPorCategoria extends React.Component {
  render() {
    const { products } = this.props;
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
  categoriaSelecionada: PropTypes.string,
}.isRequired;

export default ProdutosPorCategoria;
