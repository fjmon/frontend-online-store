import React from 'react';
import { Link } from 'react-router-dom';

function components({ product, addProductToCart }) {
  const { title, price, thumbnail, id, shipping } = product;
  return (
    <div data-testid="product">
      <span>{title}</span>
      <img src={ thumbnail } alt={ title } />
      <span>{price}</span>
      {shipping.free_shipping && <p data-testid="free-shipping">Frete grátis</p>}
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ (event) => { addProductToCart(event, product); } }
      >
        Adicionar ao Carrinho
      </button>
      <Link
        data-testid="product-detail-link"
        to={ `/DetalhesDoProduto/${id}` }
      >
        Detalhes do produto
      </Link>
    </div>
  );
}

export default components;
