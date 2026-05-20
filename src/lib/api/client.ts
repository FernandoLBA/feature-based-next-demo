import { ApiPaginatedResponse, ApiResponse } from "@/features/shared/types";

export const apiClient = {
  getAll: async <T>(path: string): Promise<ApiPaginatedResponse<T>> => {
    const response = await fetch(path);
    return response.json();
  },
  getOne: async <T>(path: string, id: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${path}/${id}`);
    return response.json();
  },
  create: async <T>(path: string, data: T): Promise<ApiResponse<T>> => {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async <T>(
    path: string,
    id: string,
    data: T,
  ): Promise<ApiResponse<T>> => {
    const response = await fetch(`${path}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response.json();
  },
  delete: async (path: string, id: string): Promise<ApiResponse<null>> => {
    const response = await fetch(`${path}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};
