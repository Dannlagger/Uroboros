'use client'

import dynamic from 'next/dynamic'

const MainSceneInner = dynamic(() => import('./MainSceneInner'), { ssr: false })

export default function MainScene() {
  return <MainSceneInner />
}
