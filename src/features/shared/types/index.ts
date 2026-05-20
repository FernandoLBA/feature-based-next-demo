export type status = "success" | "error";

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  status: status;
  message?: string;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
};

export type ApiPaginatedResponse<T> = ApiResponse<T> & {
  pagination?: Pagination;
};
