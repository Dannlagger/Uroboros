import React from 'react'
import Hero from './components/Hero'
import Sections from './components/Sections'

export default function App(){
  return (
    <div className="app-root">
      <Hero />
      <main>
        <Sections />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} LATTICCE</footer>
    </div>
  )
}
