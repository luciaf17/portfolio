import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/Trabajos'

const ListadoTrabajos = () => {
  return (
      <section className='works'>
      {
        trabajos.map(trabajo =>{
          return (
          <article key={trabajo.id} className="work-item">
            <div className='mask'>
            <Link to={"/proyecto/" + trabajo.id}><img src={process.env.PUBLIC_URL+`/${trabajo.id}.png`} alt={trabajo.id}/></Link>
            </div>
            <span>{trabajo.categoria}</span>
            <h2> <Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>

          </article>
          );
        })
      }
      </section>
  )
}

export default ListadoTrabajos
