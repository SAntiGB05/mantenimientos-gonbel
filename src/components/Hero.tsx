import { useEffect, useState } from 'react';
import { WHATSAPP_URL } from '../constants';
import './Hero.css';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className={`hero__left ${visible ? 'hero__left--visible' : ''}`}>
        <h1 className="hero__title">
          Mantenimiento y reparación de lavadoras y estufas en Armenia y todo el Quindío.
        </h1>

        <p className="hero__paragraph">
          Diagnóstico preciso, técnicos capacitados y repuestos de calidad para que recuperes tus
          electrodomésticos sin gastar en reemplazos. Atendemos en tu domicilio, con garantía en
          cada trabajo.
        </p>

        <div className="hero__ctas">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hero__cta-solid">
            Solicitar servicio
          </a>
          <a href="#servicios" className="hero__cta-link">
            Ver servicios →
          </a>
        </div>

        <div className="hero__stats">
          <div>
            <div className="hero__stat-value">9</div>
            <div className="hero__stat-label">municipios cubiertos</div>
          </div>
          <div>
            <div className="hero__stat-value">100%</div>
            <div className="hero__stat-label">servicio a domicilio</div>
          </div>
          <div>
            <div className="hero__stat-value">Garantía</div>
            <div className="hero__stat-label">en cada trabajo</div>
          </div>
        </div>
      </div>

      <div className={`hero__right ${visible ? 'hero__right--visible' : ''}`}>
        <div className="hero__media">
          <div className="hero__shape hero__shape--square" />
          <div className="hero__shape hero__shape--circle" />
          <div className="hero__shape hero__shape--diamond" />
          <div className="hero__shape hero__shape--ring" />

          <div className="hero__photo-wrap">
            <div className="hero__shape hero__shape--blob" />
            <img
              src="/assets/hero-tecnico.png"
              alt="Técnico de Mantenimientos Gonbel listo para reparar estufas y lavadoras a domicilio"
              width={650}
              height={417}
              decoding="async"
              className="hero__photo"
            />
          </div>

          <div className="hero__float-card">
            <div className="hero__float-icon">✓</div>
            <div>
              <div className="hero__float-title">Diagnóstico confiable</div>
              <div className="hero__float-subtitle">Técnicos capacitados y repuestos de calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
