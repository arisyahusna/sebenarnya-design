'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Card that flips to show the article summary and a "Read More" link.
// Mouse: flips on hover. Touch, click or keyboard: tap/click/Enter toggles it.
// `post` = { title, summary, image, alt, author: { name, image }, href }
export default function FlipCard({ post }) {
  const [flipped, setFlipped] = useState(false);
  const frontBtnRef = useRef(null);
  const readRef = useRef(null);
  const byKeyboard = useRef(false);

  // Hover only for a real mouse, so a tap on a phone doesn't flip twice
  const hover = (on) => (e) => {
    if (e.pointerType === 'mouse') setFlipped(on);
  };

  const toggle = (e) => {
    if (e.target.closest('a')) return; // "Read More" just opens the article
    byKeyboard.current = e.detail === 0; // keyboard "clicks" have no click count
    setFlipped((f) => !f);
  };

  // Keyboard users: move focus to the side that is now showing
  useEffect(() => {
    if (!byKeyboard.current) return;
    byKeyboard.current = false;
    (flipped ? readRef : frontBtnRef).current?.focus();
  }, [flipped]);

  return (
    <article
      className={`flip-card card-popular${flipped ? ' flipped' : ''}`}
      onPointerEnter={hover(true)}
      onPointerLeave={hover(false)}
      onClick={toggle}
    >
      <div className="flip-inner">
        {/* Front: image + title */}
        <div className="flip-face flip-front" inert={flipped}>
          <div className="flip-thumb">
            <img src={post.image} alt={post.alt} loading="lazy" />
            <div className="card-avatar" title={post.author.name}>
              <img src={post.author.image} alt={post.author.name} loading="lazy" />
            </div>
          </div>
          <h3 className="flip-title">{post.title}</h3>
          <button
            ref={frontBtnRef}
            type="button"
            className="flip-toggle"
            aria-label={`Show summary: ${post.title}`}
          />
        </div>

        {/* Back: summary + link */}
        <div className="flip-face flip-back" inert={!flipped}>
          <button type="button" className="flip-close" aria-label="Show front of card">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <small className="flip-source">{post.author.name}</small>
          {/* <h3 className="flip-back-title">{post.title}</h3> */}
          <p className="flip-summary">{post.summary}</p>
          <Link ref={readRef} className="flip-read" href={post.href}>
            Baca lagi
            <svg width="14" height="12" viewBox="0 0 14 12" aria-hidden="true">
              <path d="M1 6h11M8 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
