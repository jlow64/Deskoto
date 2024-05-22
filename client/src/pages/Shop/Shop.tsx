import Product from 'components/Product';
import { ShopContainer } from './style';

const Shop = () => {
  return (
    <ShopContainer>
      {/* <div className="featured-container">Featured Items</div>
      <div className="collection-container">Collection 1</div>
      <div className="collection-container">Collection 2</div> */}
      <Product />
    </ShopContainer>
  );
};

export default Shop;
