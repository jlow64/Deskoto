import { PageHeader } from '@/app/admin/_components';
import { ProductForm } from '../../_components';
import db from '@/db/db';

interface EditProductPageProps {
  params: { id: string };
}
export default async function EditProductPage({
  params: { id },
}: EditProductPageProps) {
  const product = await db.product.findUnique({ where: { id } });
  return (
    <div className="p-10">
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product} />
    </div>
  );
}
