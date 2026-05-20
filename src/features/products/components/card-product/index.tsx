"use client";

import { Product } from "@/features/shared/types/products.types";
import AppImage from "@/ui/components/image";

export default function CardProduct({ product }: { product: Product }) {
  return (
    <div className="relative rounded-md bg-gray-100 text-gray-500 h-120 md:h-80 w-full md:w-60">
      <div className="absolute top-0 right-0 bg-red-500 text-gray-50 font-bold p-4 md:p-2 text-xs rounded-bl-md">
        <span>- 20%</span>
      </div>

      <div className="h-1/2 overflow-hidden border-b border-b-gray-300">
        <AppImage
          src={product.image}
          alt={product.title}
          height={100}
          width={100}
          className="object-fit w-full"
        />
      </div>

      <div className="flex flex-col align-baseline p-2 gap-1 justify-between h-1/2">
        <p className="text-sm font-bold">{product.title}</p>
        <p className="text-xs font-light md:h-12 md:overflow-hidden md:text-ellipsis">
          {product.description}
        </p>
        <div className="flex justify-between bg-gray-300 text-gray-700 p-4 md:p-2 text-sm rounded-b-md">
          <p>${product.price.toFixed(2)}</p>
          <p className="line-through text-gray-400">
            ${(product.price * 1.2).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
