import { Button } from '@/components/ui/button';
import { ProductDisplay } from './ProductDisplay';
import { Product } from '@prisma/client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TProductGridSection {
  title: string;
  productsFetcher: () => Promise<Product[]>;
}

export const ProductGridSection = async ({
  productsFetcher,
  title,
}: TProductGridSection) => {
  const classes = {
    container: 'space-y-4',
    title: {
      container: 'flex gap-4',
      text: 'text-4xl font-bold',
    },
    button: {
      arrow: 'size-4',
    },
    product: {
      container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    },
  };
  return (
    <section className={classes.container}>
      <div className={classes.title.container}>
        <h2 className={classes.title.text}>{title}</h2>
        <Button variant="outline" asChild>
          <Link href="/products">
            <span>View All</span>
            <ArrowRight className={classes.button.arrow} />
          </Link>
        </Button>
      </div>
      <ProductDisplay productsFetcher={productsFetcher} />
    </section>
  );
};
