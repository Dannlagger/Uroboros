'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ParticleSystem from './ParticleSystem'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function MainSceneInner() {
  useScrollAnimation()

  return (
    <div className="scene-shell">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ParticleSystem />
        </Suspense>
      </Canvas>
    </div>
  )
}
