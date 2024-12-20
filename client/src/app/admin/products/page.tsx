import Link from 'next/link';
import { PageHeader } from '../_components/PageHeader';
import { Button } from '@/components/ui/button';
import ProductsTable from './_components/ProductsTable';

export default function AdminProductsPage() {
  const classes = {
    container: 'flex flex-col p-10',
    header: 'flex justify-between items-center gap-4',
  };
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </section>
  );
}
