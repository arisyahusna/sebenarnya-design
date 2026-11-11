import './global.css';

const description =
  'Sebenarnya.my helps the public find verified information and official responses, explore news and updates, check claims, and submit information they are unsure about.';

export const metadata = {
  title: 'Sebenarnya.my',
  description,
  icons: { icon: '/images/logo/icon.png' },
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
