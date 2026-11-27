import Header from '@/components/Header';
import LegalDoc from '@/components/LegalDoc';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dasar Privasi | Sebenarnya.my',
};

export default function PrivacyPage() {
  return (
    <div className="site">
      <Header />

      <main className="main">
        <LegalDoc id="dasar-privasi" />
      </main>

      <Footer />
    </div>
  );
}
