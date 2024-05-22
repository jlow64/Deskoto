import { Details } from 'types/components.types';
import { ProductDetailsContainer } from './style';
/*
Asides from displaying a products detail easily on the UI,
We also need to have a usecase for sold out/unavailable items.
Also offer to remind the user when the item is restocked.
*/

type ProductDetailProps = {
  details?: Array<Details>;
};
const ProductDetails = ({ details }: ProductDetailProps) => {
  console.log(details);
  return <ProductDetailsContainer></ProductDetailsContainer>;
};

export default ProductDetails;
