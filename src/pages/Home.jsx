import Hero from '../components/Hero'
import ParallaxSection from '../components/temp'
import About from '../components/About'
import ContactForm from '../components/ContactForm'

import facialImg from '../assets/Facial.jpg'
import capilarImg from '../assets/Capilar.jpg'
import estudioImg from '../assets/Estudio.jpg'

export default function Home() {
  return (
    <>
      <Hero />

      <ParallaxSection
        id="faciales"
        number="01"
        eyebrow="Rostro"
        title="Tratamientos Faciales"
        text="Descubrí las características y beneficios de nuestros tratamientos faciales para rejuvenecer tu rostro y mejorar el aspecto de tu piel. Cada tratamiento está diseñado con técnicas de última generación para ofrecerte resultados visibles, mejorando la textura y luminosidad de tu piel con un enfoque personalizado."
        cta={{ label: 'Ver más', to: '/tratamientos-faciales' }}
        image={facialImg}
        align="left"
      />

      <ParallaxSection
        id="capilares"
        number="02"
        eyebrow="Cabello"
        title="Tratamientos Capilares"
        text="Recuperá la densidad y fortaleza de tu pelo con los tratamientos de medicina regenerativa capilar de última generación, diseñados para estimular el crecimiento natural y revitalizar tu pelo desde la raíz."
        cta={{ label: 'Ver más', to: '/tratamientos-capilares' }}
        image={capilarImg}
        align="right"
      />

      <ParallaxSection
        id="corporales"
        number="03"
        eyebrow="Cuerpo"
        title="Tratamientos Corporales"
        text="Conocé las características y beneficios de cada tratamiento para mejorar el aspecto de la piel de tu cuerpo."
        cta={{ label: 'Ver más', to: '/tratamientos-corporales' }}
        image={estudioImg}
        align="left"
      />

      <About />
      <ContactForm />
    </>
  )
}