'use client'

import { motion } from 'framer-motion'

const sections = [
  'black-screen',
  'light-emergence',
  'logo-formation',
  'logo-disintegration',
  'reel-integration',
  'silhouettes',
  'service-network',
  'subworlds'
]

export default function ScrollNarrative() {
  return (
    <div className="narrative-shell">
      {sections.map((section) => (
        <section key={section} className={`scroll-state ${section}`} data-scroll-state={section}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="state-content"
          >
            <span className="state-kicker">LATTICCE</span>
            <h2>{section.replace(/-/g, ' ')}</h2>
          </motion.div>
        </section>
      ))}
    </div>
  )
}
