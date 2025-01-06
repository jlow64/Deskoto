import { Navbar, NavLink } from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const classes = {
    container: 'p-10',
  };
  return (
    <>
      <Navbar>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">Orders</NavLink>
      </Navbar>
      <main className={classes.container}>{children}</main>
    </>
  );
}
