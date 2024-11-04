export interface Business {
  id: string;
  name: string;
  description: string;
  category: Category;
  rating: number;
  reviews: number;
  priceRange: string;
  image: string;
  address: string;
  phone: string;
  hours: string;
  features: string[];
  photos: string[];
  menu: MenuCategory[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  price: number;
  description: string;
}

export type Category = 'All' | 'Restaurant' | 'Cafe' | 'Shopping' | 'Entertainment' | 'Services';