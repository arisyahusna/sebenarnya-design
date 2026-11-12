import './global.css';
import Chatbot from '@/components/Chatbot';
import ClaimForm from '@/components/ClaimForm';
import { withBase } from '@/lib/basePath';

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
    <html lang="ms">
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
