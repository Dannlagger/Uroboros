'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    id: 'black-screen',
    kicker: 'Acto 1',
    title: 'Percepción',
    text: 'Abres la página. No hay nada más que un fondo negro. Silencio visual. Espacio.'
  },
  {
    id: 'light-emergence',
    kicker: 'Acto 1',
    title: 'Emergencia de luz',
    text: 'Una luz tenue aparece en el centro y se intensifica poco a poco, como si algo estuviera naciendo.'
  },
  {
    id: 'logo-formation',
    kicker: 'Acto 1',
    title: 'Formación',
    text: 'Mientras haces scroll, la luz revela un logotipo que se construye lentamente frente a ti.'
  },
  {
    id: 'logo-disintegration',
    kicker: 'Acto 1',
    title: 'Disolución',
    text: 'El logotipo se deshace y se convierte en miles de partículas. Ahora ellas son el mundo del sitio.'
  },
  {
    id: 'reel-integration',
    kicker: 'Acto 2',
    title: 'Reel / Sistema / Presencia',
    text: 'Un reel breve se integra al entorno como una muestra natural del universo visual.'
  },
  {
    id: 'silhouettes',
    kicker: 'Acto 2',
    title: 'Ciclo vivo',
    text: 'Las partículas forman siluetas: preproducción, búsqueda, producción, postproducción y distribución.'
  },
  {
    id: 'service-network',
    kicker: 'Acto 3',
    title: 'Red conceptual',
    text: 'Cine, fotografía, diseño, sonido, ideas, campañas e historias aparecen conectadas como un sistema.'
  },
  {
    id: 'subworlds',
    kicker: 'Acto 4',
    title: 'Submundos',
    text: 'Fotografía, Sound, Design y Time abren identidades propias dentro del mismo universo LATTICCE.'
  }
]

const subworlds = [
  {
    name: 'Photography',
    copy: 'Imágenes grandes, limpias, precisas. No es catálogo: es construcción visual.'
  },
  {
    name: 'Sound',
    copy: 'No solo se muestra. Se percibe con capas, vibraciones y atmósferas.'
  },
  {
    name: 'Design',
    copy: 'Tipografías, sistemas gráficos y estructuras en movimiento.'
  },
  {
    name: 'Time',
    copy: 'El fondo cambia a blanco. Todo se vuelve humano, cercano y emocional.'
  }
]

export default function ScrollNarrative() {
  return (
    <div className="narrative-shell">
      {sections.map((section) => (
        <section key={section.id} className={`scroll-state ${section.id}`} data-scroll-state={section.id}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="state-content"
          >
            <span className="state-kicker">{section.kicker}</span>
            <h2>{section.title}</h2>
            <p>{section.text}</p>

            {section.id === 'silhouettes' && (
              <div className="pipeline-grid">
                <div>Preproducción</div>
                <div>Búsqueda</div>
                <div>Producción</div>
                <div>Postproducción</div>
                <div>Distribución</div>
              </div>
            )}

            {section.id === 'service-network' && (
              <div className="network-grid">
                <span>Cine</span>
                <span>Fotografía</span>
                <span>Diseño</span>
                <span>Sound</span>
                <span>Estrategia</span>
                <span>Ideas</span>
                <span>Campañas</span>
                <span>Historias</span>
              </div>
            )}

            {section.id === 'subworlds' && (
              <div className="subworld-grid">
                {subworlds.map((item) => (
                  <article key={item.name} className="subworld-card">
                    <h3>{item.name}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  )
}
