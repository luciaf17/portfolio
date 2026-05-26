import React, { useEffect, useState } from 'react'
import { FaExternalLinkSquareAlt, FaLock } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/Trabajos';

const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let p = trabajos.filter(t => t.id === params.id);
        setProyecto(p[0] || {});
    }, [params.id]);

    return (
        <div className='page page-work animate__animated animate__flipInX'>
            <h1 className='heading' id='title-mobile'>{proyecto.nombre}</h1>
            <div className='project-mask'>
                <img
                    src={process.env.PUBLIC_URL + '/' + (proyecto.imagen || `${proyecto.id}.png`)}
                    alt={proyecto.id}
                    onError={(e) => { e.currentTarget.src = process.env.PUBLIC_URL + '/placeholder.svg'; }}
                />
            </div>
            <p className='tecnologias'><b>{proyecto.tecnologias}</b></p>
            <p className='descripcion'>{proyecto.descripcion}</p>
            {proyecto.highlight && (
                <p className='descripcion' style={{ color: '#D4447C', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
                    {proyecto.highlight}
                </p>
            )}
            {proyecto.url ? (
                <p>
                    <u>Ir al proyecto</u>{' '}
                    <a href={"https://" + proyecto.url} target="_blank" rel="noreferrer">
                        <FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown' />
                    </a>
                </p>
            ) : proyecto.isPrivate ? (
                <p style={{ color: '#999', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
                    <FaLock style={{ marginRight: 6, verticalAlign: 'middle' }} /> Proyecto privado · Trabajo para cliente
                </p>
            ) : null}
        </div>
    );
}

export default Proyecto
