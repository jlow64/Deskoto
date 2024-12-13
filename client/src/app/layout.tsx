import type { Metadata } from 'next';
import { Playwrite_US_Modern, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const playwright = Playwrite_US_Modern({
  variable: '--font-playwright',
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Deskoto',
  description: 'My desk things',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          inter.variable,
          playwright.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
