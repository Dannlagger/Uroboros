import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LATTICCE',
  description: 'Immersive scroll-driven narrative experience'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
