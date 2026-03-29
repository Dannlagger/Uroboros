'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ParticleSystem from './ParticleSystem'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function MainScene() {
  useScrollAnimation()

  return (
    <div className="scene-shell">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 6]} intensity={1.2} color="#4EC8FF" />
        <Suspense fallback={null}>
          <ParticleSystem />
        </Suspense>
      </Canvas>
    </div>
  )
}
