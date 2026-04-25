import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import TreatmentPage from './pages/TreatmentPage'

const facialesMenu = [
  { label: 'Manchas y/o Secuelas de Acné', to: '/manchas-acne' },
  { label: 'Limpieza e Hidratación', to: '/limpieza-hidratacion' },
  { label: 'Arrugas', to: '/arrugas' },
  { label: 'Bruxismo', to: '/bruxismo' },
  { label: 'Flacidez Facial', to: '/flacidez-facial' },
  { label: 'Luminosidad', to: '/luminosidad' },
]

const corporalesMenu = [
  { label: 'Adiposidad Localizada', to: '/adiposidad-localizada' },
  { label: 'Celulitis', to: '/celulitis' },
  { label: 'Flacidez', to: '/flacidez-corporal' },
  { label: 'Hiperhidrosis', to: '/hiperhidrosis' },
  { label: 'Várices y Arañitas', to: '/varices-aranitas' },
]

export default function App() {
  return (
    <>
      <Navbar facialesMenu={facialesMenu} corporalesMenu={corporalesMenu} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos-faciales" element={<CategoryPage />} />
          <Route path="/tratamientos-corporales" element={<CategoryPage />} />
          <Route path="/tratamientos-capilares" element={<CategoryPage />} />
          <Route path="/:slug" element={<TreatmentPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}