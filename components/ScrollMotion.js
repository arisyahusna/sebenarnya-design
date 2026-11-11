'use client';

import { useEffect } from 'react';

// [selector, delay in seconds]
const blocks = [
  // Hero
  ['.hero-title', 0.04],
  ['.claim-form', 0.14],
  ['.claim-caption', 0.22],
  ['.latest .section-head', 0.28],
  ['.slider', 0.36],
  // Stories
  ['.stories-head', 0],
  ['.stories-viewport', 0.08],
  ['.stories-footer', 0.16],
  // Posts
  ['.posts-head', 0],
  // Bento
  ['.bento-divider', 0],
  // Footer
  ['.newsletter', 0],
  ['.footer-main', 0.12],
];

// Fades and slides sections in as they scroll into view (styles under "Scroll motion" in global.css)
export default function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('motion');

    const registered = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.06 }
    );

    function register(el, delay) {
      if (registered.has(el)) return;
      registered.add(el);
      el.classList.add('reveal');
      if (delay) el.style.transitionDelay = `${delay}s`;

      el.addEventListener('transitionend', function onEnd(e) {
        if (e.target === el && e.propertyName === 'transform') {
          el.classList.add('done');
          el.removeEventListener('transitionend', onEnd);
        }
      });

      observer.observe(el);
    }

    blocks.forEach(([selector, delay]) => {
      document.querySelectorAll(selector).forEach((el) => register(el, delay));
    });

    // Bento cards: second card in each row starts a little later
    document.querySelectorAll('.bento-row').forEach((row) => {
      row.querySelectorAll('.bento-card').forEach((card, i) => register(card, i * 0.12));
    });

    // Post cards: staggered across the 3 columns, plus cards added by "Load more"
    const grid = document.querySelector('.posts-grid');
    let gridWatcher;
    if (grid) {
      grid.querySelectorAll('.card').forEach((card, i) => register(card, (i % 3) * 0.08));
      gridWatcher = new MutationObserver((changes) => {
        changes.forEach((change) => {
          change.addedNodes.forEach((node) => {
            if (node.nodeType === 1 && node.matches('.card')) register(node, 0.08);
          });
        });
      });
      gridWatcher.observe(grid, { childList: true });
    }

    // Show anything already on screen straight away
    const frame = requestAnimationFrame(() => {
      const screenHeight = window.innerHeight;
      registered.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < screenHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('in');
          observer.unobserve(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      gridWatcher?.disconnect();
    };
  }, []);

  return null;
}
