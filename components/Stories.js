'use client';

import { useEffect, useRef, useState } from 'react';
import { stories, socialLinks } from '@/data/content';

const COUNT = stories.length;
const platforms = Object.fromEntries(socialLinks.map((p) => [p.id, p]));

// Three copies (before / real / after) so the side previews fill the screen and the loop looks endless
const slides = [...stories, ...stories, ...stories];

// Card widths and gap for the current screen width
function getSizes(width) {
  if (width <= 768) {
    return { small: Math.max(Math.round(width * 0.18), 70), big: Math.min(Math.round(width * 0.82), 380), gap: 12 };
  }
  if (width <= 1200) {
    return { small: Math.max(Math.round(width * 0.16), 140), big: Math.min(Math.round(width * 0.65), 680), gap: 16 };
  }
  return { small: Math.min(Math.max(Math.round(width * 0.14), 170), 220), big: Math.min(Math.round(width * 0.58), 920), gap: 20 };
}

export default function Stories() {
  const viewportRef = useRef(null);
  const touchStartX = useRef(0);
  const [index, setIndex] = useState(COUNT + 2); // start on the 3rd story of the middle copy
  const [animate, setAnimate] = useState(false);
  const [size, setSize] = useState(null);

  // Measure on load and (debounced) on resize
  useEffect(() => {
    let timer;
    const measure = () => {
      setAnimate(false);
      setSize({ ...getSizes(window.innerWidth), viewport: viewportRef.current.offsetWidth });
    };
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(measure, 80);
    };

    measure();
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // After an instant (non-animated) jump has been painted, switch transitions back on
  useEffect(() => {
    if (animate || !size) return;
    let second;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [animate, size, index]);

  const goTo = (i) => setIndex(Math.max(0, Math.min(slides.length - 1, i)));

  // If we slid into one of the copies, jump back to the same story in the middle copy
  function handleTransitionEnd(e) {
    if (e.target !== e.currentTarget) return;
    if (index < COUNT || index >= COUNT * 2) {
      setAnimate(false);
      setIndex((index % COUNT) + COUNT);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    }
  }

  function handleTouchEnd(e) {
    const distance = e.changedTouches[0].screenX - touchStartX.current;
    if (distance < -40) goTo(index + 1);
    else if (distance > 40) goTo(index - 1);
  }

  const s = size || { small: 180, big: 880, gap: 20, viewport: 0 };
  const offset = s.viewport / 2 - (index * (s.small + s.gap) + s.big / 2);
  const storyNumber = index % COUNT;
  const progress = 100 / COUNT + (storyNumber / (COUNT - 1)) * (100 - 100 / COUNT);
  const transition = animate ? undefined : 'none';

  return (
    <section className="stories">
      <div className="stories-head">
        <small className="big-title stories-title">
          Our Latest  <br/> <strong>Social Media</strong>
          <span> Activities</span>
        </small>
      </div>

      <div
        className="stories-viewport"
        ref={viewportRef}
        tabIndex={0}
        aria-label="Our latest social media posts"
        onKeyDown={handleKeyDown}
        onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].screenX; }}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="stories-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            gap: s.gap,
            transform: `translateX(${offset}px)`,
            transition,
            visibility: size ? 'visible' : 'hidden',
          }}
        >
          {slides.map((story, i) => {
            const active = i === index;
            const linkTab = active ? undefined : -1;
            const social = platforms[story.platform];

            return (
              <article
                key={i}
                className={`story story-${story.platform}${active ? ' active' : ''}`}
                aria-hidden={i < COUNT || i >= COUNT * 2 ? true : undefined}
                style={{ width: active ? s.big : s.small, transition }}
                onClick={() => !active && goTo(i)}
              >
                {/* Platform logo, shown while the card is folded */}
                <svg className="story-brand" viewBox="0 0 24 24" aria-hidden="true"><path d={social.icon} /></svg>

                <div className="story-body">
                  <div className="story-meta">
                    <span className="story-badge">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={social.icon} /></svg>
                      {social.label}
                    </span>
                    <span className="story-info">
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {story.date}
                    </span>
                  </div>
                  <h3 className="story-title">
                    <a href={story.href} target="_blank" rel="noopener noreferrer" tabIndex={linkTab}>{story.title}</a>
                  </h3>
                  <p className="story-summary">{story.summary}</p>
                  <a href={story.href} className="story-open" target="_blank" rel="noopener noreferrer" tabIndex={linkTab}>
                    Buka di {social.label}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </a>
                </div>

                {/* The post itself; the player only loads on the open card */}
                <div className="story-media">
                  {active && (story.video ? (
                    <video src={story.video} poster={story.poster} controls playsInline preload="none" />
                  ) : story.embed ? (
                    <iframe
                      src={story.embed}
                      title={`${social.label}: ${story.title}`}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <a href={story.href} target="_blank" rel="noopener noreferrer">
                      <img src={story.image} alt={story.alt} />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="stories-footer">
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="stories-nav">
          <button className="round-btn" type="button" aria-label="Cerita Sebelumnya" onClick={() => goTo(index - 1)}>
            <svg viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
          </button>
          <button className="round-btn" type="button" aria-label="Cerita Seterusnya" onClick={() => goTo(index + 1)}>
            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
