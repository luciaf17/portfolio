import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { trabajos } from '../data/Trabajos';

const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});

    const params = useParams();

    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    }, []);

  return (
      <div className='page page-work'>
        <h1 className='heading'>{proyecto.nombre}</h1>
            <div className='project-mask'>
              <img src={process.env.PUBLIC_URL+`/${proyecto.id}.png`} alt={proyecto.id}/>
            </div>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={"https://" + proyecto.url} target="_blank" rel="noreferrer">Ir al proyecto</a>
    </div>
  )
}

export default Proyecto
