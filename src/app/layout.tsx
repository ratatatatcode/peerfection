import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'PEERFECTION | Peer-to-Peer Skill Bartering Platform',
  description:
    'Peerfection helps people exchange skills and knowledge through peer-to-peer collaboration. Barter your talents, learn new abilities, and grow with the community.',
  keywords: [
    'peer-to-peer learning',
    'skill barter',
    'trade skills online',
    'peer learning',
    'community learning',
    'knowledge exchange',
    'barter platform',
  ],
  authors: [{ name: 'Peerfection Team' }],
  openGraph: {
    title: 'PEERFECTION | Trade Skills & Learn Together',
    description:
      'Join Peerfection to trade your skills and knowledge directly with peers. A global barter-based platform for collaboration and growth.',
    url: 'https://peerfection.com',
    siteName: 'PEERFECTION',
    images: [
      {
        url: 'https://peerfection/logo.png',
        width: 1200,
        height: 630,
        alt: 'Peerfection Skill Barter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://peerfection.com',
  },
  category: 'education',
};

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} scroll-smooth antialiased`}>{children}</body>
    </html>
  );
}
