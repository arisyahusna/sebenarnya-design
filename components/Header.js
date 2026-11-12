'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { navLinks } from '@/data/content';
import { withBase } from '@/lib/basePath';

const languages = [
  { code: 'EN', lang: 'en', name: 'English' },
  { code: 'BM', lang: 'ms', name: 'Bahasa Melayu' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('EN'); // UI state only; content is not translated yet

  // Close the mobile menu if the window grows back to desktop size
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1025px)');
    const close = (e) => e.matches && setOpen(false);
    desktop.addEventListener('change', close);
    return () => desktop.removeEventListener('change', close);
  }, []);

  return (
    <header className="header">
      <div className="header-inner container">
        <div className="brand">
          <Logo />
        </div>

        <div className="nav">
          <button
            type="button"
            className={open ? 'menu-toggle open' : 'menu-toggle'}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>

          <nav className={open ? 'menu open' : 'menu'}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={withBase(link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language selector: visual only for now, no translation wired up */}
          <div className="lang-switch" role="group" aria-label="Language">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                lang={l.lang}
                aria-label={l.name}
                aria-pressed={lang === l.code}
                onClick={() => setLang(l.code)}
              >
                {l.code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
