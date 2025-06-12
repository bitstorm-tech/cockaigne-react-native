export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
  success: boolean;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
  details?: unknown;
}

export interface QueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  store?: string;
  sortBy?: 'createdAt' | 'discount' | 'price';
  sortOrder?: 'asc' | 'desc';
}