'use client'

import { motion } from 'framer-motion'

const processSteps = [
  {
    label: '01',
    title: 'Preproducción',
    text: 'Ideas en gestación. Personas reunidas, observando algo que todavía no existe.'
  },
  {
    label: '02',
    title: 'Búsqueda',
    text: 'Movimiento, exploración, locaciones y decisiones. El proyecto empieza a tomar forma.'
  },
  {
    label: '03',
    title: 'Producción',
    text: 'Equipo, estructuras, actividad y acción. El momento donde todo sucede.'
  },
  {
    label: '04',
    title: 'Postproducción',
    text: 'Pantallas, revisión, ajuste y precisión. La materia se afina.'
  },
  {
    label: '05',
    title: 'Distribución',
    text: 'Las ideas salen al mundo y encuentran nuevas pantallas, manos y miradas.'
  }
]

const networkWords = [
  'cine',
  'fotografía',
  'diseño',
  'sound',
  'estrategia',
  'ideas',
  'campañas',
  'historias'
]

const worlds = [
  {
    title: 'Photography',
    text: 'Imágenes limpias, retratos, sesiones y precisión lumínica.'
  },
  {
    title: 'Sound',
    text: 'Capas, vibraciones, atmósferas y presencia sensorial.'
  },
  {
    title: 'Design',
    text: 'Sistemas gráficos, tipografías y formas en reorganización constante.'
  },
  {
    title: 'Time',
    text: 'Un cambio de atmósfera: lo humano, lo cercano y lo irrepetible.'
  }
]

export default function ScrollNarrative() {
  return (
    <div className="narrative-shell home-reference-shell">
      <section className="hero-reference scroll-state">
        <div className="hero-reference__bgGlow" />
        <motion.div
          className="hero-reference__inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <div className="hero-reference__eyebrow">LATTICCE / SISTEMA VISUAL</div>
          <h1>LATTICCE</h1>
          <p>
            El sistema despierta cuando la luz se convierte en estructura.
            Una narrativa continua donde las ideas nacen, toman forma y salen al mundo.
          </p>
        </motion.div>
      </section>

      <section className="process-section scroll-state">
        <div className="section-header">
          <span>Acto 1 / Proceso</span>
          <h2>Una secuencia vertical, precisa y cinematográfica</h2>
        </div>
        <div className="process-timeline">
          {processSteps.map((step) => (
            <motion.article
              key={step.label}
              className="process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="process-card__index">{step.label}</div>
              <div className="process-card__body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="network-section scroll-state">
        <div className="section-header section-header--center">
          <span>Acto 2 / Conexión</span>
          <h2>Las disciplinas no aparecen aisladas. Se conectan.</h2>
        </div>
        <div className="network-orbit">
          {networkWords.map((word, index) => (
            <motion.div
              key={word}
              className={`network-node network-node--${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {word}
            </motion.div>
          ))}
          <div className="network-core">LATTICCE</div>
        </div>
      </section>

      <section className="worlds-section scroll-state">
        <div className="section-header">
          <span>Acto 3 / Submundos</span>
          <h2>Cada ruta mantiene el sistema, pero tiene atmósfera propia.</h2>
        </div>
        <div className="worlds-grid">
          {worlds.map((world) => (
            <motion.article
              key={world.title}
              className="world-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="world-card__visual" />
              <h3>{world.title}</h3>
              <p>{world.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
