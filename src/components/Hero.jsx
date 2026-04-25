import heroImg from '../assets/InicioFondo.jpg'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18,29,38,0.55) 0%, rgba(36,55,70,0.75) 100%), url(${heroImg})`
        }}
      />
      
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="eyebrow">Centro de Medicina Estética</span>
        </div>
        <h1 className="hero-title">
          <span>Descubrí</span>
          <span>tu mejor</span>
          <span><em>versión</em>.</span>
        </h1>
        <p className="hero-text">
          En el Centro de Medicina Estética Pablo Abate, nos especializamos en ofrecer tratamientos mínimamente invasivos de alta gama, diseñados para mejorar el bienestar y realzar la belleza natural de nuestros pacientes. Combinamos un enfoque científico riguroso con una atención profundamente humana, para ayudarte a alcanzar tu mejor versión de manera segura y personalizada.
        </p>
        <div className="hero-actions">
          <a href="#faciales" className="btn">
            Ver tratamientos
            <svg className="arrow" width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5h16m0 0L13 1m4 4l-4 4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}