import { useEffect, useState } from 'react';
import type { Product } from 'src/types/components.types';
import BreadCrumbs from 'components/BreadCrumbs';
import ReviewBar from 'components/ReviewBar';
import ProductDetails from 'components/ProductDetails';
import {
  ProductContainer,
  ImageContainer,
  InfoContainer,
  DescriptionBox,
} from './style';

/* This component will show a products information, image gallery, description
and other details. Needs to take receive a prop to show this information,
perhaps a unique key connected to api endpoint to show relevant info.
Needs to also include a breadcrumb element, to show the product tree.
*/
const mockProductData: Product = {
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
  const [productState, setProductState] = useState<Product>();

  useEffect(() => {
    // Connect to API to consume and show a product info
    // Inital object will container prodId,
    setProductState(mockProductData);
  }, [productId]);
  return (
    <ProductContainer>
      <BreadCrumbs />
      <ImageContainer>WIP Image Gallery</ImageContainer>
      <InfoContainer>
        <h1>{productState?.name}</h1>
        <ReviewBar
          stars={productState?.stars}
          reviews={productState?.reviews}
        />
        <DescriptionBox>{productState?.description}</DescriptionBox>
        <ProductDetails details={productState?.details} />
      </InfoContainer>
    </ProductContainer>
  );
};

export default Product;
