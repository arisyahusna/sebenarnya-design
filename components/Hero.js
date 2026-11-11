'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { keywords, searchArticles } from '@/lib/searchArticles';

export default function Hero() {
  const router = useRouter();
  const taglineRef = useRef(null);
  const formRef = useRef(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  // Go to the articles page with the results, or show an error if nothing matches
  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();

    if (!keywords(q).length) {
      setError('Please enter a keyword to search, e.g. "petrol", "hujan" or "JPJ".');
      return;
    }
    if (!searchArticles(q).length) {
      setError(`No fact-checks found for “${q}”. Try a different keyword.`);
      return;
    }
    router.push(`/article?q=${encodeURIComponent(q)}`);
  };

  // Make the search form exactly as wide as the "Check claims. Find clarity." line
  useEffect(() => {
    const syncWidth = () => {
      const width = taglineRef.current.getBoundingClientRect().width;
      if (width > 280) formRef.current.style.width = `${Math.round(width)}px`;
    };

    syncWidth();
    window.addEventListener('resize', syncWidth);
    document.fonts?.ready.then(syncWidth);
    return () => window.removeEventListener('resize', syncWidth);
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content container">
          <h1 className="hero-title">
            <span>Hello, we’re Sebenarnya.my.</span>
            <br />
            <em className="hero-tagline" ref={taglineRef}>Check claims. Find clarity.</em>
          </h1>

          <div className="form-wrap">
            <form className="pill-form claim-form" role="search" ref={formRef} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for a claim, topic or keyword..."
                aria-label="Search for a claim, topic or keyword..."
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'claim-error' : undefined}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setError('');
                }}
                required
              />
              <button className="btn" type="submit">Check</button>
            </form>
            {error ? (
              <div className="claim-error" id="claim-error" role="alert">{error}</div>
            ) : (
              <div className="claim-caption"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
