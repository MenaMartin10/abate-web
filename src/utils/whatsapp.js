// Helper para generar links de WhatsApp con texto personalizado
const PHONE = '5491164343578';

export function whatsappLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// Para una técnica específica
export function whatsappForTechnique(title) {
  return whatsappLink(`Hola! Quiero más info sobre ${title}.`);
}

// Para una consulta general (si lo querés usar en otros lados)
export function whatsappForConsulta() {
  return whatsappLink('Hola! Quería hacer una consulta.');
}