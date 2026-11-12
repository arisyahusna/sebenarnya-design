import { Fragment } from 'react';
import { withBase } from '@/lib/basePath';

const metrics = [
  { value: '10K', plus: true, label: 'Viral Claims Debunked' },
  { value: '33M', label: 'Malaysians Protected' },
  { value: 'No. 1', orange: true, label: 'UN Global Prize' },
];

export default function Bento() {
  return (
    <section className="bento container">
      <div className="bento-divider" />

      {/* Row 1: WSIS award story + trophy photo */}
      <div className="bento-row top">
        <div className="bento-card dots">
          <div>
            <div className="badge">
              <img src={withBase('/images/bento/gold-award-medal.webp')} alt="United Nations WSIS Gold Medal" className="badge-medal" loading="lazy" />
              <span>Geneva &bull; United Nations WSIS</span>
            </div>
            <h3 className="headline">
              <span className="headline-lead">Crown Recognition</span>
              <span className="headline-big">World Champion</span>
              <span className="headline-tail">in Digital Trust &amp; Public Fact-Checking</span>
            </h3>
            <p className="lead">
              When viral rumours spread fast, verified facts must move faster. Sebenarnya.my claimed top international
              honours at the UN WSIS Prizes in Geneva — recognized as Malaysia&apos;s definitive shield protecting{' '}
              <strong>33 million citizens</strong> across <strong>20+ federal agencies</strong>.
            </p>
            <div className="metrics">
              {metrics.map((metric, i) => (
                <Fragment key={metric.label}>
                  {i > 0 && <div className="metric-line" />}
                  <div className="metric">
                    <span className={metric.orange ? 'metric-value orange' : 'metric-value'}>
                      {metric.value}
                      {metric.plus && <span className="metric-plus">+</span>}
                    </span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <a href={withBase('/tentang-kami/')} className="pill-btn">
              <span>Explore The WSIS Story</span>
              <span className="pill-icon">→</span>
            </a>
          </div>
        </div>

        <div className="bento-card image">
          <img src={withBase('/images/bento/wsis-prize-award.webp')} alt="WSIS Prizes Winner Trophy - Geneva, Switzerland" className="bento-img" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
