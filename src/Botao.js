import React from 'react';
import { Link } from 'react-router-dom';

class Botao extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          carrinho
        </Link>
      </div>
    );
  }
}

export default Botao;
