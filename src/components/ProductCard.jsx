import React from 'react';

function components({ product }) {
  const { title, price, thumbnail } = product;
  return (
    <div data-testid="product">
      <span>{title}</span>
      <img src={ thumbnail } alt={ title } />
      <span>{price}</span>
    </div>
  );
}

export default components;
