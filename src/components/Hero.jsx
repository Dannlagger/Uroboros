import React, { useEffect, useRef } from 'react'

export default function Hero(){
  const canvasRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    const particles = []
    const count = Math.round((w*h)/60000) * 40 + 40

    function rand(min,max){return Math.random()*(max-min)+min}

    for(let i=0;i<count;i++){
      particles.push({
        x: rand(0,w),
        y: rand(0,h),
        r: rand(0.6,2.8),
        vx: rand(-0.2,0.2),
        vy: rand(-0.15,0.15),
        hue: rand(190,260)
      })
    }

    let raf
    function frame(){
      ctx.clearRect(0,0,w,h)
      for(const p of particles){
        p.x += p.vx
        p.y += p.vy
        if(p.x< -10) p.x = w+10
        if(p.x> w+10) p.x = -10
        if(p.y< -10) p.y = h+10
        if(p.y> h+10) p.y = -10
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*10)
        g.addColorStop(0, `hsla(${p.hue},90%,70%,0.22)`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x,p.y,p.r*8,0,Math.PI*2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    frame()
    const onResize = ()=>{ w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  },[])

  return (
    <header className="hero-accurate">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden/>
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
