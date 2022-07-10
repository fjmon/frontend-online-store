import React from 'react';
import { Link } from 'react-router-dom';

function components({ product, addProductToCart }) {
  const { title, price, thumbnail, id } = product;
  return (
    <div>
      <span>{title}</span>
      <img src={ thumbnail } alt={ title } />
      <span>{price}</span>
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
