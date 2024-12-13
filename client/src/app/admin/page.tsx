import { formatCurrency, formatNumber } from '@/lib/formatters';
import { getSalesData, getUserData, getProductData } from '@/app/admin/actions';
import DashboardCard from '@/components/DashboardCard';

export default async function AdminDashboard() {
  const [
    { numberOfSales, amount },
    { averageValuePerUser, userCount },
    { activeCount, inactiveCount },
  ] = await Promise.all([getSalesData(), getUserData(), getProductData()]);
  const classes = {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  };
  return (
    <div className={classes.container}>
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(numberOfSales)} Orders`}
        body={formatCurrency(amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatNumber(averageValuePerUser)} Average Value`}
        body={formatCurrency(userCount)}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(inactiveCount)} Inactive`}
        body={formatNumber(activeCount)}
      />
    </div>
  );
}
