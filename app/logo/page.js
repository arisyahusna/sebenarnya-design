import Header from '@/components/Header';
import LogoKit from '@/components/LogoKit';
import Footer from '@/components/Footer';
import ScrollMotion from '@/components/ScrollMotion';

export const metadata = {
  title: 'Logo | Sebenarnya.my',
};

export default function LogoPage() {
  return (
    <div className="site">
      <Header />

      <main className="main">
        {/* Logo and icon downloads */}
        <LogoKit />
      </main>

      <Footer />

      <ScrollMotion />
    </div>
  );
}
