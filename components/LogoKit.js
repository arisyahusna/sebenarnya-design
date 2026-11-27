import Link from 'next/link';
import { logoPage, legalPage } from '@/data/content';

// Logo downloads (section on the About Us page): title, intro, a card per file
// (image, heading, description, file spec, download button), then a card linking to the terms and privacy pages
export default function LogoKit() {
  return (
    <section className="logo-kit container" id="logo" aria-labelledby="logo-kit-title">
      <h2 className="about-title" id="logo-kit-title">
        {logoPage.title}
      </h2>
      <p className="logo-kit-intro">{logoPage.intro}</p>

      <div className="logo-kit-grid">
        {logoPage.items.map((item) => (
          <article className="logo-card" key={item.name}>
            <div className="logo-card-preview">
              <img src={item.src} alt={`${item.name} Sebenarnya.my`} width={item.width} height={item.height} />
            </div>

            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <p className="logo-card-meta">{item.meta}</p>

            <a className="btn logo-card-btn" href={item.file} download={item.filename}>
              Muat turun {item.name} ({item.format})
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only"> · {item.meta}</span>
            </a>
          </article>
        ))}
      </div>

      {/* Terms & privacy: links to the full documents */}
      <aside className="legal-card" id="terma-privasi" aria-labelledby="legal-card-title">
        <h3 id="legal-card-title">{legalPage.title}</h3>
        <p>{legalPage.intro}</p>
        <ul className="legal-card-links">
          {legalPage.sections.map((doc) => (
            <li key={doc.id}>
              <Link href={doc.href}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
