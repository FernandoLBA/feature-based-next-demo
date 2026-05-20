import { ApiPaginatedResponse, ApiResponse } from "@/features/shared";
import { Product } from "@/features/shared/types/products.types";
import { apiClient } from "@/lib";

const API_URL =
  process.env.NEXT_PUBLIC_FAKE_API_URL || "https://fakestoreapi.com";

export const productService = {
  getAllProducts: async (): Promise<ApiPaginatedResponse<Product[]>> => {
    return await apiClient.getAll<Product[]>(`${API_URL}/products`);
  },
  getOneProduct: async (id: string): Promise<ApiResponse<Product>> => {
    return await apiClient.getOne<Product>(`${API_URL}/products`, id);
  },
};
