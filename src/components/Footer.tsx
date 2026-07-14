import { WHATSAPP_URL } from '../constants';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <img
              src="/assets/logo-color.png"
              alt="Mantenimientos Gonbel"
              width={74}
              height={38}
              loading="lazy"
              className="footer__logo"
            />
            <div className="footer__brand-name">Mantenimientos Gonbel</div>
          </div>
          <p className="footer__brand-description">
            Cuidamos tus electrodomésticos como si fueran nuestros. Servicio técnico a domicilio
            en todo el Quindío.
          </p>
        </div>

        <div className="footer__column">
          <div className="footer__column-title">Navegación</div>
          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#servicios">Servicios</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer__column">
          <div className="footer__column-title">Contacto</div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener">
            +57 320 344 4654
          </a>
          <span>Quimbaya, Quindío</span>
          <span>Cobertura en todo el Quindío</span>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <span>© 2026 Mantenimientos Gonbel. Todos los derechos reservados.</span>
        <span>
          Quimbaya · Armenia · Calarcá · Circasia · Filandia · La Tebaida · Montenegro · Salento ·
          Buenavista
        </span>
      </div>
    </footer>
  );
}
