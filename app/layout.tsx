import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Appointment UI',
  description: 'Next.js appointment dashboard with Python backend'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
