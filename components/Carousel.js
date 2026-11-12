'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlides } from '@/data/content';
import { articleHref, getArticle } from '@/lib/articles';

// Each slide points at an article; it links to that article and falls back to its image
const slides = heroSlides.map((s) => {
  const article = getArticle(s.slug);
  return { ...s, href: articleHref(article), image: s.image || article.image };
});

const COUNT = slides.length;
const DELAY = 6000; // autoplay interval, matches the dot fill animation in global.css
const GAP = 20; // .gtrack gap

const pad = (n) => String(n).padStart(2, '0');

export default function Carousel() {
  const galRef = useRef(null);
  const trackRef = useRef(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0); // bumps on every move so the timer and dot fill restart
  const [playing, setPlaying] = useState(true);

  const slideW = () => {
    const first = trackRef.current?.firstElementChild;
    return first ? first.getBoundingClientRect().width + GAP : 0;
  };

  const go = useCallback((i) => {
    const next = (i + COUNT) % COUNT;
    indexRef.current = next;
    setIndex(next);
    setTick((t) => t + 1);
  }, []);

  // Move the track
  useEffect(() => {
    trackRef.current.style.transform = `translateX(${-index * slideW()}px)`;
  }, [index, tick]);

  // Autoplay
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(indexRef.current + 1), DELAY);
    return () => clearTimeout(t);
  }, [playing, index, tick, go]);

  // Re-align on resize
  useEffect(() => {
    const onResize = () => go(indexRef.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [go]);

  // Drag / swipe with mouse, pen or finger; trackpad two-finger swipe
  useEffect(() => {
    const gal = galRef.current;
    const track = trackRef.current;
    let start = null;
    let moved = false;
    let wheelLock = false;

    const down = (e) => {
      if (e.button !== 0 || e.target.closest('.harr')) return;
      start = { x: e.clientX, y: e.clientY, base: -indexRef.current * slideW(), id: e.pointerId };
      moved = false;
    };

    const move = (e) => {
      if (!start) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (!moved) {
        if (Math.abs(dx) < 6) return;
        if (Math.abs(dy) > Math.abs(dx)) { start = null; return; }
        moved = true;
        gal.classList.add('drag');
        try { gal.setPointerCapture(start.id); } catch {}
      }
      const i = indexRef.current;
      const edge = (i === 0 && dx > 0) || (i === COUNT - 1 && dx < 0) ? 0.35 : 1;
      track.style.transform = `translateX(${start.base + dx * edge}px)`;
    };

    const end = (e) => {
      if (!start) return;
      const dx = e.clientX - start.x;
      start = null;
      gal.classList.remove('drag');
      if (!moved) return;
      const w = slideW();
      const i = indexRef.current;
      if (dx < -w * 0.12) go(Math.min(i + 1, COUNT - 1));
      else if (dx > w * 0.12) go(Math.max(i - 1, 0));
      else go(i);
    };

    // Swallow the click that follows a drag; otherwise a click on a slide opens it
    const click = (e) => {
      if (moved) {
        moved = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (e.target.closest('.harr, .hcta')) return;
      const slide = e.target.closest('.slide');
      if (slide) window.location.href = slides[+slide.dataset.i].href;
    };

    const key = (e) => {
      if (e.key === 'ArrowRight') go(indexRef.current + 1);
      if (e.key === 'ArrowLeft') go(indexRef.current - 1);
    };

    const wheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 12) return;
      e.preventDefault();
      if (wheelLock) return;
      wheelLock = true;
      go(indexRef.current + (e.deltaX > 0 ? 1 : -1));
      setTimeout(() => { wheelLock = false; }, 800);
    };

    gal.addEventListener('pointerdown', down);
    gal.addEventListener('pointermove', move);
    gal.addEventListener('pointerup', end);
    gal.addEventListener('pointercancel', end);
    gal.addEventListener('click', click, true);
    gal.addEventListener('keydown', key);
    gal.addEventListener('wheel', wheel, { passive: false });
    return () => {
      gal.removeEventListener('pointerdown', down);
      gal.removeEventListener('pointermove', move);
      gal.removeEventListener('pointerup', end);
      gal.removeEventListener('pointercancel', end);
      gal.removeEventListener('click', click, true);
      gal.removeEventListener('keydown', key);
      gal.removeEventListener('wheel', wheel);
    };
  }, [go]);

  const togglePlay = () => {
    if (!playing) go(indexRef.current + 1);
    setPlaying(!playing);
  };

  return (
    <section id="utama" className="hero-carousel">
      {/* Same container as other section headings, so it lines up with "Latest fact-checks" */}
      <div className="container carousel-head">
        <div className="section-head">
          <small className="section-label big-title">Semakan Fakta <span>Popular</span></small>
        </div>
      </div>
      <div className="gal" ref={galRef} aria-roledescription="carousel" aria-label="Fokus utama">
        <div className="gtrack" ref={trackRef}>
          {slides.map((s, i) => (
            <div
              key={s.href}
              className={`slide hs${s.position ? ' dk' : ''}${s.wide ? ' wd' : ''}${i === index ? ' cur' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} daripada ${COUNT}`}
              data-i={i}
            >
              <img
                src={s.image}
                alt=""
                draggable={false}
                style={s.position ? { objectPosition: s.position } : undefined}
              />
              <div className="ct">
                <span className="ey">{s.eyebrow}</span>
                <h3>
                  {s.title}
                  <br />
                  <em>{s.titleEm}</em>
                </h3>
                <p>{s.text}</p>
                <a className="hcta" href={s.href} draggable={false}>
                  {s.cta}{' '}
                  <svg width="14" height="12" viewBox="0 0 14 12">
                    <path d="M1 6h11M8 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="harr l" aria-label="Slaid sebelumnya" onClick={() => go(index - 1)}>
          <svg width="10" height="16" viewBox="0 0 10 16"><path d="M8 2L2 8l6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button className="harr r" aria-label="Slaid seterusnya" onClick={() => go(index + 1)}>
          <svg width="10" height="16" viewBox="0 0 10 16"><path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <span className="hcnt"><b>{pad(index + 1)}</b> / {pad(COUNT)}</span>
      </div>

      <div className={`gctl${playing ? '' : ' paused'}`}>
        <div className="dots" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.href}
              role="tab"
              aria-label={`Slaid ${i + 1}`}
              aria-selected={i === index}
              className={i === index ? 'on run' : undefined}
              onClick={() => go(i)}
            >
              <i key={i === index ? tick : undefined} />
            </button>
          ))}
        </div>
        <button className="play" aria-label={playing ? 'Jeda' : 'Main'} onClick={togglePlay}>
          <svg width="14" height="16" viewBox="0 0 14 16">
            {playing ? (
              <>
                <rect x="1" y="1" width="4" height="14" rx="1" />
                <rect x="9" y="1" width="4" height="14" rx="1" />
              </>
            ) : (
              <path d="M2 1.5v13l11-6.5z" />
            )}
          </svg>
        </button>
      </div>
    </section>
  );
}
