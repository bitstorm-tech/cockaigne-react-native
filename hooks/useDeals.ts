import { dealsApi, mockDeals } from '@/api/deals';
import { ApiError, QueryParams } from '@/types/api';
import { Deal } from '@/types/deal';
import { useCallback, useEffect, useState } from 'react';

interface UseDealsResult {
  deals: Deal[];
  loading: boolean;
  error: ApiError | null;
  hasMore: boolean;
  refreshing: boolean;
  loadMore: () => void;
  refresh: () => void;
  retry: () => void;
}

const USE_MOCK_DATA = true; // Toggle this for development

export function useDeals(initialParams?: QueryParams): UseDealsResult {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [params] = useState<QueryParams>({
    pageSize: 20,
    ...initialParams,
  });

  const fetchDeals = useCallback(
    async (pageNumber: number, isRefresh: boolean = false) => {
      try {
        if (isRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }
        setError(null);

        if (USE_MOCK_DATA) {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          // Simulate pagination with mock data
          const startIndex = (pageNumber - 1) * (params.pageSize || 20);
          const endIndex = startIndex + (params.pageSize || 20);
          const paginatedDeals = mockDeals.slice(startIndex, endIndex);
          // Add deterministic dummy distances (meters) for UI rendering
          const withDistance: Deal[] = paginatedDeals.map((d, idx) => ({
            ...d,
            distanceMeters: 300 + ((startIndex + idx) % 6) * 400, // 300m, 700m, 1.1km, 1.5km, 1.9km, 2.3km
          }));

          if (isRefresh) {
            setDeals(withDistance);
          } else {
            setDeals((prev) => (pageNumber === 1 ? withDistance : [...prev, ...withDistance]));
          }

          setHasMore(endIndex < mockDeals.length);
        } else {
          const response = await dealsApi.getDeals({
            ...params,
            page: pageNumber,
          });

          if (response.success) {
            if (isRefresh) {
              setDeals(response.data);
            } else {
              setDeals((prev) => (pageNumber === 1 ? response.data : [...prev, ...response.data]));
            }
            setHasMore(response.pagination.page < response.pagination.totalPages);
          } else {
            throw new Error(response.error || 'Failed to fetch deals');
          }
        }
      } catch (err: any) {
        const apiError: ApiError = {
          message: err.message || 'An unexpected error occurred',
          code: err.code,
          statusCode: err.statusCode,
          details: err.details,
        };
        setError(apiError);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [params],
  );

  useEffect(() => {
    fetchDeals(1);
  }, []);

  const loadMore = useCallback(() => {
    if (!loading && !refreshing && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchDeals(nextPage);
    }
  }, [loading, refreshing, hasMore, page, fetchDeals]);

  const refresh = useCallback(() => {
    setPage(1);
    fetchDeals(1, true);
  }, [fetchDeals]);

  const retry = useCallback(() => {
    fetchDeals(page);
  }, [page, fetchDeals]);

  return {
    deals,
    loading,
    error,
    hasMore,
    refreshing,
    loadMore,
    refresh,
    retry,
  };
}
