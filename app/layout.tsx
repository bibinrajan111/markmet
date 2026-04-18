import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import SmoothScrollProvider from '@/components/providers/smooth-scroll';
import BackgroundBeams from '@/components/effects/background-beams';
import ScrollTop from '@/components/layout/scroll-top';

export const metadata: Metadata = {
  title: 'Markmet | Digital Growth Partner',
  description: 'Markmet Digital Marketing Company Website',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SmoothScrollProvider />
        <BackgroundBeams />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollTop />
      </body>
    </html>
  );
}
