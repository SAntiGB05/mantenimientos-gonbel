import { useEffect, useState } from 'react';
import { WHATSAPP_URL } from '../constants';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__brand">
          <img
            src="/assets/logo-light.png"
            alt="Mantenimientos Gonbel"
            width={57}
            height={30}
            className="navbar__logo"
          />
          <div className="navbar__wordmark">
            Mantenimientos <span>Gonbel</span>
          </div>
        </div>

        <nav className="navbar__links navbar__desktop-only">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="navbar__cta navbar__desktop-only"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
          className="navbar__hamburger"
        >
          <div className="navbar__hamburger-lines">
            <span className={menuOpen ? 'navbar__line navbar__line--top-open' : 'navbar__line'} />
            <span className={menuOpen ? 'navbar__line navbar__line--mid-open' : 'navbar__line'} />
            <span className={menuOpen ? 'navbar__line navbar__line--bottom-open' : 'navbar__line'} />
          </div>
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mobile-menu__cta">
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
