export type categories = 'desk' | 'accessory';
export type tags = 'cool' | 'cute' | 'cat' | 'dog' | 'animal';
export type detailType = 'size' | 'color';
export type details = {
  type: detailType;
  options: Array<string>;
};

export interface product {
  productId: number;
  stars: number;
  reviews: number;
  price: number;
  name: string;
  description: string;
  details: Array<details>;
  category: Array<categories>;
  tags: Array<tags>;
}
