import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { treatments, categories } from '../data/treatments';

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = treatments[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!treatment) {
    return (
      <section className="treatment-notfound">
        <h1>Tratamiento no encontrado</h1>
        <Link to="/" className="btn">Volver al inicio</Link>
      </section>
    );
  }

  const category = categories[treatment.category];

  // Otros tratamientos de la misma categoría (excluyendo el actual)
  const otherTreatments = Object.entries(treatments).filter(
    ([s, t]) => t.category === treatment.category && s !== slug && s !== 'tratamientos-capilares'
  );

  return (
    <div className="treatment-page">

      <section className="treatment-hero-wrap">
        {treatment.image && (
          <div
            className="treatment-hero-bg"
            style={{ backgroundImage: `url(${treatment.image})` }}
          />
        )}
        <div className="treatment-hero-inner">
          <Link to={`/${category.slug}`} className="breadcrumb">
            ← {category.title}
          </Link>
          <h1 className="treatment-main-title">{treatment.title}</h1>
          <div className="treatment-divider-hero" />
          <p className="treatment-main-intro">{treatment.intro}</p>
        </div>
      </section>

      {treatment.techniques.length > 0 ? (
        <section className="treatment-techniques">
          {treatment.techniques.map((tech, i) => (
            <TechniqueBlock key={tech.title} technique={tech} index={i} />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <p>Contenido en preparación.</p>
        </div>
      )}

      {/* ---- Bloque final de navegación ---- */}
      <TreatmentFooter
        category={category}
        otherTreatments={otherTreatments}
      />

    </div>
  );
}

function TechniqueBlock({ technique, index }) {
  const num = String(index + 1).padStart(2, '0');
  const hasImage = Boolean(technique.image);

  return (
    <article className={`tech-block ${!hasImage ? 'no-image' : ''}`}>

      {hasImage && (
        <div className="tech-image-wrap" data-num={num}>
          <div className="tech-image">
            <img src={technique.image} alt={technique.title} />
          </div>
        </div>
      )}

      <div className="tech-content">
        <span className="tech-eyebrow">— Técnica {num}</span>
        <h2 className="tech-title">{technique.title}</h2>
        <div className="tech-divider" />

        <div className="tech-text">
          {technique.content && technique.content.map((block, i) => {
            if (block.type === 'p') {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="tech-list">
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {technique.benefits && technique.benefits.length > 0 && (
          <div className="tech-benefits">
            <h3>¿Para qué sirve?</h3>
            <ul>
              {technique.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        )}

        <div className="tech-footer">
          {technique.duration && (
            <span className="tech-duration">
              Duración: {technique.duration}
            </span>
          )}
          {technique.waLink && (
            
              <a href={technique.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn tech-cta"
            >
              Reservar cita
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function TreatmentFooter({ category, otherTreatments }) {
  return (
    <section className="treatment-footer-nav">
      <div className="treatment-footer-inner">

        {/* Call to action grande */}
        <div className="treatment-cta-block">
          <span className="tech-eyebrow">— ¿Tenés dudas?</span>
          <h3 className="treatment-cta-title">
            Coordiná tu consulta personalizada
          </h3>
          <p className="treatment-cta-text">
            Escribinos por WhatsApp y te asesoramos para elegir el tratamiento que mejor se adapta a vos.
          </p>
          <div className="treatment-cta-actions">
            <Link to={`/${category.slug}`} className="btn btn-ghost">
              ← Volver a {category.title}
            </Link>
            
              <a href="https://wa.me/5491164343578?text=Hola!%20Quer%C3%ADa%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Reservar consulta
            </a>
          </div>
        </div>

        {/* Otros tratamientos de la misma categoría */}
       {otherTreatments.length > 0 && (
  <div className="treatment-other">
    <span className="tech-eyebrow">— Otros tratamientos</span>
    <div className="treatment-other-grid">
      {otherTreatments.map(([s, t]) => (
        <Link key={s} to={`/${s}`} className="other-card">
          {t.image && (
            <div
              className="other-card-image"
              style={{ backgroundImage: `url(${t.image})` }}
            />
          )}
          <div className="other-card-body">
            <h4>{t.title}</h4>
            <span className="other-arrow">Ver más →</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
)}

      </div>
    </section>
  );
}