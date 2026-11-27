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
            <h3 className="headline">
              <span className="headline-tail">Sebenarnya.my Diiktiraf di</span>
              <span className="headline-big"> WSIS Prizes 2026 </span>
            </h3>
            <p className="lead">
             Sebenarnya.my, portal semakan fakta rasmi Malaysia yang dibangunkan oleh MCMC, telah menerima pengiktirafan antarabangsa sebagai Champion Project di WSIS Prizes 2026 yang berlangsung di Geneva, Switzerland.
Pengiktirafan ini mencerminkan komitmen berterusan MCMC dalam memperkukuh kepercayaan digital melalui penyampaian maklumat sahih, semakan fakta yang berwibawa serta kerjasama strategik dengan agensi kerajaan bagi membendung penyebaran maklumat palsu.
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
