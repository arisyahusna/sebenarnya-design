import { Fragment } from 'react';
import { withBase } from '@/lib/basePath';


export default function Bento() {
  return (
    <section className="bento container">
      <div className="bento-divider" />

      {/* Row 1: WSIS award story + trophy photo */}
      <div className="bento-row top">
        <div className="bento-card dots">
          <div>
            <div className="badge">
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
          </div>
          <div>
            <a href={withBase('/about-us/#berita-galeri')} className="pill-btn">
              <span>Ketahui lebih lanjut</span>
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
