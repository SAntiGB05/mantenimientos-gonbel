import { WHATSAPP_URL } from '../constants';
import './Coverage.css';

const MUNICIPALITIES = [
  'Armenia',
  'Buenavista',
  'Calarcá',
  'Circasia',
  'Filandia',
  'La Tebaida',
  'Montenegro',
  'Quimbaya',
  'Salento',
];

export default function Coverage() {
  return (
    <section id="cobertura" className="coverage">
      <div className="coverage__text">
        <span className="coverage__eyebrow">Cobertura</span>
        <h2 className="coverage__title">
          Mantenimiento de lavadoras y estufas en todo el Quindío.
        </h2>
        <p className="coverage__paragraph">
          Nuestro servicio es principalmente a domicilio: nos desplazamos hasta la ubicación del
          cliente en cualquiera de estos municipios.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="coverage__cta">
          Consultar disponibilidad
        </a>
      </div>

      <div className="coverage__grid">
        {MUNICIPALITIES.map((name) => (
          <div
            key={name}
            className={`coverage__chip ${name === 'Quimbaya' ? 'coverage__chip--highlight' : ''}`}
          >
            <span className="coverage__chip-dot" />
            <span className="coverage__chip-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
