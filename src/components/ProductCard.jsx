import React from 'react';

function components({ product, addProductToCart }) {
  const { title, price, thumbnail } = product;
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
    </div>
  );
}

export default components;
