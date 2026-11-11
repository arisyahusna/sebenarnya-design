import Logo from './Logo';
import { footerColumns } from '@/data/content';

const socialLinks = [
  {
    label: 'X',
    href: '#x',
    icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z',
  },
  {
    label: 'Facebook',
    href: '#facebook',
    icon: 'M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0 5.37216 0 0 5.37216 0 11.9991c0 5.9891 4.38789 10.9531 10.1242 11.8533V15.4676H7.07758V11.9991H10.1242V9.35553c0-3.00727 1.7914-4.66839 4.5322-4.66839 1.3128 0 2.686.23435 2.686.23435v2.9529h-1.513C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991h3.3279l-.532 3.4685H13.8739v8.3848C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991z',
  },
  {
    label: 'Videos',
    href: '/video/',
    icon: 'M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z',
  },
];

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
              Sebenarnya.my helps the public find verified information and official responses, explore news and
              updates, check claims, and submit information they are unsure about.
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
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-copy">
            &copy; 2026 <a href="/">Sebenarnya.my</a>.
          </div>
        </div>
      </div>
    </footer>
  );
}
