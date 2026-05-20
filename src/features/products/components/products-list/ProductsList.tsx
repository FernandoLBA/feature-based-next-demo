'use client';

import { useMemo } from "react";

import { useProducts } from "../../hooks";
import CardProduct from "../card-product";

export default function ProductsList() {
  const { data, isLoading, error } = useProducts();

  const products = useMemo(() => {
    if (data && Array.isArray(data)) {
      return data;
    }
    return [];
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      <h1>Products List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products.length > 0 && (
        <ul className="flex justify-center md:justify-between flex-wrap gap-4">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
