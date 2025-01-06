import { PageHeader } from '../_components';
import { OrdersTable } from './_components/OrdersTable';

export default function OrdersPage() {
  return (
    <>
      <PageHeader>Orders</PageHeader>
      <OrdersTable />
    </>
  );
}
