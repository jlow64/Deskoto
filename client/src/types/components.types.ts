export type Categories = 'desk' | 'accessory';
export type Tags = 'cool' | 'cute' | 'cat' | 'dog' | 'animal';
export type DetailType = 'size' | 'color';
export type Details = {
  type: DetailType;
  options: Array<string>;
};

export interface Product {
  productId: number;
  stars: number;
  reviews: number;
  price: number;
  name: string;
  description: string;
  details: Array<Details>;
  category: Array<Categories>;
  tags: Array<Tags>;
}
