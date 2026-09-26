import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/common/Toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Irvin Global Financial Services | Digital Credit Platform',
  description: 'Payday, Payroll, Step-Up, and SME loans from Irvin Global Financial Services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}