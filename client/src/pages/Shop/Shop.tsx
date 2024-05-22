import Product from 'components/Product';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-container">
      {/* <div className="featured-container">Featured Items</div>
      <div className="collection-container">Collection 1</div>
      <div className="collection-container">Collection 2</div> */}
      <Product />
    </div>
  );
};

export default Shop;
