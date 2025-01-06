import { formatCurrency, formatNumber } from '@/lib/formatters';
import DashboardCard from '@/app/admin/_components/DashboardCard';
import { getSalesData, getUserData, getProductData } from '@/actions';

export default async function AdminDashboard() {
  const [
    { numberOfSales, amount },
    { averageValuePerUser, userCount },
    { activeCount, inactiveCount },
  ] = await Promise.all([getSalesData(), getUserData(), getProductData()]);

  const classes = {
    container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4',
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
        subtitle={`${formatCurrency(averageValuePerUser)} Average Value`}
        body={formatNumber(userCount)}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(inactiveCount)} Inactive`}
        body={formatNumber(activeCount)}
      />
    </div>
  );
}
