export type ProductType = {
  id: string | number;
  title: string;
  description: string;
  price: number | string;
  image: string;
  category: string;
  isSaved?: boolean;
  inCart?: boolean;
  quantity?: number | string;
};
