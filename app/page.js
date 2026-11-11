import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import Stories from '@/components/Stories';
import Bento from '@/components/Bento';
import Latest from '@/components/Latest';
import Footer from '@/components/Footer';
import Viewership from '@/components/Viewership';
import Collaborators from '@/components/Collaborators';
import ScrollMotion from '@/components/ScrollMotion';

export default function HomePage() {
  return (
    <div className="site">
      {/* Header */}
      <Header />

      <main className="main">
        {/* Hero + latest fact-checks slider */}
        <Hero />

        {/* Carousel */}
        <Carousel />

        {/* Latest fact-checks */}
        <Latest />

        {/* Bento: WSIS award + AIFA assistant */}
        <Bento />

        {/* Stories: announcements & activities carousel */}
        <Stories />
      
        {/* Viewership */}
        <Viewership />

        {/* Collaborators */}
        <Collaborators />
        
      </main>

      {/* Footer */}
      <Footer />

      <ScrollMotion />
    </div>
  );
}
