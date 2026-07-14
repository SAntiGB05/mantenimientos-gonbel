import { whatsappUrlWithText } from '../constants';
import './Services.css';

const SERVICE_WHATSAPP_TEXT = 'Hola Mantenimientos Gonbel, quisiera más información sobre sus servicios.';

function openServiceWhatsapp() {
  window.open(whatsappUrlWithText(SERVICE_WHATSAPP_TEXT), '_blank');
}

const SERVICES = [
  {
    title: 'Mantenimiento preventivo',
    description:
      'Limpieza interna, inspección de componentes y ajustes mecánicos para evitar daños futuros y prolongar la vida útil de tu equipo.',
    icon: <div className="services__icon-ring" />,
  },
  {
    title: 'Reparación especializada',
    description:
      'Diagnóstico y reparación de fallas mecánicas, eléctricas y electrónicas con herramientas profesionales y repuestos de calidad.',
    icon: <div className="services__icon-diamond" />,
  },
  {
    title: 'Diagnóstico técnico profesional',
    description:
      'Inspección completa antes de intervenir el equipo, para ofrecerte transparencia y una solución acorde a la falla real.',
    icon: <div className="services__icon-square" />,
  },
  {
    title: 'Instalación y puesta en marcha',
    description:
      'Instalación segura con verificación técnica y pruebas de funcionamiento antes de entregarte el equipo.',
    icon: <div className="services__icon-circle" />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__heading">
        <span className="services__eyebrow">Servicios</span>
        <h2 className="services__title">
          Todo lo que tu estufa o lavadora necesita, en un solo lugar.
        </h2>
        <p className="services__paragraph">
          Diagnóstico, reparación, mantenimiento e instalación, con garantía sobre cada trabajo
          realizado.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <div key={service.title} onClick={openServiceWhatsapp} className="services__card">
            <div className="services__icon-box">{service.icon}</div>
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
