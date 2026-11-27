import Header from '@/components/Header';
import LegalDoc from '@/components/LegalDoc';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terma dan Syarat | Sebenarnya.my',
};

export default function TermsPage() {
  return (
    <div className="site">
      <Header />

      <main className="main">
        <LegalDoc id="terma-syarat" />
      </main>

      <Footer />
    </div>
  );
}
