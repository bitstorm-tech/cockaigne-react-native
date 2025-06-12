// API Configuration
// In production, these should come from environment variables

export const API_CONFIG = {
  // Default to localhost for development, can be overridden with environment variables
  BASE_URL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
};

export const API_ENDPOINTS = {
  DEALS: {
    LIST: '/deals',
    DETAIL: (id: string) => `/deals/${id}`,
    SEARCH: '/deals/search',
    CATEGORIES: '/deals/categories',
  },
  STORES: {
    LIST: '/stores',
    DETAIL: (id: string) => `/stores/${id}`,
  },
};

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};