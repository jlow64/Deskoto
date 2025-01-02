import { ProductGridSection } from './_components/ProductGridSection';
import { getMostPopularProducts, getNewestProducts } from '@/actions';

export default function HomePage() {
  const classes = {
    container: 'space-y-12',
  };
  return (
    <main className={classes.container}>
      <ProductGridSection
        title="Most Popular"
        productsFetcher={getMostPopularProducts}
      />
      <ProductGridSection
        title="Just Arrived"
        productsFetcher={getNewestProducts}
      />
    </main>
  );
}
