import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

export default function Navbar({ facialesMenu, corporalesMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src={logo} alt="Pablo Abate — Medicina Estética" />
        </Link>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>

          {/* Header del menú mobile (solo visible en mobile) */}
          <li className="nav-menu-header">
            <span className="nav-menu-eyebrow">— Menú</span>
            <h3 className="nav-menu-title">Tratamientos</h3>
          </li>

          <li className={`nav-item ${openDropdown === 'f' ? 'open' : ''}`}>
            <span className="nav-link" onClick={() => toggleDropdown('f')}>
              <span className="nav-num">01</span>
              <Link to="/tratamientos-faciales" onClick={closeAll}>Tratamientos Faciales</Link>
              <span className="nav-caret" />
            </span>
            <div className="nav-dropdown">
              {facialesMenu.map(i => (
                <Link key={i.label} to={i.to} onClick={closeAll}>{i.label}</Link>
              ))}
            </div>
          </li>

          <li className={`nav-item ${openDropdown === 'c' ? 'open' : ''}`}>
            <span className="nav-link" onClick={() => toggleDropdown('c')}>
              <span className="nav-num">02</span>
              <Link to="/tratamientos-corporales" onClick={closeAll}>Tratamientos Corporales</Link>
              <span className="nav-caret" />
            </span>
            <div className="nav-dropdown">
              {corporalesMenu.map(i => (
                <Link key={i.label} to={i.to} onClick={closeAll}>{i.label}</Link>
              ))}
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/tratamientos-capilares" onClick={closeAll}>
              <span className="nav-num">03</span>
              Tratamientos Capilares
            </Link>
          </li>

          {/* Footer del menú mobile */}
          <li className="nav-menu-footer">
            
             <a href="https://wa.me/5491164343578?text=Hola!%20Quer%C3%ADa%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn nav-menu-cta"
              onClick={closeAll}
            >
              Reservar consulta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            <div className="nav-menu-info">
              <p className="nav-menu-info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                Tte. Cnel. Pérez 643<br />San Martín de los Andes
              </p>
              <p className="nav-menu-info-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.35 1.77.68 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.48a2 2 0 012.11-.45c.83.33 1.7.56 2.6.68A2 2 0 0122 16.92z" />
                </svg>
                +54 9 11 6434-3578
              </p>
            </div>

            <div className="nav-menu-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l.5-4H13V7.5c0-1 .3-1.5 1.7-1.5H17V2.2C16.6 2.1 15.4 2 14 2c-2.8 0-4.5 1.7-4.5 4.7V10H7v4h2.5v8H13z" />
                </svg>
              </a>
            </div>
          </li>
        </ul>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Overlay oscuro detrás del menú */}
      <div
        className={`nav-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeAll}
      />
    </>
  );
}