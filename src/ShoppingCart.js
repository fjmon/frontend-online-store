import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './components/CartItem';

class ShoppingCart extends React.Component {
  render() {
    const { produtosDoCarrinho } = this.props;
    return (
      <div>
        { produtosDoCarrinho.length > 0 ? produtosDoCarrinho.map((product, index) => (
          <CartItem product={ product } key={ index } />
        ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  produtosDoCarrinho: PropTypes.array,
}.isRequired;

export default ShoppingCart;
