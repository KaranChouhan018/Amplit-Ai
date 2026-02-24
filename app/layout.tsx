import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amplit AI - AI That Amplifies Care',
  description: 'Healthcare AI solutions that handle missed calls, scheduling, and repetitive tasks. Zero missed calls. Faster revenue. Better patient care.',
  openGraph: {
    title: 'Amplit AI - AI That Amplifies Care',
    description: 'Healthcare AI solutions for smarter practice management.',
    type: 'website',
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
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${inter.className} bg-[#0D1117] text-[#8B949E] antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
