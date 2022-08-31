import React, { useEffect, useState } from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
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
        <h1 className='heading' id='title-mobile'>{proyecto.nombre}</h1>
            <div className='project-mask'>
              <img src={process.env.PUBLIC_URL+`/${proyecto.id}.png`} alt={proyecto.id}/>
            </div>
        <p className='tecnologias'><b>{proyecto.tecnologias}</b></p>
        <p className='descripcion'>{proyecto.descripcion}</p>
        <u>Ir al proyecto</u><a href={"https://" + proyecto.url} target="_blank" rel="noreferrer"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a>
    </div>
  )
}

export default Proyecto
