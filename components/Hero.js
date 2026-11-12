'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { keywords, searchArticles } from '@/lib/searchArticles';

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  // Go to the articles page with the results, or show an error if nothing matches
  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();

    if (!keywords(q).length) {
      setError('Sila masukkan kata kunci untuk dicari, cth. "petrol", "hujan" atau "JPJ".');
      return;
    }
    if (!searchArticles(q).length) {
      setError(`Tiada semakan fakta dijumpai untuk “${q}”. Cuba kata kunci lain.`);
      return;
    }
    router.push(`/article?q=${encodeURIComponent(q)}`);
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content container">
          <h1 className="hero-title">
            <span>Hai, kami Sebenarnya.my.</span>
            <br />
            <em className="hero-tagline">Semak dakwaan. Temukan kebenaran.</em>
          </h1>

          <div className="form-wrap">
            <form className="pill-form claim-form" role="search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Cari dakwaan, topik atau kata kunci..."
                aria-label="Cari dakwaan, topik atau kata kunci"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'claim-error' : undefined}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setError('');
                }}
                required
              />
              <button className="btn" type="submit">Semak</button>
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
