import manchasImg from '../assets/Manchas.jpg'
import microImg from '../assets/Microneedling.jpeg'
import protocoloImg from '../assets/Protocolos.jpg'
import vampireImg from '../assets/Vampire.jpg'
import prpImg from '../assets/PRP.jpg'
import glowImg from '../assets/InstantGlow.jpg'
import skinImg from '../assets/Skin.jpg'
import mesoImg from '../assets/Mesoterapia.jpg'
import arrugasImg from '../assets/Arrugas.jpeg'
import toxinaImg from '../assets/Toxina.jpg'
import acidoImg from '../assets/Acido.jpeg'
import pabloImg from '../assets/PabloEstudio.jpg'
import hiloImg from '../assets/Hilo.jpeg'
import bandasImg from '../assets/Bandas.jpg'
import cuerpoImg from '../assets/Cuerpo.jpeg'
import mesocImg from '../assets/MesoterapiaCorporal.jpg'
import bandastensorasImg from '../assets/BandasTensoras.jpg'
import fleboImg from '../assets/Flebo.jpeg'
import capilarImg from '../assets/Capilar.jpg'
import protocolo2Img from '../assets/Protocolo.jpg'
import hiperImg from '../assets/Hiper.jpeg'

export const categories = {
  faciales: {
    title: 'Tratamientos Faciales',
    slug: 'tratamientos-faciales',
    eyebrow: 'Rostro',
    intro: 'Descubrí las características y beneficios de nuestros tratamientos faciales para rejuvenecer tu rostro y mejorar el aspecto de tu piel. Cada tratamiento está diseñado con técnicas de última generación para ofrecerte resultados visibles.',
  },
  corporales: {
    title: 'Tratamientos Corporales',
    slug: 'tratamientos-corporales',
    eyebrow: 'Cuerpo',
    intro: 'Conocé las características y beneficios de cada tratamiento para mejorar el aspecto de la piel de tu cuerpo.',
  },
  capilares: {
    title: 'Tratamientos Capilares',
    slug: 'tratamientos-capilares',
    eyebrow: 'Cabello',
    intro: 'Recuperá la densidad y fortaleza de tu pelo con los tratamientos de medicina regenerativa capilar de última generación, diseñados para estimular el crecimiento natural y revitalizar tu pelo desde la raíz.',
  },
};

// ============================================================
// CÓMO AGREGAR UNA TÉCNICA NUEVA
// ============================================================
// Copiá y pegá este bloque dentro del array "techniques" de cualquier tratamiento:
//
//   {
//     title: 'NOMBRE DE LA TÉCNICA',
//     content: [
//       { type: 'p', text: 'Primer párrafo.' },
//       { type: 'p', text: 'Otro párrafo.' },
//       { type: 'ul', items: [
//         'Ítem 1 de la lista',
//         'Ítem 2 de la lista',
//       ]},
//       { type: 'p', text: 'Párrafo final.' },
//     ],
//     benefits: [
//       'Beneficio 1',
//       'Beneficio 2',
//     ],
//     duration: '40 minutos',
//     waLink: 'https://wa.link/xxxxxx',
//   },
// ============================================================

export const treatments = {

  // ---------------- FACIALES ----------------

  'manchas-acne': {
    title: 'Manchas y/o Secuelas de Acné',
    category: 'faciales',
    image: manchasImg,
    intro: 'Tratamientos especializados para atenuar manchas, marcas y cicatrices causadas por el acné, mejorando la textura y apariencia de la piel.',
    techniques: [
      {
        title: 'Peeling',
        image: manchasImg,
        content: [
          { type: 'p', text: 'El peeling químico consiste en aplicar sobre la superficie de la piel a tratar una serie de productos – ácidos-, con el fin de estimular la piel para que se regenere, favoreciendo la eliminación de capas  viejas de la piel y así exponiendo una piel más nueva y joven. Cuanto más profundo es el peeling, mejores serán los resultados que se obtendrán y mayor será el pelado de la piel después del tratamiento.' },
          { type: 'p', text: 'Existen diferentes tipos de peelings:' },
          { type: 'ul', items: [
            'Peeling superficial: para reducir poros, acné y reactivar la piel joven y dar brillo.',
            'Peeling medio: para tratar manchas, arrugas finas y cicatrices.',
            'Peeling profundo: para tratar el envejecimiento severo.',
          ]},
          { type: 'p', text: 'Luego de un análisis meticuloso del caso, determinaremos qué tipo de peeling es el más adecuado para tu tipo de piel y el objetivo deseado.' },
        ],
        benefits: [
          'Da luminosidad',
          'Controla algunos tipos de acné',
          'Hidrata la piel',
          'Aclara manchas',
          'Atenúa arrugas',
          'Afina los poros dilatados',
          'Mejora la piel marchita',
        ],
        duration: '40 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'PRP',
        image: prpImg,
        content: [
          { type: 'p', text: 'El plasma rico en plaquetas es un tratamiento revolucionario, uno de los más avanzados que hay en la actualidad para rejuvenecer la piel del rostro y, sin dudas, el más solicitado. Esta técnica es ideal para quienes desean mejorar el aspecto de su piel y aumentar su firmeza y luminosidad. Puede aplicarse en la piel del rostro, escote, cuello y manos.' },
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que tiene la propiedad de estimular considerablemente la producción de colágeno y ácido hialurónico, dando como resultado una tez más joven, tersa y firme.' },
          { type: 'p', text: '  Los resultados se pueden apreciar luego de aproximadamente 2 semanas de realizado el tratamiento, observando el máximo efecto a las 4 semanas. Se recomienda comenzar con 3 sesiones,  1 por mes, y luego continuar con sesiones de mantenimiento cada 3-4 meses .' },
        ],
        benefits: [
          'Restaura la vitalidad cutánea',
          'Mejora la piel deshidratada',
          'Aumentar el espesor natural de la piel',
          'Recupera elasticidad',
          'Otorga luminosidad',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Microneedling',
        image: microImg,
        content: [
          { type: 'p', text: 'Es un procedimiento dermatológico mínimamente invasivo en el que se realizan múltiples micropunciones en la piel con un dispositivo que contiene microagujas (Dermapen®) y controla la profundidad de esas pequeñas incisiones. De esta manera, logramos estimular la producción de colágeno mejorando cicatrices y arrugas finas. Además, se pueden aplicar sobre la piel determinadas sustancias (ácido hialurónico, vitaminas, PRP) para que penetren más profundo.' },
          
        ],
        benefits: [
          'Mejora la textura de la piel, reduciendo la apariencia de los poros',
          'Reduce arrugas finas',
          'Disminuye cicatrices',
          'Otorga luminosidad',
        ],
        duration: '45 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Vampire Facial',
        image: vampireImg,
        content: [
          { type: 'p', text: 'Consiste en la combinación de dos tecnologías, el Plasma Rico en Plaquetas (PRP) y el Microneedling, cuya sinergia logra resultados increíbles.' },
          { type: 'p', text: 'A través del Vampire facial  se logra inducir una máxima generación de colágeno, ácido hialurónico y elastina en el área tratada que se traduce en una piel con mejor textura, luminosidad, suavidad y con arrugas atenuadas que brindan un aspecto joven y saludable.' },
          { type: 'p', text: '¿De qué se trata y cuáles son sus beneficios? Te lo contamos acá. Empecemos por su nombre, Vampiro,  cuyo vínculo con la estética sería nulo. ¿Acaso alguien querrá parecerse a un vampiro? Claro que no. Pero lo cierto es que el tratamiento se realiza utilizando una herramienta del tamaño de un bolígrafo, llamada Dermapen®, que produce decenas de micropunciones controladas favoreciendo la absorción del Plasma Rico en Plaquetas. Debido a las micropunciones, se genera parcialmente un efecto rojizo en la piel similar al de un vampiro.' },
          { type: 'p', text: '¿Y por qué me serviría realizar este tipo de tratamiento? A través del Vampire facial  se logra inducir una máxima generación de colágeno, ácido hialurónico y elastina en el área tratada que se traduce en una piel con mejor textura, luminosidad, suavidad y con arrugas atenuadas que brindan un aspecto joven y saludable.' },
        ],
        benefits: [
          'Mejora la textura de la piel',
          'Suaviza imperfecciones',
          'Disminuye arrugas',
          'Atenúa manchas causadas por el sol',
          'Aumenta la luminosidad ',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
        
      },
       {
        title: 'Protocolos Personalizados',
        image: protocoloImg,
        content: [
          { type: 'p', text: 'Luego de un meticuloso diagnóstico acerca del tipo de piel, las necesidades y objetivos terapéuticos, se procede al armado de un Protocolo personalizado, pensado específicamente para el o la paciente. Se combinan varios tratamientos y técnicas, distribuidas en sesiones (entre 5 y 10, según sea el caso).' },
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  'limpieza-hidratacion': {
    title: 'Limpieza e Hidratación',
    image: glowImg,
    category: 'faciales',
    intro: 'Tratamientos especializados para limpiar profundamente, hidratar y revitalizar la piel del rostro, mejorando su textura y luminosidad.',
    techniques: [
         {
        title: 'Peeling Instant Glow',
        image: glowImg,
        content: [
          { type: 'p', text: 'Un tratamiento ideal para aquellas personas que notan su piel apagada y sin vitalidad.' },
          { type: 'p', text: 'Es perfecto para realizar 2 días previos a un evento y darle a tu rostro la luminosidad que necesita.' },
          { type: 'P', text: 'Combina exfoliación física con punta de diamante más un ácido ultrahidratante.'},
          { type: 'p', text: 'El objetivo es que la piel se vea más fresca, radiante y con un glow único.' },
        ],
        benefits: [
          'Revitaliza la piel en una sola sesión',
          'Da luminosidad',
          'Hidrata ',
          'Afina poros dilatados',
        ],
        duration: '30 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'SkinBooster',
        image: glowImg,
        content: [
          { type: 'p', text: 'Tratamiento médico estético que consiste en la aplicación a través de microinyecciones de un gel muy suave de ácido hialurónico, logrando como resultado tonificar e hidratar la piel dando  luminosidad y elasticidad. Es por esto que está especialmente indicado para el tratamiento del crono-fotoenvejecimiento.' },
        ],
        benefits: [
          'Mejora la  calidad de la piel',
          'Aportar hidratación.',
          'Mejorar el tono',
          'Da luminosidad',
          'Mejorar la textura',
        ],
        duration: '60 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'Mesoterapia Facial',
        image: glowImg,
        content: [
          { type: 'p', text: 'Es una técnica de aplicación de principios activos mediante múltiples inyecciones superficiales en la dermis. De esta forma, la sustancia se coloca directamente en la zona afectada, consiguiendo los máximos beneficios.' },
        ],
        benefits: [
          'Mejora la calidad de la piel',
          'Hidrata y da luminosidad',
          'Aporta nutrientes y antioxidantes',
        ],
        duration: '60 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'Protocolos Personalizados',
        image: protocoloImg,
        content: [
          { type: 'p', text: 'Luego de un meticuloso diagnóstico acerca del tipo de piel, las necesidades y objetivos terapéuticos, se procede al armado de un Protocolo personalizado, pensado específicamente para el o la paciente. Se combinan varios tratamientos y técnicas, distribuidas en sesiones (entre 5 y 10, según sea el caso).' },
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  'arrugas': {
    title: 'Arrugas',
    image: arrugasImg,
    category: 'faciales',
    intro: 'Tratamientos especializados para prevenir, atenuar y eliminar las arrugas, combinando técnicas de última generación para resultados naturales y duraderos.',
    techniques: [
         {
        title: 'Peeling',
        image: manchasImg,
        content: [
          { type: 'p', text: 'El peeling químico consiste en aplicar sobre la superficie de la piel a tratar una serie de productos – ácidos-, con el fin de estimular la piel para que se regenere, favoreciendo la eliminación de capas  viejas de la piel y así exponiendo una piel más nueva y joven. Cuanto más profundo es el peeling, mejores serán los resultados que se obtendrán y mayor será el pelado de la piel después del tratamiento.' },
          { type: 'p', text: 'Existen diferentes tipos de peelings:' },
          { type: 'ul', items: [
            'Peeling superficial: para reducir poros, acné y reactivar la piel joven y dar brillo.',
            'Peeling medio: para tratar manchas, arrugas finas y cicatrices.',
            'Peeling profundo: para tratar el envejecimiento severo.',
          ]},
          { type: 'p', text: 'Luego de un análisis meticuloso del caso, determinaremos qué tipo de peeling es el más adecuado para tu tipo de piel y el objetivo deseado.' },
        ],
        benefits: [
          'Da luminosidad',
          'Controla algunos tipos de acné',
          'Hidrata la piel',
          'Aclara manchas',
          'Atenúa arrugas',
          'Afina los poros dilatados',
          'Mejora la piel marchita',
        ],
        duration: '40 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Radiesse',
        image: arrugasImg,
        content: [
          { type: 'p', text: 'El relleno facial con el que rejuvenecerás tu rostro.' },
          { type: 'p', text: 'Está formado por micropartículas de hidroxiapatita de calcio que se encuentran disueltas en un gel reabsorbible. Este componente se presenta de manera natural en nuestro organismo, por lo que, entre sus grandes ventajas, se destaca la ausencia de reacciones alérgicas.' },
          { type: 'p', text: '¿Cómo se realiza el tratamiento? Con una aguja ultrafina sin filo se reparte el Radiesse en trayectos subdérmicos. Este generador de colágeno logra un gran cambio estético visible a partir de los primeros días y se manifiesta al completo a los 3 meses de la intervención. Se aconseja esta técnica para tratar la flacidez facial y/o de determinadas áreas corporales ya que con el Radiesse, se revitaliza la piel consiguiendo un lifting suave y una reducción visible de las arrugas producidas por flacidez.' },
        ],
        benefits: [
          'Previene la aparición de líneas de expresión',
          'Aumenta la producción de colágeno.',
          'Reafirma y tensa la piel tratada.',
          'Disminuye las arrugas producto de la flacidez cutánea.',
        ],
        duration: '60 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Toxina Botulínica (Botox)',
        image: toxinaImg,
        content: [
          { type: 'p', text: 'El tratamiento de Toxina Botulínica es el tratamiento más popular que existe para combatir el envejecimiento de la piel.' },
          { type: 'p', text: 'Se aplica a través  de pequeñas infiltraciones en las zonas que queremos tratar, con el fin de reducir la contracción muscular. De esta forma, prevenimos la aparición de nuevas arrugas en un futuro y tratamos las ya existentes.' },
          { type: 'p', text: 'Se trata de un tratamiento estético totalmente ambulatorio e indoloro que se aplica para tratar arrugas dinámicas.  Es decir las líneas de expresión que aparecen en la frente, entrecejo y las comúnmente llamadas patas de gallo.' },
          { type: 'p', text: 'Es un tratamiento muy rápido de realizar y los resultados se observan a partir de la semana o diez días.' },
          { type: 'p', text: 'Su efecto puede durar entre 4 a 6 meses, dependiendo de cada paciente.' },
        ],
        benefits: [
          'Eliminar arrugas existentes',
          'Prevenir nuevas líneas de expresión',
        ],
        duration: '45 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'Rellenos con Ácido Hialurónico',
        image: acidoImg,
        content: [
          { type: 'p', text: 'Si te preocupan los signos del envejecimiento, los tratamientos con ácido hialurónico son una gran opción para mantener el rostro más joven, devolviendo el volumen perdido por el paso del tiempo y reposicionando estructuras anatómicas.' },
          { type: 'p', text: 'Con técnicas personalizadas y productos de alta gama y primera calidad a nivel mundial te ofrecemos resultados muy naturales y siempre acordes a tu necesidad.' },
        ],
        benefits: [
          'Pómulos',
          'Labios',
          'Surcos nasogenianos',
          'Mentón y Contorno Mandibular',
          'Fosa temporal',
        ],
        duration: 'más de 60 minutos (depende de la o las zonas a tratar)',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'PRP',
        image: prpImg,
        content: [
          { type: 'p', text: 'El plasma rico en plaquetas es un tratamiento revolucionario, uno de los más avanzados que hay en la actualidad para rejuvenecer la piel del rostro y, sin dudas, el más solicitado. Esta técnica es ideal para quienes desean mejorar el aspecto de su piel y aumentar su firmeza y luminosidad. Puede aplicarse en la piel del rostro, escote, cuello y manos.' },
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que tiene la propiedad de estimular considerablemente la producción de colágeno y ácido hialurónico, dando como resultado una tez más joven, tersa y firme.' },
          { type: 'p', text: '  Los resultados se pueden apreciar luego de aproximadamente 2 semanas de realizado el tratamiento, observando el máximo efecto a las 4 semanas. Se recomienda comenzar con 3 sesiones,  1 por mes, y luego continuar con sesiones de mantenimiento cada 3-4 meses .' },
        ],
        benefits: [
          'Restaura la vitalidad cutánea',
          'Mejora la piel deshidratada',
          'Aumentar el espesor natural de la piel',
          'Recupera elasticidad',
          'Otorga luminosidad',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Microneedling',
        image: microImg,
        content: [
          { type: 'p', text: 'Es un procedimiento dermatológico mínimamente invasivo en el que se realizan múltiples micropunciones en la piel con un dispositivo que contiene microagujas (Dermapen®) y controla la profundidad de esas pequeñas incisiones. De esta manera, logramos estimular la producción de colágeno mejorando cicatrices y arrugas finas. Además, se pueden aplicar sobre la piel determinadas sustancias (ácido hialurónico, vitaminas, PRP) para que penetren más profundo.' },
          
        ],
        benefits: [
          'Mejora la textura de la piel, reduciendo la apariencia de los poros',
          'Reduce arrugas finas',
          'Disminuye cicatrices',
          'Otorga luminosidad',
        ],
        duration: '45 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Vampire Facial',
        image: vampireImg,
        content: [
          { type: 'p', text: 'Consiste en la combinación de dos tecnologías, el Plasma Rico en Plaquetas (PRP) y el Microneedling, cuya sinergia logra resultados increíbles.' },
          { type: 'p', text: 'A través del Vampire facial  se logra inducir una máxima generación de colágeno, ácido hialurónico y elastina en el área tratada que se traduce en una piel con mejor textura, luminosidad, suavidad y con arrugas atenuadas que brindan un aspecto joven y saludable.' },
          { type: 'p', text: '¿De qué se trata y cuáles son sus beneficios? Te lo contamos acá. Empecemos por su nombre, Vampiro,  cuyo vínculo con la estética sería nulo. ¿Acaso alguien querrá parecerse a un vampiro? Claro que no. Pero lo cierto es que el tratamiento se realiza utilizando una herramienta del tamaño de un bolígrafo, llamada Dermapen®, que produce decenas de micropunciones controladas favoreciendo la absorción del Plasma Rico en Plaquetas. Debido a las micropunciones, se genera parcialmente un efecto rojizo en la piel similar al de un vampiro.' },
          { type: 'p', text: '¿Y por qué me serviría realizar este tipo de tratamiento? A través del Vampire facial  se logra inducir una máxima generación de colágeno, ácido hialurónico y elastina en el área tratada que se traduce en una piel con mejor textura, luminosidad, suavidad y con arrugas atenuadas que brindan un aspecto joven y saludable.' },
        ],
        benefits: [
          'Mejora la textura de la piel',
          'Suaviza imperfecciones',
          'Disminuye arrugas',
          'Atenúa manchas causadas por el sol',
          'Aumenta la luminosidad ',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
        
      },
       {
        title: 'Protocolos Personalizados',
        image: protocoloImg,
        content: [
          { type: 'p', text: 'Luego de un meticuloso diagnóstico acerca del tipo de piel, las necesidades y objetivos terapéuticos, se procede al armado de un Protocolo personalizado, pensado específicamente para el o la paciente. Se combinan varios tratamientos y técnicas, distribuidas en sesiones (entre 5 y 10, según sea el caso).' },
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  'bruxismo': {
    title: 'Bruxismo',
    category: 'faciales',
    image: toxinaImg,
    intro: 'Tratamiento del bruxismo mediante Toxina Botulínica para relajar la musculatura maseterina, aliviar el dolor y prevenir el desgaste dental.',
    techniques: [
      {
        title: 'Toxina Botulínica (Botox)',
        image: toxinaImg,
        content: [
          { type: 'p', text: 'El tratamiento de Toxina Botulínica es el tratamiento más popular que existe para combatir el envejecimiento de la piel.' },
          { type: 'p', text: 'Se aplica a través  de pequeñas infiltraciones en las zonas que queremos tratar, con el fin de reducir la contracción muscular. De esta forma, prevenimos la aparición de nuevas arrugas en un futuro y tratamos las ya existentes.' },
          { type: 'p', text: 'Se trata de un tratamiento estético totalmente ambulatorio e indoloro que se aplica para tratar arrugas dinámicas.  Es decir las líneas de expresión que aparecen en la frente, entrecejo y las comúnmente llamadas patas de gallo.' },
          { type: 'p', text: 'Es un tratamiento muy rápido de realizar y los resultados se observan a partir de la semana o diez días.' },
          { type: 'p', text: 'Su efecto puede durar entre 4 a 6 meses, dependiendo de cada paciente.' },
        ],
        benefits: [
          'Eliminar arrugas existentes',
          'Prevenir nuevas líneas de expresión',
        ],
        duration: '45 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  'flacidez-facial': {
    title: 'Flacidez Facial',
    image: hiloImg,
    category: 'faciales',
    intro: 'Tratamientos de reafirmación y lifting no quirúrgico para devolver firmeza, tensión y definición al contorno del rostro.',
    techniques: [
      {
        title: 'Radiesse',
        image: arrugasImg,
        content: [
          { type: 'p', text: 'El relleno facial con el que rejuvenecerás tu rostro.' },
          { type: 'p', text: 'Está formado por micropartículas de hidroxiapatita de calcio que se encuentran disueltas en un gel reabsorbible. Este componente se presenta de manera natural en nuestro organismo, por lo que, entre sus grandes ventajas, se destaca la ausencia de reacciones alérgicas.' },
          { type: 'p', text: '¿Cómo se realiza el tratamiento? Con una aguja ultrafina sin filo se reparte el Radiesse en trayectos subdérmicos. Este generador de colágeno logra un gran cambio estético visible a partir de los primeros días y se manifiesta al completo a los 3 meses de la intervención. Se aconseja esta técnica para tratar la flacidez facial y/o de determinadas áreas corporales ya que con el Radiesse, se revitaliza la piel consiguiendo un lifting suave y una reducción visible de las arrugas producidas por flacidez.' },
        ],
        benefits: [
          'Previene la aparición de líneas de expresión',
          'Aumenta la producción de colágeno.',
          'Reafirma y tensa la piel tratada.',
          'Disminuye las arrugas producto de la flacidez cutánea.',
        ],
        duration: '60 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Hilos PDO',
        image: hiloImg,
        content: [
          { type: 'p', text: 'Los hilos de polidioxanona o PDO son unas hebras finas que se introducen bajo la piel generando efectos de soporte para mejorar la flacidez de los tejidos y de estímulo del colageno para redensificar la piel.Este material es totalmente compatible, reabsorbible y estéril. En el nivel subcutáneo, la polidioxanona genera una fibrosis o proceso reparativo a su alrededor, lo que desencadena la producción de nuevas fibras elásticas de colágeno y elastina.' },
          { type: 'p', text: '¿Cómo es el procedimiento?' },
          { type: 'p', text: 'Se realiza un estudio de las áreas del rostro a tratar y se procede al diseño de las zonas que deben ser tensadas. Los hilos son introducidos a nivel subcutáneo guiados por una aguja fina. Tras colocar el hilo en la ubicación deseada, la aguja se retira. El número de hilos a emplear dependerá de las condiciones de la piel y de los puntos necesarios a tratar del paciente.' },
        ],
        benefits: [
          'Favorece la redensificación cutánea',
          'Aporta firmeza (efecto lifting)',
          'Otorga tersura y luminosidad a la piel',
          'Disminuye la flacidez',
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Bandas Tensoras',
        image: bandasImg,
        content: [
          { type: 'p', text: 'Es un tratamiento en el cual se utiliza una combinación de productos que son inyectados en la dermis profunda para estimular la formación de bandas de colágeno y elastina logrando una redensificación de fibras de sostén en el tejido tratado y disminuyendo la flacidez de la zona.' },
        ],
        benefits: [
          'Mejorar la flacidez cutánea',
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'PRP',
        image: prpImg,
        content: [
          { type: 'p', text: 'El plasma rico en plaquetas es un tratamiento revolucionario, uno de los más avanzados que hay en la actualidad para rejuvenecer la piel del rostro y, sin dudas, el más solicitado. Esta técnica es ideal para quienes desean mejorar el aspecto de su piel y aumentar su firmeza y luminosidad. Puede aplicarse en la piel del rostro, escote, cuello y manos.' },
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que tiene la propiedad de estimular considerablemente la producción de colágeno y ácido hialurónico, dando como resultado una tez más joven, tersa y firme.' },
          { type: 'p', text: '  Los resultados se pueden apreciar luego de aproximadamente 2 semanas de realizado el tratamiento, observando el máximo efecto a las 4 semanas. Se recomienda comenzar con 3 sesiones,  1 por mes, y luego continuar con sesiones de mantenimiento cada 3-4 meses .' },
        ],
        benefits: [
          'Restaura la vitalidad cutánea',
          'Mejora la piel deshidratada',
          'Aumentar el espesor natural de la piel',
          'Recupera elasticidad',
          'Otorga luminosidad',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Protocolos Personalizados',
        image: protocoloImg,
        content: [
          { type: 'p', text: 'Luego de un meticuloso diagnóstico acerca del tipo de piel, las necesidades y objetivos terapéuticos, se procede al armado de un Protocolo personalizado, pensado específicamente para el o la paciente. Se combinan varios tratamientos y técnicas, distribuidas en sesiones (entre 5 y 10, según sea el caso).' },
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  'luminosidad': {
    title: 'Luminosidad',
    category: 'faciales',
    image: skinImg,
    intro: 'Tratamientos diseñados para devolver el brillo natural, mejorar la textura y revitalizar la piel cansada o apagada.',
    techniques: [
       {
        title: 'Peeling',
        image: manchasImg,
        content: [
          { type: 'p', text: 'El peeling químico consiste en aplicar sobre la superficie de la piel a tratar una serie de productos – ácidos-, con el fin de estimular la piel para que se regenere, favoreciendo la eliminación de capas  viejas de la piel y así exponiendo una piel más nueva y joven. Cuanto más profundo es el peeling, mejores serán los resultados que se obtendrán y mayor será el pelado de la piel después del tratamiento.' },
          { type: 'p', text: 'Existen diferentes tipos de peelings:' },
          { type: 'ul', items: [
            'Peeling superficial: para reducir poros, acné y reactivar la piel joven y dar brillo.',
            'Peeling medio: para tratar manchas, arrugas finas y cicatrices.',
            'Peeling profundo: para tratar el envejecimiento severo.',
          ]},
          { type: 'p', text: 'Luego de un análisis meticuloso del caso, determinaremos qué tipo de peeling es el más adecuado para tu tipo de piel y el objetivo deseado.' },
        ],
        benefits: [
          'Da luminosidad',
          'Controla algunos tipos de acné',
          'Hidrata la piel',
          'Aclara manchas',
          'Atenúa arrugas',
          'Afina los poros dilatados',
          'Mejora la piel marchita',
        ],
        duration: '40 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Peeling Instant Glow',
        image: glowImg,
        content: [
          { type: 'p', text: 'Un tratamiento ideal para aquellas personas que notan su piel apagada y sin vitalidad.' },
          { type: 'p', text: 'Es perfecto para realizar 2 días previos a un evento y darle a tu rostro la luminosidad que necesita.' },
          { type: 'P', text: 'Combina exfoliación física con punta de diamante más un ácido ultrahidratante.'},
          { type: 'p', text: 'El objetivo es que la piel se vea más fresca, radiante y con un glow único.' },
        ],
        benefits: [
          'Revitaliza la piel en una sola sesión',
          'Da luminosidad',
          'Hidrata ',
          'Afina poros dilatados',
        ],
        duration: '30 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'Mesoterapia Facial',
        image: glowImg,
        content: [
          { type: 'p', text: 'Es una técnica de aplicación de principios activos mediante múltiples inyecciones superficiales en la dermis. De esta forma, la sustancia se coloca directamente en la zona afectada, consiguiendo los máximos beneficios.' },
        ],
        benefits: [
          'Mejora la calidad de la piel',
          'Hidrata y da luminosidad',
          'Aporta nutrientes y antioxidantes',
        ],
        duration: '60 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'SkinBooster',
        image: glowImg,
        content: [
          { type: 'p', text: 'Tratamiento médico estético que consiste en la aplicación a través de microinyecciones de un gel muy suave de ácido hialurónico, logrando como resultado tonificar e hidratar la piel dando  luminosidad y elasticidad. Es por esto que está especialmente indicado para el tratamiento del crono-fotoenvejecimiento.' },
        ],
        benefits: [
          'Mejora la  calidad de la piel',
          'Aportar hidratación.',
          'Mejorar el tono',
          'Da luminosidad',
          'Mejorar la textura',
        ],
        duration: '60 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'PRP',
        image: prpImg,
        content: [
          { type: 'p', text: 'El plasma rico en plaquetas es un tratamiento revolucionario, uno de los más avanzados que hay en la actualidad para rejuvenecer la piel del rostro y, sin dudas, el más solicitado. Esta técnica es ideal para quienes desean mejorar el aspecto de su piel y aumentar su firmeza y luminosidad. Puede aplicarse en la piel del rostro, escote, cuello y manos.' },
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que tiene la propiedad de estimular considerablemente la producción de colágeno y ácido hialurónico, dando como resultado una tez más joven, tersa y firme.' },
          { type: 'p', text: '  Los resultados se pueden apreciar luego de aproximadamente 2 semanas de realizado el tratamiento, observando el máximo efecto a las 4 semanas. Se recomienda comenzar con 3 sesiones,  1 por mes, y luego continuar con sesiones de mantenimiento cada 3-4 meses .' },
        ],
        benefits: [
          'Restaura la vitalidad cutánea',
          'Mejora la piel deshidratada',
          'Aumentar el espesor natural de la piel',
          'Recupera elasticidad',
          'Otorga luminosidad',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
       {
        title: 'Microneedling',
        image: microImg,
        content: [
          { type: 'p', text: 'Es un procedimiento dermatológico mínimamente invasivo en el que se realizan múltiples micropunciones en la piel con un dispositivo que contiene microagujas (Dermapen®) y controla la profundidad de esas pequeñas incisiones. De esta manera, logramos estimular la producción de colágeno mejorando cicatrices y arrugas finas. Además, se pueden aplicar sobre la piel determinadas sustancias (ácido hialurónico, vitaminas, PRP) para que penetren más profundo.' },
          
        ],
        benefits: [
          'Mejora la textura de la piel, reduciendo la apariencia de los poros',
          'Reduce arrugas finas',
          'Disminuye cicatrices',
          'Otorga luminosidad',
        ],
        duration: '45 minutos',
        waLink: 'https://wa.link/zbtl8d',
      },
      {
        title: 'Vampire Facial',
        image: vampireImg,
        content: [
          { type: 'p', text: 'Consiste en la combinación de dos tecnologías, el Plasma Rico en Plaquetas (PRP) y el Microneedling, cuya sinergia logra resultados increíbles.' },
          { type: 'p', text: 'A través del Vampire facial  se logra inducir una máxima generación de colágeno, ácido hialurónico y elastina en el área tratada que se traduce en una piel con mejor textura, luminosidad, suavidad y con arrugas atenuadas que brindan un aspecto joven y saludable.' },
          { type: 'p', text: '¿De qué se trata y cuáles son sus beneficios? Te lo contamos acá. Empecemos por su nombre, Vampiro,  cuyo vínculo con la estética sería nulo. ¿Acaso alguien querrá parecerse a un vampiro? Claro que no. Pero lo cierto es que el tratamiento se realiza utilizando una herramienta del tamaño de un bolígrafo, llamada Dermapen®, que produce decenas de micropunciones controladas favoreciendo la absorción del Plasma Rico en Plaquetas. Debido a las micropunciones, se genera parcialmente un efecto rojizo en la piel similar al de un vampiro.' },
          { type: 'p', text: '¿Y por qué me serviría realizar este tipo de tratamiento? A través del Vampire facial  se logra inducir una máxima generación de colágeno, ácido hialurónico y elastina en el área tratada que se traduce en una piel con mejor textura, luminosidad, suavidad y con arrugas atenuadas que brindan un aspecto joven y saludable.' },
        ],
        benefits: [
          'Mejora la textura de la piel',
          'Suaviza imperfecciones',
          'Disminuye arrugas',
          'Atenúa manchas causadas por el sol',
          'Aumenta la luminosidad ',
        ],
        duration: '90 minutos',
        waLink: 'https://wa.link/zbtl8d',
        
      },
       {
        title: 'Protocolos Personalizados',
        image: protocoloImg,
        content: [
          { type: 'p', text: 'Luego de un meticuloso diagnóstico acerca del tipo de piel, las necesidades y objetivos terapéuticos, se procede al armado de un Protocolo personalizado, pensado específicamente para el o la paciente. Se combinan varios tratamientos y técnicas, distribuidas en sesiones (entre 5 y 10, según sea el caso).' },
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  // ---------------- CORPORALES ----------------

  'adiposidad-localizada': {
    title: 'Adiposidad Localizada',
    category: 'corporales',
    image: cuerpoImg,
    intro: 'Tratamientos específicos para reducir cúmulos de grasa localizada en zonas puntuales, mejorando el contorno corporal.',
    techniques: [
       {
        title: 'Fosfatidilcolina',
        image: cuerpoImg,
        content: [
          { type: 'p', text: 'El tratamiento consiste en una serie de sesiones durante las que se aplican inyecciones de Fosfatidilcolina, un extracto derivado de la lecitina de soja que forma parte estructural de membranas celulares de nuestro cuerpo.' },
          { type: 'p', text: 'Las indicaciones para el uso estético de este compuesto son limitadas y se restringen a pequeños depósitos de adiposidad localizada, en pacientes con peso ideal o con sobrepeso leve, y es conveniente complementar el tratamiento con dieta y actividad física.' },
          { type: 'p', text: 'Está indicada con excelentes resultados clínicos en la remodelación del contorno corporal y en la reducción de la adiposidad que se localiza especialmente en el abdomen, los flancos, la región trocantérica (el «pantalón de montar”), cintura, caderas, la zona bajo los glúteos.' },
          { type: 'p', text: 'La técnica de aplicación es la infiltración subcutánea mediante la cual la sustancia es inyectada directamente en la grasa. Al penetrar en el tejido adiposo, la fosfatidilcolina interactúa en la membrana celular, produciendo orificios en ella con la consecuente destrucción del tejido graso sólido tratado, que una vez disuelto se vuelve más soluble. Esto permite que luego, el mismo organismo la absorba y la elimine en forma natural en pequeñas cantidades especialmente a través de la orina.'},
        ],
         benefits: [
          'Cadera',
          'Cintura',
          'Abdomen',
          'Flancos',
          'Muslos',
          'Zona baja de glúteos',
          'Región trocantérica',
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  'celulitis': {
    title: 'Celulitis',
    category: 'corporales',
    image: mesocImg,
    intro: 'Técnicas combinadas para atenuar la celulitis, mejorar la circulación y suavizar la textura de la piel.',
    techniques: [
       {
        title: 'Mesoterapia Corporal',
        image: mesocImg,
        content: [
          { type: 'p', text: 'Es una técnica de aplicación de principios activos mediante múltiples inyecciones superficiales en la dermis. De esta forma, la sustancia se coloca directamente en la zona afectada, consiguiendo los máximos beneficios.' },
        ],
         benefits: [
          'Mejora el aspecto de la piel con celulitis',
          'Mejora la apariencia de la piel y la reafirma',
        ],
        waLink: 'https://wa.link/zbtl8d',
        duration: '60 minutos',
      },
      { 
        title: 'PRP corporal',
        image: prpImg,
        content: [
          { type: 'p', text: 'Esta técnica es ideal para quienes desean reducir la celulitis, revitalizar la piel y mejorar la flacidez.' },
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que tiene la propiedad de estimular considerablemente la producción de colágeno y ácido hialurónico, generando el efecto de una piel rejuvenecida. Los resultados se pueden apreciar luego de aproximadamente 2 semanas de realizado el tratamiento, observando el máximo efecto a las 4 semanas.' },
          { type: 'p', text: 'Se recomienda comenzar con 3 sesiones,  1 por mes, y luego continuar con sesiones de mantenimiento cada 3-4 meses .'},
        ],
         benefits: [
          'Mejora la flacidez',
          'Mejora el aspecto de la piel con celulitis',
          'Recupera la tersura de la piel',
          'Mejora la calidad de la dermis.',
        ],
        waLink: 'https://wa.link/zbtl8d',
        duration: '90 minutos',
      },
    ],
  },

  'flacidez-corporal': {
    title: 'Flacidez Corporal',
    category: 'corporales',
    image: prpImg,
    intro: 'Tratamientos reafirmantes para tensar la piel del cuerpo, estimular la producción de colágeno y recuperar firmeza.',
    techniques: [
        { 
        title: 'Bandas tensoras',
        image: bandastensorasImg,
        content: [
          { type: 'p', text: 'Es un tratamiento en el cual se utiliza una combinación de productos que son inyectados en la dermis profunda para estimular la formación de bandas de colágeno y elastina logrando una redensificación de fibras de sostén en el tejido tratado y disminuyendo la flacidez de la zona.' },
        ],
         benefits: [
          'Mejorar la flacidez cutánea',
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
      { 
        title: 'PRP corporal',
        image: prpImg,
        content: [
          { type: 'p', text: 'Esta técnica es ideal para quienes desean reducir la celulitis, revitalizar la piel y mejorar la flacidez.' },
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que tiene la propiedad de estimular considerablemente la producción de colágeno y ácido hialurónico, generando el efecto de una piel rejuvenecida. Los resultados se pueden apreciar luego de aproximadamente 2 semanas de realizado el tratamiento, observando el máximo efecto a las 4 semanas.' },
          { type: 'p', text: 'Se recomienda comenzar con 3 sesiones,  1 por mes, y luego continuar con sesiones de mantenimiento cada 3-4 meses .'},
        ],
         benefits: [
          'Mejora la flacidez',
          'Mejora el aspecto de la piel con celulitis',
          'Recupera la tersura de la piel',
          'Mejora la calidad de la dermis.',
        ],
        waLink: 'https://wa.link/zbtl8d',
        duration: '90 minutos',
      },
    ],
  },

  'hiperhidrosis': {
    title: 'Hiperhidrosis',
    category: 'corporales',
    image: hiperImg,
    intro: 'Tratamiento eficaz con Toxina Botulínica para reducir la sudoración excesiva en axilas, palmas y plantas.',
    techniques: [
      { 
        title: 'Toxina Botulínica (botox) para hiperhidrosis',
        image: prpImg,
        content: [
          { type: 'p', text: 'La hiperhidrosis es la sudoración excesiva, es decir, aquella que supera ampliamente la sudoración normal.' },
          { type: 'p', text: 'La toxina botulínica resulta efectiva para reducir la producción de sudor, dado que es una potente neurotoxina que bloquea la liberación de acetilcolina.' },
        ],
         benefits: [
          'Reduce la sudoración excesiva.',
          'Resultados visibles a los pocos días de su aplicación',
        ],
        waLink: 'https://wa.link/zbtl8d',
        duration: '45 minutos',
      },
    ],
  },  

  'varices-aranitas': {
    title: 'Várices y Arañitas',
    category: 'corporales',
    image: fleboImg,
    intro: 'Tratamiento de várices y arañitas vasculares mediante técnicas mínimamente invasivas de escleroterapia.',
    techniques: [
         { 
        title: 'Fleboestética',
        image: fleboImg,
        content: [
          { type: 'p', text: 'Las lesiones vasculares visibles que afectan a las piernas pueden ser arañitas vasculares o várices superficiales. A éstas podemos tratarlas mediante la inyección de sustancias esclerosantes que logran de manera rápida y efectiva, en pocas sesiones, reducir su tamaño e, incluso en algunos casos eliminarlas.' },
        ],
         benefits: [
          'Reduce arañitas vasculares',
          'Reduce varices superficiales',
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

  // ---------------- CAPILARES ----------------

  'tratamientos-capilares': {
    title: 'Tratamientos Capilares',
    category: 'capilares',
    image: pabloImg,
    intro: 'Medicina regenerativa capilar para estimular el crecimiento natural, recuperar densidad y revitalizar el cabello desde la raíz.',
    techniques: [
    { 
        title: 'Plasma rico en plaquetas (PRP) capilar',
        image: capilarImg,
        content: [
          { type: 'p', text: 'Con los años, ya sea por predisposición genética o por condiciones metabólicas, algunas unidades foliculares comienzan un proceso de atrofia hasta que desaparecen paulatinamente de manera irreversible.' },
          { type: 'p', text: 'El objetivo del tratamiento es interrumpir este proceso, ralentizando la evolución desfavorable y manteniendo en óptimo funcionamiento la mayor cantidad posible de unidades foliculares, ya que cuando se pierden, éstas son irrecuperables.' },  
          { type: 'p', text: '¿Cómo se realiza?' },
          { type: 'p', text: 'Se extrae una pequeña muestra de sangre del paciente, la cual se procesa en una centrifugadora para separar el fluido en partes. Una vez que se obtiene el plasma se aplica en la zona a tratar a través de microinyecciones. El plasma es una sustancia natural del organismo que, aplicada a nivel capilar, estimula a las células de la matriz de la unidad folicular a que aumenten su metabolismo y con ello la producción de pelo de mejor calidad.' },  
          { type: 'p', text: 'Importante! Se trata de un tratamiento preventivo: el efecto comienza a verse a los 3 meses con una máxima expresión a los 6 meses.' },  
        ],
         benefits: [
          'El cabello deja de caerse',
          'Se recuperan algunas unidades foliculares',
          'La recuperación continúa con aumento del grosor del cabello afinado, apreciándose una densidad capilar mejor a la que se tenía antes del tratamiento.',
          'Se recomienda comenzar con una sesión cada 30  días los primeros 6 meses y luego sesiones de mantenimiento cada  45- 60  días.',
        ],
        waLink: 'https://wa.link/zbtl8d',
        duration: '45 minutos',
      },
      {
        title: 'Protocolos Personalizados',
        image: protocolo2Img,
        content: [
          { type: 'p', text: 'Luego de un meticuloso diagnóstico acerca del tipo de piel, las necesidades y objetivos terapéuticos, se procede al armado de un Protocolo personalizado, pensado específicamente para el o la paciente. Se combinan varios tratamientos y técnicas, distribuidas en sesiones (entre 5 y 10, según sea el caso).' },
        ],
        waLink: 'https://wa.link/zbtl8d',
      },
    ],
  },

};
