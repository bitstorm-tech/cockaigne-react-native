# API Implementation Guide

This document describes the API data fetching implementation for the Cockaigne React Native app.

## Architecture Overview

### Type Definitions (`/types`)
- `deal.ts` - Defines the Deal, DealCategory, and Store interfaces
- `api.ts` - Contains API response types, error types, and query parameters

### API Layer (`/api`)
- `client.ts` - Base HTTP client with retry logic, error handling, and timeout support
- `deals.ts` - Deal-specific API endpoints and mock data for development

### Configuration (`/config`)
- `api.ts` - API configuration including base URL, endpoints, and default headers

### Custom Hooks (`/hooks`)
- `useDeals.ts` - React hook for fetching deals with pagination, refresh, and error handling

## Features Implemented

1. **Type-Safe API Calls**: All API calls are fully typed with TypeScript
2. **Error Handling**: Comprehensive error handling with retry logic
3. **Loading States**: Proper loading indicators for initial load and pagination
4. **Pull to Refresh**: SwipeRefresh functionality for updating deals
5. **Infinite Scroll**: Automatic loading of more deals when scrolling to bottom
6. **Mock Data**: Toggle between real API and mock data for development

## Usage

### Basic Usage
```typescript
import { useDeals } from '@/hooks/useDeals';

function MyComponent() {
  const { deals, loading, error, refresh } = useDeals();
  
  // Use the data in your component
}
```

### Environment Configuration
1. Copy `.env.example` to `.env`
2. Set your API URL:
   ```
   EXPO_PUBLIC_API_URL=https://your-api-url.com/api
   ```

### Toggle Mock Data
In `/hooks/useDeals.ts`, change the `USE_MOCK_DATA` constant:
```typescript
const USE_MOCK_DATA = false; // Set to true for development
```

## API Endpoints Expected

The implementation expects the following API endpoints:

- `GET /api/deals` - List deals with pagination
  - Query params: `page`, `pageSize`, `search`, `category`, `store`, `sortBy`, `sortOrder`
  - Response: `PaginatedResponse<Deal>`

- `GET /api/deals/:id` - Get single deal
  - Response: `ApiResponse<Deal>`

- `GET /api/deals/search` - Search deals
  - Query params: same as list endpoint
  - Response: `PaginatedResponse<Deal>`

- `GET /api/deals/categories` - Get categories
  - Response: `ApiResponse<DealCategory[]>`

## Next Steps

1. **Authentication**: Add authentication headers to API client
2. **Caching**: Implement data caching for offline support
3. **Search Feature**: Add search functionality using the search endpoint
4. **Filter by Category**: Implement category filtering
5. **Deal Details**: Update DealDetailsModal to show full deal information
6. **Image Loading**: Add image loading with placeholder support