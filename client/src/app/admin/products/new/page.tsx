import { PageHeader } from '@/app/admin/_components';
import { ProductForm } from '../_components';

export default function NewProductPage() {
  return (
    <div className="p-10">
      <PageHeader>Add Product</PageHeader>
      <ProductForm />
    </div>
  );
}
