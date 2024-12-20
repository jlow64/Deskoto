'use client';

import { ReactNode } from 'react';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <p className="text-destructive">{children}</p>;
};
