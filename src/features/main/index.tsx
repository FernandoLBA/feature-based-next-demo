"use client";

import ProductsFeature from "../products/Products";

export default function MainFeature() {
  return (
    <div className="flex h-fit items-center justify-center">
      <h1 className="text-2xl font-bold">
        <ProductsFeature />
      </h1>
    </div>
  );
}
