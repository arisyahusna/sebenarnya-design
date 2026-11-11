'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { navLinks } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);

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
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
