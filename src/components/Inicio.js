import React from 'react'
import {Link} from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
  return (
    <div className='home'>
     <h1 className='heading'>Soy Maria Lucia Futestti y me gusta <strong>diseñar y programar</strong>....</h1>
     <h2 className='title'>Además... <Link to="/contacto">Contáctame</Link></h2>
     <section className='last-works'>
      <h2 className='heading'>Algunos de mis proyectos..</h2>
      <ListadoTrabajos limite="2"/>
     </section>
    </div>
  )
}

export default Inicio
