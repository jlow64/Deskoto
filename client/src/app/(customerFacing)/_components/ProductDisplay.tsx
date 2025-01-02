import { Suspense } from 'react';
import { ProductCard, ProductCardSkeleton } from '@/components/ProductCard';
import { Product } from '@prisma/client';

interface TProductDisplay {
  productsFetcher: () => Promise<Product[]>;
}

export const ProductDisplay = ({ productsFetcher }: TProductDisplay) => {
  const classes = {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  };
  return (
    <div className={classes.container}>
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductSuspense productsFetcher={productsFetcher} />
      </Suspense>
    </div>
  );
};

type TProductSuspense = { productsFetcher: () => Promise<Product[]> };
const ProductSuspense = async ({ productsFetcher }: TProductSuspense) => {
  return (await productsFetcher()).map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
};
