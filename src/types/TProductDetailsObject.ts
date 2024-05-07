export type TSize = {
  size: string;
  available: boolean;
};

export type TProductDetailsObject = {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  price: number;
  oldPrice: number;
  sizes: TSize[];
};
