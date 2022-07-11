import React from 'react';
import PropTypes from 'prop-types';

class DetalhesDoProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.carregarInfos();
  }

  carregarInfos = () => {
    const { products, match: { params: { productID } } } = this.props;
    this.setState({
      product: products.find((product) => product.id === productID),
    });
  };

  render() {
    const { product } = this.state;
    const { addProductToCart } = this.props;
    return (
      <div data-testid="product">
        <div>
          <span data-testid="product-detail-name">{ product.title }</span>
          <span>{product.price}</span>
          <img src={ product.thumbnail } alt={ product.title } />
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ (event) => { addProductToCart(event, product); } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <div>Especificações Técnicas</div>
      </div>
    );
  }
}
DetalhesDoProduto.propTypes = {
  addProductToCart: PropTypes.func,
  products: PropTypes.array,
}.isRequired;

export default DetalhesDoProduto;
