import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function ParallaxSection({
  id,
  number,
  eyebrow,
  title,
  text,
  cta,
  image,
  align = 'left',
}) {
  const ref = useReveal();

  return (
    <section className={`parallax align-${align}`} id={id}>
      <div
        className="parallax-bg"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="parallax-inner">
        <div className="parallax-content reveal" ref={ref}>
          {number && <div className="parallax-num">{number}</div>}
          <span className="eyebrow parallax-eyebrow">— {eyebrow}</span>
          <h2 className="parallax-title">{title}</h2>
          <div className="parallax-divider" />
          <p className="parallax-text">{text}</p>
          {cta && (
            <Link to={cta.to} className="btn">
              {cta.label}
              <svg className="arrow" width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M1 5h16m0 0L13 1m4 4l-4 4" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
