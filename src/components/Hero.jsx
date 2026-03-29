import React from 'react'

export default function Hero(){
  return (
    <header className="hero">
      <div className="hero-inner container">
        <div className="hero-left">
          <h1 className="brand">LATTICCE</h1>
          <p className="lead">No somos una agencia. Somos una red en movimiento.</p>
          <p className="intro">Abres la página. Al principio no aparece nada más que un fondo negro. Silencio visual. Espacio. Mientras haces scroll, una luz tenue revela el logo y el sitio comienza a nacer.</p>
          <div className="cta">
            <button className="btn primary">Empezar</button>
            <button className="btn ghost">Ver procesos</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="mockup">
            <img src="/Recursos/Home.jpeg" alt="Referencia Home" />
          </div>
        </div>
      </div>
    </header>
  )
}
