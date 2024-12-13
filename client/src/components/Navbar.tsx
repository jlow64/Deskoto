'use client';

import Link from 'next/link';
import React, { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Navbar = ({ children }: { children: ReactNode }) => {
  const classes = {
    container: 'bg-primary text-primary-foreground flex justify-center px-4',
  };
  return <nav className={classes.container}>{children}</nav>;
};

type NavLinkProps = Omit<ComponentProps<typeof Link>, 'className'>;
const NavLink = (props: NavLinkProps) => {
  const classes = {
    linkStyle:
      'p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary ',
    linkSelected: 'bg-background text-foreground',
  };

  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        classes.linkStyle,
        pathname === props.href && classes.linkSelected,
      )}
    />
  );
};

export { Navbar, NavLink };
