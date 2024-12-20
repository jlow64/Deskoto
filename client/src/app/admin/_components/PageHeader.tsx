import { ReactNode } from 'react';

export function PageHeader({ children }: { children: ReactNode }) {
  const classes = {
    container: 'text-4xl my-4',
  };
  return <p className={classes.container}>{children}</p>;
}
