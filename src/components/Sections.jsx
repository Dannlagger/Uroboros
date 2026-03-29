import React from 'react'

const sections = [
  {title:'Preproducción', body:'Abres la página... silencio y una luz que se enciende.'},
  {title:'Búsqueda', body:'Las partículas comienzan a formar siluetas, ideas que se gestan.'},
  {title:'Producción', body:'Gente trabajando, estructuras, equipo, actividad.'},
  {title:'Postproducción', body:'Revisión, afinado y entrega.'},
  {title:'Distribución', body:'Las ideas salen al mundo.'}
]

export default function Sections(){
  return (
    <section className="sections container">
      {sections.map((s,i)=> (
        <article key={i} className="section-card">
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </article>
      ))}
    </section>
  )
}
