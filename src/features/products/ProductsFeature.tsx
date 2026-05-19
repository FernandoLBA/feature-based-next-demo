 'use client';

import { products } from './model';

export function ProductsFeature() {
  return (
    <div>
      <h1>Products</h1>
      <p>
        Welcome to our products page! Here you can find a variety of items that we offer.
        Browse through our selection and find the perfect product for you.
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
