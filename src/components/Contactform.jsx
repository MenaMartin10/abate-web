import { useState } from 'react';
import useReveal from '../hooks/useReveal';

// Número de WhatsApp (sin + ni guiones)
const PHONE = '5491164343578';

export default function ContactForm() {
  const ref = useReveal();
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    celular: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, celular, mensaje } = form;
    const lines = [
      `Hola! Me gustaría coordinar una consulta.`,
      ``,
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      `Celular: ${celular}`,
    ];
    if (mensaje.trim()) {
      lines.push('', `Consulta: ${mensaje}`);
    }
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-inner reveal" ref={ref}>
        <span className="eyebrow contact-eyebrow">— Contacto</span>
        <h2 className="contact-title">
          Reservá tu <em>consulta</em>
        </h2>
        <p className="contact-subtitle">
          Dejanos tus datos y te responderemos directamente por WhatsApp.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="celular">Celular</label>
            <input
              id="celular"
              name="celular"
              type="tel"
              required
              value={form.celular}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>

          <div className="field">
            <label htmlFor="mensaje">
              Tu consulta<span className="opt">(opcional)</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="3"
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn">
              Enviar por WhatsApp
              <svg className="arrow" width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M1 5h16m0 0L13 1m4 4l-4 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
