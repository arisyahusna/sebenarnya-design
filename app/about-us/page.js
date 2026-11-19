import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import ScrollMotion from '@/components/ScrollMotion';

export const metadata = {
  title: 'Tentang Kami | Sebenarnya.my',
};

export default function AboutPage() {
  return (
    <div className="site">
      <Header />

      <main className="main">
        {/* Hero, Who We Are, What We Do, How It Works, News and Gallery, Logo downloads */}
        <AboutUs />
      </main>

      <Footer />

      <ScrollMotion />
    </div>
  );
}
