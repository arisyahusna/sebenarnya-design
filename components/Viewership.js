'use client';

import { useEffect, useRef } from 'react';
import { viewershipStats as stats } from '@/data/content';

const DURATION = 2000; // count-up length in ms

const format = (n, sep) => (sep ? Math.round(n).toLocaleString('en-US') : String(Math.round(n)));

export default function Viewership() {
  const countRefs = useRef([]);

  // Count each number up from 0 when it scrolls into view
  useEffect(() => {
    const els = countRefs.current.filter(Boolean);
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Lock each number's width so the layout doesn't shift while counting
    els.forEach((el) => el.style.setProperty('--count-w', `${el.getBoundingClientRect().width}px`));

    const frames = [];
    const run = (el) => {
      const { value, sep } = stats[+el.dataset.i];
      const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / DURATION);
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // ease-out expo
        el.textContent = format(value * eased, sep);
        if (p < 1) frames.push(requestAnimationFrame(step));
      };
      el.textContent = '0';
      frames.push(requestAnimationFrame(step));
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          run(entry.target);
        }),
      { threshold: 0.6 }
    );
    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, []);

  return (
    <section className="viewership container" aria-labelledby="viewership-lead">
      <div className="viewership-inner">
        <div className="viewership-side">
          <p className="viewership-kicker">
            Pusat semakan fakta
            <br />
            MCMC sejak 2017
          </p>
        </div>

        <div className="viewership-main">
          <p className="viewership-lead" id="viewership-lead">
            Sebenarnya.my membantu rakyat Malaysia menyemak berita tular sebelum dikongsi. Setiap semakan merujuk
            kenyataan rasmi agensi kerajaan, supaya maklumat yang sampai kepada anda tepat, jelas dan boleh dipercayai.
          </p>

          <dl className="viewership-stats">
            {stats.map((s, i) => (
              <div key={s.text}>
                <dt>
                  <span className="count" data-i={i} ref={(el) => (countRefs.current[i] = el)}>
                    {format(s.value, s.sep)}
                  </span>
                  {s.unit && <small> {s.unit}</small>}
                </dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
