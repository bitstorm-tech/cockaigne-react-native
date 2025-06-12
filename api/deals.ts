import { API_ENDPOINTS } from '@/config/api';
import { Deal, DealCategory } from '@/types/deal';
import { ApiResponse, PaginatedResponse, QueryParams } from '@/types/api';
import { apiClient } from './client';

export const dealsApi = {
  /**
   * Get a paginated list of deals
   */
  async getDeals(params?: QueryParams): Promise<PaginatedResponse<Deal>> {
    return apiClient.get<PaginatedResponse<Deal>>(API_ENDPOINTS.DEALS.LIST, params);
  },

  /**
   * Get a single deal by ID
   */
  async getDealById(id: string): Promise<ApiResponse<Deal>> {
    return apiClient.get<ApiResponse<Deal>>(API_ENDPOINTS.DEALS.DETAIL(id));
  },

  /**
   * Search deals
   */
  async searchDeals(query: string, params?: QueryParams): Promise<PaginatedResponse<Deal>> {
    return apiClient.get<PaginatedResponse<Deal>>(API_ENDPOINTS.DEALS.SEARCH, {
      ...params,
      search: query,
    });
  },

  /**
   * Get deal categories
   */
  async getCategories(): Promise<ApiResponse<DealCategory[]>> {
    return apiClient.get<ApiResponse<DealCategory[]>>(API_ENDPOINTS.DEALS.CATEGORIES);
  },
};

// Mock data for development/testing
export const mockDeals: Deal[] = [
  {
    id: '1',
    title: 'Weber Spirit II E-310 Gas Grill',
    description: 'Premium 3-burner gas grill with GS4 grilling system, porcelain-enameled cast iron cooking grates, and built-in lid thermometer',
    price: 449.99,
    originalPrice: 599.99,
    discount: 25,
    category: 'Garden & Outdoor',
    store: 'Bauhaus',
    imageUrl: 'https://example.com/weber-grill.jpg',
    validFrom: '2024-12-01',
    validUntil: '2024-12-31',
    isActive: true,
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Bosch Professional GSB 18V-55 Drill Set',
    description: 'Cordless combi drill with 2x 2.0Ah batteries, charger, and 50-piece accessory set in L-BOXX',
    price: 179.99,
    originalPrice: 249.99,
    discount: 28,
    category: 'Tools & Machinery',
    store: 'Hornbach',
    imageUrl: 'https://example.com/bosch-drill.jpg',
    validFrom: '2024-12-05',
    validUntil: '2024-12-20',
    isActive: true,
    createdAt: '2024-12-05T00:00:00Z',
    updatedAt: '2024-12-05T00:00:00Z',
  },
  {
    id: '3',
    title: 'Gardena Smart Water Control',
    description: 'WiFi-enabled irrigation computer with app control, weather-based watering adjustment, and frost warning',
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    category: 'Garden & Outdoor',
    store: 'OBI',
    imageUrl: 'https://example.com/gardena-water.jpg',
    validFrom: '2024-12-01',
    validUntil: '2024-12-15',
    isActive: true,
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Kärcher K5 Premium Full Control Plus',
    description: 'High-pressure cleaner with 145 bar, Full Control Plus system, hose reel, and home kit included',
    price: 299.00,
    originalPrice: 449.99,
    discount: 33,
    category: 'Cleaning & Care',
    store: 'Bauhaus',
    imageUrl: 'https://example.com/karcher.jpg',
    validFrom: '2024-12-10',
    validUntil: '2024-12-24',
    isActive: true,
    createdAt: '2024-12-10T00:00:00Z',
    updatedAt: '2024-12-10T00:00:00Z',
  },
  {
    id: '5',
    title: 'Philips Hue White & Color Starter Kit',
    description: '3x E27 smart bulbs with 16 million colors, Hue Bridge included, voice control compatible',
    price: 119.99,
    originalPrice: 189.99,
    discount: 37,
    category: 'Lighting & Electrical',
    store: 'Hornbach',
    imageUrl: 'https://example.com/philips-hue.jpg',
    validFrom: '2024-12-01',
    validUntil: '2024-12-31',
    isActive: true,
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: '6',
    title: 'Makita DUH523Z Cordless Hedge Trimmer',
    description: '18V LXT hedge trimmer with 52cm blade length, 15mm cutting capacity, without battery and charger',
    price: 89.00,
    originalPrice: 139.99,
    discount: 36,
    category: 'Garden & Outdoor',
    store: 'Toom',
    imageUrl: 'https://example.com/makita-hedge.jpg',
    validFrom: '2024-12-08',
    validUntil: '2024-12-22',
    isActive: true,
    createdAt: '2024-12-08T00:00:00Z',
    updatedAt: '2024-12-08T00:00:00Z',
  },
  {
    id: '7',
    title: 'Alpina Premium Interior Paint White 10L',
    description: 'High-coverage matt emulsion paint for walls and ceilings, excellent opacity, low odor, eco-friendly',
    price: 34.99,
    originalPrice: 54.99,
    discount: 36,
    category: 'Paint & Decorating',
    store: 'Hagebau',
    imageUrl: 'https://example.com/alpina-paint.jpg',
    validFrom: '2024-12-03',
    validUntil: '2024-12-17',
    isActive: true,
    createdAt: '2024-12-03T00:00:00Z',
    updatedAt: '2024-12-03T00:00:00Z',
  },
  {
    id: '8',
    title: 'Quick-Step Laminate Flooring Oak Nature 2.03m²',
    description: 'AC4 rated laminate flooring with click system, 8mm thickness, water-resistant, includes underlay',
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    category: 'Flooring',
    store: 'OBI',
    imageUrl: 'https://example.com/quickstep-laminate.jpg',
    validFrom: '2024-12-06',
    validUntil: '2024-12-20',
    isActive: true,
    createdAt: '2024-12-06T00:00:00Z',
    updatedAt: '2024-12-06T00:00:00Z',
  },
  {
    id: '9',
    title: 'Ytong Aerated Concrete Block 62.5x20x10cm',
    description: 'Lightweight aerated concrete blocks, excellent thermal insulation, easy to cut and process, pallet of 96 pieces',
    price: 159.99,
    originalPrice: 239.99,
    discount: 33,
    category: 'Building Materials',
    store: 'Bauhaus',
    imageUrl: 'https://example.com/ytong-blocks.jpg',
    validFrom: '2024-12-02',
    validUntil: '2024-12-16',
    isActive: true,
    createdAt: '2024-12-02T00:00:00Z',
    updatedAt: '2024-12-02T00:00:00Z',
  },
  {
    id: '10',
    title: 'Keter Store It Out Max Storage Box',
    description: 'Weather-resistant outdoor storage box 1200L capacity, lockable lid, ventilated design, holds 2 wheelie bins',
    price: 149.00,
    originalPrice: 249.99,
    discount: 40,
    category: 'Storage & Organization',
    store: 'Hornbach',
    imageUrl: 'https://example.com/keter-storage.jpg',
    validFrom: '2024-12-04',
    validUntil: '2024-12-18',
    isActive: true,
    createdAt: '2024-12-04T00:00:00Z',
    updatedAt: '2024-12-04T00:00:00Z',
  },
];