import logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="Logo Pablo Abate" className="logo-img" />
          </div>
          <p>Encontrá tu mejor versión</p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/esteticaabate/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/esteticaabate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h3l.5-4H13V7.5c0-1 .3-1.5 1.7-1.5H17V2.2C16.6 2.1 15.4 2 14 2c-2.8 0-4.5 1.7-4.5 4.7V10H7v4h2.5v8H13z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-info">
          <h4>Dónde estamos</h4>

          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" />
              <circle cx="12" cy="9" r="3" />
            </svg>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Tte.+Cnel.+P%C3%A9rez+643+San+Mart%C3%ADn+de+los+Andes+Neuqu%C3%A9n"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tte. Cnel. Pérez 643<br />
              San Martín de los Andes, Neuquén
            </a>
          </p>

          <p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.35 1.77.68 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.48a2 2 0 012.11-.45c.83.33 1.7.56 2.6.68A2 2 0 0122 16.92z" />
            </svg>

            <a href="tel:+5491164343578">+54 9 11 6434-3578</a>
          </p>
        </div>

        <div>
          <h4>El consultorio</h4>

          <iframe
            className="footer-map"
            src="https://www.google.com/maps?q=Tte.%20Cnel.%20P%C3%A9rez%20643%2C%20San%20Mart%C3%ADn%20de%20los%20Andes%2C%20Neuqu%C3%A9n&output=embed"
            loading="lazy"
            title="Ubicación del consultorio en Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Pablo Abate — Medicina Estética</span>
        <span className="developer-credit">
          by{" "}
          <a
            href="https://portfolio-mena.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio de Martín Mena"
          >
           Martín Mena
          </a>{" "}
          Web Developer
        </span>
      </div>
    </footer>
  );
}