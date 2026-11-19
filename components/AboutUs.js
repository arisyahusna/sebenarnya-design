import { aboutHero as hero, whatWeDo, howItWorks, newsGallery } from '@/data/content';
import { withBase } from '@/lib/basePath';
import LogoKit from './LogoKit';

const pad = (n) => String(n).padStart(2, '0');

// About us page content: Hero, (Who We Are), What We Do, How It Works, News and Gallery, Logo downloads
export default function AboutUs() {
  return (
    <>
      <Hero />

      {/* Next: Who We Are */}

      <WhatWeDo />

      <HowItWorks />

      {/* News and gallery (anchor: /about-us/#berita-galeri) */}
      <NewsGallery />

      {/* Logo and icon downloads (anchor: /about-us/#logo) */}
      <LogoKit />
    </>
  );
}

// Hero: title and intro
function Hero() {
  return (
    <section className="about-hero container" aria-labelledby="about-hero-title">


      <h1 className="about-hero-title" id="about-hero-title">
        <span>{hero.title}</span>
        <br />
        {hero.subtitle} <em>{hero.accent}</em>
      </h1>

      <div className="about-hero-row">
        <p className="about-hero-lead">{hero.lead}</p>

      </div>
    </section>
  );
}

// What We Do: the four main functions, in a staggered grid with the logo
function WhatWeDo() {
  const [first, ...rest] = whatWeDo.items;

  const card = (item, i) => (
    <article className="wwd-card" key={item.title}>
      <div className="wwd-card-top">
        <h3>{item.title}</h3>
        <span className="wwd-num" aria-hidden="true">/{pad(i + 1)}</span>
      </div>
      <p>{item.text}</p>
    </article>
  );

  return (
    <section className="wwd container" aria-labelledby="wwd-title">
      <h2 className="about-title" id="wwd-title">
        {whatWeDo.title}
      </h2>

      <div className="wwd-grid">
        {card(first, 0)}

        {/* Logo: decorative, sits between the cards */}
        <div className="wwd-logo" aria-hidden="true">
          <img src={withBase('/images/logo/logo.png')} alt="" width="356" height="107" />
        </div>

        {rest.map((item, i) => card(item, i + 1))}
      </div>
    </section>
  );
}

// How It Works: fact-checking steps on a timeline
function HowItWorks() {
  const { steps, cta } = howItWorks;

  return (
    <section className="hiw container" aria-labelledby="hiw-title">
      <h2 className="about-title" id="hiw-title">
        {howItWorks.title}
      </h2>
      <p className="hiw-intro">{howItWorks.intro}</p>

      <ol className="hiw-steps">
        {steps.map((step) => (
          <li className="hiw-step" key={step.title}>
            <span className="hiw-dot" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// News and Gallery: latest news cards, then a photo grid
function NewsGallery() {
  const { news, gallery } = newsGallery;

  return (
    <section className="news-gallery container" id="berita-galeri" aria-labelledby="news-gallery-title">
      <h2 className="about-title" id="news-gallery-title">
        {newsGallery.title}
      </h2>
      <p className="news-gallery-intro">{newsGallery.intro}</p>

      <h3 className="news-gallery-sub">Berita</h3>
      <ul className="news-list">
        {news.map((item) => (
          <li className="news-card" key={item.title}>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <div className="news-card-body">
              <span className="news-tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="news-gallery-sub">Galeri</h3>
      <ul className="gallery-grid">
        {gallery.map((item) => (
          <li className={`gallery-item ${item.size}`} key={item.image}>
            <figure>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
