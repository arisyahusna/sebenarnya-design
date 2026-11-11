import Header from '@/components/Header';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Artikel | Sebenarnya.my',
};

export default function ArticlePage() {
  return (
    <div className="site">
      <Header />

      <main className="main">
        <Articles />
      </main>

      <Footer />
    </div>
  );
}
