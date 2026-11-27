import Link from 'next/link';
import { legalPage } from '@/data/content';
import { formatDate } from '@/lib/articles';

// Full terms or privacy page: back link, title, summary, last updated, numbered clauses, link to the other document
// `id` = a `legalPage.sections` id ('terma-syarat' / 'dasar-privasi')
export default function LegalDoc({ id }) {
  const doc = legalPage.sections.find((s) => s.id === id);
  const others = legalPage.sections.filter((s) => s.id !== id);

  return (
    <article className="legal-page container">
      <Link className="post-back" href="/about-us/#terma-privasi">
        <svg width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
          <path d="M13 6H2M6 2L2 6l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Tentang Kami
      </Link>

      <header className="legal-page-head">
        <h1>{doc.title}</h1>
        <p className="legal-page-lead">{doc.summary}</p>
        <p className="legal-page-updated">
          Kemas kini terakhir: <time dateTime={legalPage.updated}>{formatDate(legalPage.updated)}</time>
        </p>
      </header>

      <ol className="legal-clauses">
        {doc.items.map((item) => (
          <li key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>

      <p className="legal-page-also">
        Lihat juga:{' '}
        {others.map((s) => (
          <Link key={s.id} href={s.href}>{s.title}</Link>
        ))}
      </p>
    </article>
  );
}
