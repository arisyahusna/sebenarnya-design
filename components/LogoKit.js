import { logoPage } from '@/data/content';

// Logo page: title, intro, and a card per file with a preview and a download button
export default function LogoKit() {
  return (
    <section className="logo-kit container" aria-labelledby="logo-kit-title">
      <h1 className="about-title" id="logo-kit-title">
        {logoPage.title}
      </h1>
      <p className="logo-kit-intro">{logoPage.intro}</p>

      <div className="logo-kit-grid">
        {logoPage.items.map((item) => (
          <article className="logo-card" key={item.name}>
            <div className="logo-card-preview">
              <img src={item.src} alt={`${item.name} Sebenarnya.my`} width={item.width} height={item.height} />
            </div>

            <div className="logo-card-info">
              <div>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
                <p className="logo-card-meta">{item.meta}</p>
              </div>

              <a className="btn logo-card-btn" href={item.file} download={item.filename}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Muat turun
                <span className="sr-only"> {item.name} ({item.meta})</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
