import useReveal from '../hooks/useReveal';
import perfilImg from '../assets/Perfil.jpg'

export default function About() {
  const ref = useReveal();

  return (
    <section className="about" id="doctor">
      <div className="about-inner">
        <div
          className="about-visual"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(36,55,70,0) 55%, rgba(18,29,38,0.92) 100%), url(${perfilImg})`
          }}
          aria-hidden="true"
        />
        <div className="reveal" ref={ref}>
          <span className="eyebrow about-eyebrow">— El Profesional</span>
          <h2 className="about-title">
            Dr. Pablo <em>Abate</em>
          </h2>
          <div className="about-text">
            <p>
              El Dr. Pablo Abate es médico Especialista en Medicina Estética graduado en la Universidad de Buenos Aires, con una sólida formación académica y una extensa trayectoria en técnicas avanzadas y mínimamente invasivas, se especializa en lograr resultados estéticos que resaltan la belleza natural, priorizando siempre la seguridad y el bienestar del paciente.
            </p>
            <p>
              Como miembro activo de la Sociedad Argentina de Especialistas en Medicina Estética (SAEME), el Dr. Abate está comprometido con la innovación en su campo, utilizando técnicas y tecnologías de última generación para ofrecer tratamientos personalizados que buscan mejorar tanto la apariencia como la confianza de cada paciente.
            </p>
            <p>
              Además de su labor en consultorio, colabora como docente en cursos de formación y capacitación, compartiendo su experiencia con otros profesionales médicos de distintas especialidades.
            </p>
            <p>
              Su enfoque busca proporcionar resultados naturales, armónicos y seguros, ayudando a sus pacientes a verse y sentirse mejor.
            </p>
          </div>
          
           <a className="btn about-cta"
             href="https://www.linkedin.com/in/pablo-abate-112623132"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
            </svg>
            Ver perfil en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}