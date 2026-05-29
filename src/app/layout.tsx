import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'PlantPulse - The Operating System for Plant Intelligence',
  description: 'Measure what human eyes cannot. PlantPulse creates advanced monitoring devices that measure plant health, environmental conditions, and soil metrics with laboratory precision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-black text-white antialiased selection:bg-[#10b981] selection:text-black`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
