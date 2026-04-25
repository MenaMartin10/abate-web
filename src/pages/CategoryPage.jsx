import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { categories, treatments } from '../data/treatments';
import useReveal from '../hooks/temp';

import facialImg from '../assets/Facial.jpg';
import estudioImg from '../assets/Estudio.jpg';
import capilarImg from '../assets/Capilar.jpg';

const fallbackByCategory = {
  faciales: facialImg,
  corporales: estudioImg,
  capilares: capilarImg,
};

export default function CategoryPage() {
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  const catKey = Object.keys(categories).find(
    k => `/${categories[k].slug}` === location.pathname
  );
  const category = categories[catKey];

  if (!category) return null;

  // Capilares es página especial (un solo tratamiento con sus técnicas)
  if (catKey === 'capilares') {
    return <CapilaresPage category={category} />;
  }

  const list = Object.entries(treatments).filter(
    ([slug, t]) => t.category === catKey && slug !== 'tratamientos-capilares'
  );

  return (
    <section className="cap-page">

      {/* Hero centrado */}
      <div className="cap-hero">
        <div
          className="cap-hero-bg"
          style={{ backgroundImage: `url(${fallbackByCategory[catKey]})` }}
        />
        <div className="cap-hero-inner">
          <Link to="/" className="breadcrumb">← Inicio</Link>
          <span className="eyebrow">— {category.eyebrow}</span>
          <h1 className="cap-hero-title">{category.title}</h1>
          <div className="cap-divider" />
          <p className="cap-hero-intro">{category.intro}</p>
        </div>
      </div>

      {/* Grid de cards de tratamientos */}
      <div className="cap-grid">
        {list.map(([slug, t], i) => (
          <CategoryCard
            key={slug}
            slug={slug}
            treatment={t}
            index={i}
            image={t.image || fallbackByCategory[t.category]}
          />
        ))}
      </div>

    </section>
  );
}

// ============================================================
// Card de cada tratamiento (estilo unificado con capilares)
// ============================================================
function CategoryCard({ slug, treatment, index, image }) {
  const ref = useReveal();
  const num = String(index + 1).padStart(2, '0');

  return (
    <Link to={`/${slug}`} className="cap-card cap-card-link reveal" ref={ref}>

      <div className="cap-card-image">
        <img src={image} alt={treatment.title} />
        <div className="cap-card-num">{num}</div>
      </div>

      <div className="cap-card-body">
        <span className="eyebrow">— Ver tratamiento</span>
        <h3 className="cap-card-title">{treatment.title}</h3>
        <div className="cap-card-divider" />

        {treatment.intro && (
          <p className="cap-card-excerpt">
            {treatment.intro.length > 180
              ? treatment.intro.slice(0, 180) + '…'
              : treatment.intro}
          </p>
        )}

        <div className="cap-card-footer">
          <span className="cap-card-toggle">
            Conocer más +
          </span>
        </div>
      </div>
    </Link>
  );
}

// ============================================================
// PÁGINA ESPECIAL: TRATAMIENTOS CAPILARES con cards modernas
// ============================================================
function CapilaresPage({ category }) {
  const treatment = treatments['tratamientos-capilares'];

  return (
    <section className="cap-page">

      <div className="cap-hero">
        {treatment.image && (
          <div
            className="cap-hero-bg"
            style={{ backgroundImage: `url(${treatment.image})` }}
          />
        )}
        <div className="cap-hero-inner">
          <Link to="/" className="breadcrumb">← Inicio</Link>
          <span className="eyebrow">— {category.eyebrow}</span>
          <h1 className="cap-hero-title">{treatment.title}</h1>
          <div className="cap-divider" />
          <p className="cap-hero-intro">{treatment.intro}</p>
        </div>
      </div>

      <div className="cap-grid">
        {treatment.techniques.map((tech, i) => (
          <CapTechCard key={tech.title} technique={tech} index={i} />
        ))}
      </div>

      <div className="cap-cta">
        <span className="eyebrow">— ¿Tenés dudas?</span>
        <h3 className="cap-cta-title">Coordiná tu consulta personalizada</h3>
        <p className="cap-cta-text">
          Escribinos por WhatsApp y te asesoramos sobre el tratamiento ideal para vos.
        </p>
        <div className="cap-cta-actions">
          <Link to="/" className="btn btn-ghost">← Volver al inicio</Link>
          
            <a href="https://wa.me/5491164343578?text=Hola!%20Quer%C3%ADa%20hacer%20una%20consulta%20capilar."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Reservar consulta
          </a>
        </div>
      </div>

    </section>
  );
}

function CapTechCard({ technique, index }) {
  const ref = useReveal();
  const [expanded, setExpanded] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="cap-card reveal" ref={ref}>

      {technique.image && (
        <div className="cap-card-image">
          <img src={technique.image} alt={technique.title} />
          <div className="cap-card-num">{num}</div>
        </div>
      )}

      <div className="cap-card-body">
        <span className="eyebrow">— Técnica {num}</span>
        <h3 className="cap-card-title">{technique.title}</h3>
        <div className="cap-card-divider" />

        {technique.content && technique.content[0]?.type === 'p' && (
          <p className="cap-card-excerpt">
            {technique.content[0].text.length > 200 && !expanded
              ? technique.content[0].text.slice(0, 200) + '…'
              : technique.content[0].text}
          </p>
        )}

        {expanded && technique.content && (
          <div className="cap-card-full">
            {technique.content.slice(1).map((block, i) => {
              if (block.type === 'p') return <p key={i}>{block.text}</p>;
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="tech-list">
                    {block.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                );
              }
              return null;
            })}

            {technique.benefits && technique.benefits.length > 0 && (
              <div className="tech-benefits">
                <h3>¿Para qué sirve?</h3>
                <ul>
                  {technique.benefits.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="cap-card-footer">
          {technique.duration && (
            <span className="tech-duration">Duración: {technique.duration}</span>
          )}

          {technique.content && technique.content.length > 1 && (
            <button
              className="cap-card-toggle"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Ver menos −' : 'Ver más +'}
            </button>
          )}

          {technique.waLink && (
            
              <a href={technique.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn cap-card-cta"
            >
              Reservar cita
            </a>
          )}
        </div>
      </div>
    </article>
  );
}