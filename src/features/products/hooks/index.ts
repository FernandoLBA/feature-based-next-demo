'use client';

import { useQuery } from "@tanstack/react-query";

import { productService } from "../services/product.service";

export const useProducts = () => {
  const queryKey = ["products"];

  return useQuery({
    queryKey,
    queryFn: productService.getAllProducts,
  });
};
