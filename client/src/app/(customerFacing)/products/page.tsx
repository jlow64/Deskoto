import { getProducts } from '@/actions';
import { ProductDisplay } from '../_components/ProductDisplay';

export default function ProductsPage() {
  return <ProductDisplay productsFetcher={getProducts} />;
}
