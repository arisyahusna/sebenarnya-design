'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { articles, articleCategories, articleStatus } from '@/data/content';
import { matchesQuery } from '@/lib/searchArticles';
import { articleHref, formatDate } from '@/lib/articles';

const DATE_OPTIONS = [
  { id: 'all', label: 'Semua tarikh' },
  { id: '7', label: '7 hari lepas' },
  { id: '30', label: '30 hari lepas' },
  { id: '90', label: '3 bulan lepas' },
  { id: 'year', label: 'Tahun ini' },
  { id: 'custom', label: 'Pilih tarikh' },
];

const pad = (n) => String(n).padStart(2, '0');

// Local date as YYYY-MM-DD, so dates can be compared as plain strings
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

// Earliest/latest date (YYYY-MM-DD) allowed by the date filter
function dateBounds(range, from, to) {
  const today = new Date();
  if (range === 'custom') return { min: from, max: to };
  if (range === 'year') return { min: `${today.getFullYear()}-01-01` };
  if (range === 'all') return {};
  const start = new Date(today);
  start.setDate(today.getDate() - (Number(range) - 1));
  return { min: toISO(start) };
}

function filterArticles(query, category, range, from, to) {
  const { min, max } = dateBounds(range, from, to);
  return articles
    .filter((a) => matchesQuery(a, query))
    .filter((a) => category === 'all' || a.status === category || a.categories.includes(category))
    .filter((a) => (!min || a.date >= min) && (!max || a.date <= max))
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first
}

export default function Articles() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [range, setRange] = useState('all');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  // Filter bar scrolling: which arrows can be used
  const barRef = useRef(null);
  const [scroll, setScroll] = useState({ overflow: false, prev: false, next: false });

  const updateScroll = () => {
    const bar = barRef.current;
    if (!bar) return;
    const max = bar.scrollWidth - bar.clientWidth;
    setScroll({ overflow: max > 1, prev: bar.scrollLeft > 1, next: bar.scrollLeft < max - 1 });
  };

  const scrollBar = (dir) => {
    const bar = barRef.current;
    bar.scrollBy({ left: dir * bar.clientWidth * 0.7, behavior: 'smooth' });
  };

  useEffect(() => {
    updateScroll();
    const observer = new ResizeObserver(updateScroll);
    observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  // Keyword from the hero search (/article?q=...)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) setQuery(q);
  }, []);

  // Keep ?q= in the URL in sync, so the results can be shared or reloaded
  const changeQuery = (value) => {
    setQuery(value);
    const url = new URL(window.location.href);
    if (value.trim()) url.searchParams.set('q', value.trim());
    else url.searchParams.delete('q');
    window.history.replaceState(null, '', url);
  };

  const list = filterArticles(query, category, range, from, to);

  const reset = () => {
    changeQuery('');
    setCategory('all');
    setRange('all');
    setFrom('');
    setTo('');
  };

  return (
    <section className="articles container">
      {/* Page heading for screen readers only */}
      <h1 className="sr-only">Artikel semakan fakta</h1>

      {/* Keyword search + date filter */}
      <div className="date-filter">
        <form className="article-search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="article-q" className="sr-only">Cari artikel</label>
          <input
            id="article-q"
            type="search"
            placeholder="Cari artikel…"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
          />
        </form>

        <label className="date-select">
          <span className="sr-only">Tapis mengikut tarikh</span>
          <select value={range} onChange={(e) => setRange(e.target.value)}>
            {DATE_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
        </label>

        {range === 'custom' && (
          <div className="date-range">
            <label>
              Dari
              <input type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <label>
              Hingga
              <input type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} />
            </label>
          </div>
        )}

        <p className="article-count" aria-live="polite">{list.length} artikel</p>
      </div>

      {/* Category filter: one line, scrolls sideways with the arrows */}
      <div className={`filter-row${scroll.overflow ? ' has-overflow' : ''}`}>
        <button
          type="button"
          className="filter-arrow"
          aria-label="Kategori sebelumnya"
          disabled={!scroll.prev}
          onClick={() => scrollBar(-1)}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" aria-hidden="true"><path d="M7 1L1 7l6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div
          className={`filter-bar${scroll.prev ? ' fade-start' : ''}${scroll.next ? ' fade-end' : ''}`}
          ref={barRef}
          role="toolbar"
          aria-label="Tapis mengikut kategori"
          onScroll={updateScroll}
        >
          {[{ id: 'all', label: 'Semua' }, ...articleCategories].map((c) => (
            <button
              key={c.id}
              type="button"
              className={category === c.id ? 'filter-chip active' : 'filter-chip'}
              aria-pressed={category === c.id}
              onClick={(e) => {
                setCategory(c.id);
                e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
              }}
            >
              {c.dot && <i style={{ background: c.dot }} />}
              {c.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="filter-arrow"
          aria-label="Kategori seterusnya"
          disabled={!scroll.next}
          onClick={() => scrollBar(1)}
        >
          <svg width="8" height="14" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      {/* Results */}
      {list.length > 0 ? (
        <div className="article-grid">
          {list.map((a) => (
            <ArticleCard key={a.title} article={a} />
          ))}
        </div>
      ) : (
        <div className="article-empty" role="alert">
          <p>
            {query.trim()
              ? `Tiada artikel dijumpai untuk “${query.trim()}”. Cuba kata kunci lain atau ubah tapisan.`
              : 'Tiada artikel untuk tapisan ini.'}
          </p>
          <button type="button" className="filter-chip" onClick={reset}>Set semula tapisan</button>
        </div>
      )}
    </section>
  );
}

function ArticleCard({ article }) {
  const status = articleStatus[article.status];
  const href = articleHref(article);

  return (
    <article className="card article-card">
      <div className="thumb">
        <Link href={href} aria-label={article.title}>
          <img src={article.image} alt={article.alt} loading="lazy" />
        </Link>
        <span className="article-status">
          <i style={{ background: status.color }} />
          {status.label}
        </span>
        <div className="card-avatar" title={article.agency.name}>
          <img src={article.agency.image} alt={article.agency.name} loading="lazy" />
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          <Link href={href}>{article.title}</Link>
        </h2>
        <time className="article-date" dateTime={article.date}>{formatDate(article.date)}</time>
      </div>
    </article>
  );
}
