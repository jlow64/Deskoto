import { useEffect, useState } from 'react';
import type { product } from 'src/types/components.types';
import BreadCrumbs from 'components/BreadCrumbs';
import ReviewBar from 'components/ReviewBar';
import ProductDetails from 'components/ProductDetails';
import './Product.css';

/* This component will show a products information, image gallery, description
and other details. Needs to take receive a prop to show this information,
perhaps a unique key connected to api endpoint to show relevant info.
Needs to also include a breadcrumb element, to show the product tree.
*/
const mockProductData: product = {
  productId: 0,
  stars: 4.5,
  reviews: 10,
  price: 50,
  name: 'Test',
  description: 'Much needed testing to be done here...',
  details: [
    {
      type: 'color',
      options: ['red', 'blue', 'green'],
    },
  ],
  category: ['accessory'],
  tags: ['cool', 'cute', 'cat'],
};

const Product = ({ productId = 0 }) => {
  const [productState, setProductState] = useState<product>();

  useEffect(() => {
    // Connect to API to consume and show a product info
    // Inital object will container prodId,
    setProductState(mockProductData);
  }, [productId]);
  return (
    <section className="product-container">
      <BreadCrumbs />
      <div className="image-container">WIP Image Gallery</div>
      <div className="info-container">
        <h1>{productState?.name}</h1>
        <ReviewBar
          stars={productState?.stars}
          reviews={productState?.reviews}
        />
        <p className="description-box">{productState?.description}</p>
        <ProductDetails details={productState?.details} />
      </div>
    </section>
  );
};

export default Product;
