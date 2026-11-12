import Logo from './Logo';
import { footerColumns, socialLinks } from '@/data/content';
import { withBase } from '@/lib/basePath';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        {/* Logo, link columns and copyright */}
        <div className="footer-main">
          <div className="footer-about">
            <div className="footer-logo">
              <Logo />
            </div>
            <p className="footer-text">
              Sebenarnya.my membantu orang ramai mendapatkan maklumat sahih dan maklum balas rasmi, menyemak dakwaan yang tular serta mengikuti berita dan perkembangan terkini.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <small>Social</small>
              <ul>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} aria-label={`link ${link.label}`}>
                      <svg role="img" viewBox="0 0 24 24"><path d={link.icon} /></svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {footerColumns.map((column) => (
              <div className="footer-col" key={column.title}>
                <small>{column.title}</small>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={withBase(link.href)}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-copy">
            &copy; 2023 <a href={withBase('/')}> Malaysian Communications and Multimedia Commission</a>.
          </div>
        </div>
      </div>
    </footer>
  );
}
