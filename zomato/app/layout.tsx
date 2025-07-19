import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zomato - Discover great food & restaurants near you',
  description: 'Order food online from your favorite restaurants. Fast delivery, great deals, and amazing food experiences.',
  keywords: 'food delivery, restaurants, order online, zomato, food near me',
  authors: [{ name: 'Zomato' }],
  openGraph: {
    title: 'Zomato - Discover great food & restaurants',
    description: 'Order food online from your favorite restaurants. Fast delivery, great deals, and amazing food experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zomato - Discover great food & restaurants',
    description: 'Order food online from your favorite restaurants. Fast delivery, great deals, and amazing food experiences.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}