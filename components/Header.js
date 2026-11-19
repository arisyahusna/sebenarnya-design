'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Logo from './Logo';
import { navLinks } from '@/data/content';
import { withBase } from '@/lib/basePath';

const languages = [
  { code: 'EN', lang: 'en', name: 'English' },
  { code: 'BM', lang: 'ms', name: 'Bahasa Melayu' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('BM'); // UI state only; content is not translated yet

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

          {/* Following a link closes the mobile menu (matters for #anchors on the same page) */}
          <nav className={open ? 'menu open' : 'menu'} onClick={(e) => e.target.closest('a') && setOpen(false)}>
            <ul>
              {navLinks.map((link) =>
                link.children ? (
                  <NavDropdown key={link.href} link={link} />
                ) : (
                  <li key={link.href}>
                    <a href={withBase(link.href)}>{link.label}</a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Language selector: visual only for now, no translation wired up */}
          <div className="lang-switch" role="group" aria-label="Bahasa">
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

// Nav link with a dropdown. On desktop the panel opens on hover (CSS) or with the arrow button;
// Escape, clicking outside or tabbing away closes it. In the mobile menu the items are always listed.
function NavDropdown({ link }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const closeOutside = (e) => !itemRef.current.contains(e.target) && setOpen(false);
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  return (
    <li
      ref={itemRef}
      className={open ? 'has-sub sub-open' : 'has-sub'}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          buttonRef.current.focus();
        }
      }}
      onBlur={(e) => !itemRef.current.contains(e.relatedTarget) && setOpen(false)}
    >
      <a href={withBase(link.href)}>{link.label}</a>
      <button
        ref={buttonRef}
        type="button"
        className="sub-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Submenu ${link.label}`}
        onClick={() => setOpen(!open)}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul className="submenu" id={panelId}>
        {link.children.map((child) => (
          <li key={child.href}>
            <a href={withBase(child.href)} onClick={() => setOpen(false)}>
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
