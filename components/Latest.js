import Link from 'next/link';
import FlipCard from './FlipCard';
import { articles } from '@/data/content';
import { articleHref } from '@/lib/articles';

// The 6 newest articles, shaped for the flip card
const latest = [...articles]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 6)
  .map((a) => ({
    title: a.title,
    summary: a.lead,
    image: a.image,
    alt: a.alt,
    author: a.agency,
    href: articleHref(a),
  }));

export default function Latest() {
  return (
    <section className="popular container">
      <div className="section-head">
        <small className="section-label big-title">Semakan Fakta <span>Terkini</span></small>
      </div>
      <div className="popular-grid">
        {latest.map((post) => (
          <FlipCard key={post.href} post={post} />
        ))}
      </div>
      <div className="popular-more">
        <Link className="btn" href="/article">Lihat lagi</Link>
      </div>
    </section>
  );
}
