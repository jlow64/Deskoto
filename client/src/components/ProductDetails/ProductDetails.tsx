import { details } from 'types/components.types';
import './ProductDetails.css';
/*
Asides from displaying a products detail easily on the UI,
We also need to have a usecase for sold out/unavailable items.
Also offer to remind the user when the item is restocked.
*/

type ProductDetailProps = {
  details?: Array<details>;
};
const ProductDetails = ({ details }: ProductDetailProps) => {
  console.log(details);
  return <div></div>;
};

export default ProductDetails;
