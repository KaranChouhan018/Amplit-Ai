import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LenisProvider from '@/components/lenis-provider';
import BackgroundGradient from '@/components/layout/background-gradient';

export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://amplit.ai'),
  title: {
    default: 'Amplit AI - AI That Amplifies Care',
    template: '%s | Amplit AI',
  },
  description: 'Healthcare AI solutions that handle missed calls, scheduling, and repetitive tasks. Zero missed calls. Faster revenue. Better patient care.',
  keywords: ['dental AI', 'AI voice agent', 'healthcare AI', 'dental practice management', 'automated scheduling', 'Dentsi'],
  authors: [{ name: 'Amplit AI' }],
  openGraph: {
    title: 'Amplit AI - AI That Amplifies Care',
    description: 'Healthcare AI solutions for smarter practice management.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
        <body className={`${inter.className}  text-[#000000] antialiased`}>
          <LenisProvider>
            <Navigation />
                    <BackgroundGradient>
            <main className="min-h-screen">
                {children}
            </main>
                        </BackgroundGradient>
            <Footer />
          </LenisProvider>
        </body>
    </html>
  );
}
