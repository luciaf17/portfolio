import React from 'react'
import { FaDatabase, FaNode, FaReact, FaSalesforce, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaDocker, FaAws } from "react-icons/fa";
import { GoRadioTower } from "react-icons/go";
import { AiFillPrinter } from "react-icons/ai";
import { TbWritingSign } from "react-icons/tb";
import { SiMysql, SiTableau, SiArduino, SiCanva } from "react-icons/si";


const Servicios = () => {
  return (
    <div className='page animate__animated animate__fadeInLeft'>
      <h1 className='heading'>Mis Conocimientos</h1>
      <section className='services'>
        <article className='service'>
          <h3>Diseño Web, Low code, Wordpress, Elementor</h3><FaHtml5 className='icon animate__animated animate__zoomInDown'/><FaCss3Alt className='icon animate__animated animate__zoomInDown'/><FaBootstrap className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Diseño UX/UI</h3><FaFigma className='icon animate__animated animate__zoomInDown'/><SiCanva className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Desarrollo Web</h3><FaReact className='icon animate__animated animate__zoomInDown'/><FaNode className='icon animate__animated animate__zoomInDown'/><FaDocker className='icon animate__animated animate__zoomInDown'/><FaAws className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Análisis de Datos</h3><FaDatabase className='icon animate__animated animate__zoomInDown'/><SiMysql className='icon animate__animated animate__zoomInDown'/><SiTableau className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Salesforce</h3><FaSalesforce className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Soluciones IoT</h3><GoRadioTower className='icon animate__animated animate__zoomInDown'/><SiArduino className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Redacción</h3><TbWritingSign className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Impresión 3D</h3><AiFillPrinter className='icon animate__animated animate__zoomInDown'/>
        </article>
      </section>
    </div>
  )
}

export default Servicios
