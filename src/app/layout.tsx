import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Coffee Chat Ventures',
  description: 'A cozy place where friends gather across Discord communities to share ideas, make connections, and enjoy meaningful conversations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-cream text-coffee-brown min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
