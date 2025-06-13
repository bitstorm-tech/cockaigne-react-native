export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  store: string;
  imageUrl?: string;
  validFrom?: string;
  validUntil?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DealCategory {
  id: string;
  name: string;
  icon?: string;
  color?: string;
}

export interface Store {
  id: string;
  name: string;
  logoUrl?: string;
  website?: string;
}
