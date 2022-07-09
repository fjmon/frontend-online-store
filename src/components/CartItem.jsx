import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
      price: '',
    };
  }

  componentDidMount = () => {
    const { product: { price } } = this.props;
    this.setState({ price });
  }

  aumentarQuantidade = () => {
    const { product: { price } } = this.props;
    this.setState((prevState) => ({
      quantidade: prevState.quantidade + 1,
      price: prevState.price + price,
    }));
  }

  diminuirQuantidade = () => {
    const { product: { price } } = this.props;
    this.setState((prevState) => {
      if (prevState.quantidade > 1) {
        return {
          quantidade: prevState.quantidade - 1,
          price: prevState.price - price,
        };
      }
    });
  }

  render() {
    const { quantidade, price } = this.state;
    const { product } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{product.title}</p>
        <p>{price}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.diminuirQuantidade }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{quantidade}</span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.aumentarQuantidade }
        >
          +
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default CartItem;
