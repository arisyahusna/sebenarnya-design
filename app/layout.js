import './global.css';
import { Montserrat } from 'next/font/google';
import Chatbot from '@/components/Chatbot';
import ClaimForm from '@/components/ClaimForm';
import { withBase } from '@/lib/basePath';

// Montserrat for every page; global.css reads it through var(--font-montserrat)
const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
});

const description =
  'Sebenarnya.my membantu orang ramai mendapatkan maklumat sahih dan maklum balas rasmi, mengikuti berita dan perkembangan terkini, menyemak dakwaan serta menyalurkan maklumat yang diragui.';

export const metadata = {
  title: 'Sebenarnya.my',
  description,
  icons: { icon: withBase('/images/logo/icon.png') },
  openGraph: {
    type: 'website',
    siteName: 'Sebenarnya.my',
    title: 'Sebenarnya.my',
    description,
  },
  twitter: {
    card: 'summary',
    title: 'Sebenarnya.my',
    description,
  },
  // Carried over from the old site: keeps search engines out. Remove when the site goes live.
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms" className={montserrat.variable}>
      <body>
        {children}
        {/* AIFA chatbot: floating on every page */}
        <Chatbot />
        {/* Submit-claim form: opens as a pop-up from any /submit-claim/ link */}
        <ClaimForm />
      </body>
    </html>
  );
}
