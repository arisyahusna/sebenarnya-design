import { Fragment } from 'react';
import { withBase } from '@/lib/basePath';

const metrics = [
  { value: '10K', plus: true, label: 'Dakwaan Tular Disangkal' },
  { value: '33M', label: 'Rakyat Malaysia Dilindungi' },
  { value: 'No. 1', orange: true, label: 'Anugerah Global PBB' },
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
              <img src={withBase('/images/bento/gold-award-medal.webp')} alt="Pingat Emas WSIS Pertubuhan Bangsa-Bangsa Bersatu" className="badge-medal" loading="lazy" />
              <span>Geneva &bull; WSIS Pertubuhan Bangsa-Bangsa Bersatu</span>
            </div>
            <h3 className="headline">
              <span className="headline-lead">Pengiktirafan Tertinggi</span>
              <span className="headline-big">Juara Dunia</span>
              <span className="headline-tail">dalam Kepercayaan Digital &amp; Semakan Fakta Awam</span>
            </h3>
            <p className="lead">
              Apabila khabar angin tular tersebar pantas, fakta yang sahih mesti bergerak lebih pantas. Sebenarnya.my
              meraih penghormatan antarabangsa tertinggi di Anugerah WSIS PBB di Geneva — diiktiraf sebagai perisai utama
              Malaysia yang melindungi <strong>33 juta rakyat</strong> bersama <strong>lebih 20 agensi persekutuan</strong>.
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
              <span>Terokai Kisah WSIS</span>
              <span className="pill-icon">→</span>
            </a>
          </div>
        </div>

        <div className="bento-card image">
          <img src={withBase('/images/bento/wsis-prize-award.webp')} alt="Trofi pemenang Anugerah WSIS - Geneva, Switzerland" className="bento-img" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
