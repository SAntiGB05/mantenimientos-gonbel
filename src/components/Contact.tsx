import { useState } from 'react';
import { whatsappUrlWithText } from '../constants';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [appliance, setAppliance] = useState('Lavadora');
  const [message, setMessage] = useState('');

  const sendWhatsapp = () => {
    const lines = [
      'Hola Mantenimientos Gonbel, quiero solicitar un servicio.',
      name ? `Nombre: ${name}` : null,
      phone ? `Teléfono: ${phone}` : null,
      `Equipo: ${appliance}`,
      message ? `Detalle: ${message}` : null,
    ].filter(Boolean);
    window.open(whatsappUrlWithText(lines.join('\n')), '_blank');
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact__text">
        <span className="contact__eyebrow">Contacto</span>
        <h2 className="contact__title">Cuéntanos qué necesitas, te respondemos por WhatsApp.</h2>
        <p className="contact__paragraph">
          Completa el formulario y te contactaremos para coordinar la visita técnica a domicilio.
        </p>

        <div className="contact__info">
          <div className="contact__info-row">
            <div className="contact__info-icon">✆</div>
            <div>
              <div className="contact__info-label">Teléfono / WhatsApp</div>
              <div className="contact__info-value">+57 320 344 4654</div>
            </div>
          </div>
          <div className="contact__info-row">
            <div className="contact__info-icon">⚲</div>
            <div>
              <div className="contact__info-label">Ubicación</div>
              <div className="contact__info-value">Quimbaya, Quindío</div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__form">
        <div className="contact__field">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>

        <div className="contact__field">
          <label>Teléfono</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Tu número de contacto"
          />
        </div>

        <div className="contact__field">
          <label>Equipo</label>
          <select value={appliance} onChange={(e) => setAppliance(e.target.value)}>
            <option value="Lavadora">Lavadora</option>
            <option value="Estufa">Estufa</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="contact__field">
          <label>Cuéntanos qué pasa</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe el problema o el servicio que necesitas"
            rows={4}
          />
        </div>

        <button onClick={sendWhatsapp} className="contact__submit">
          Enviar por WhatsApp
        </button>
      </div>
    </section>
  );
}
