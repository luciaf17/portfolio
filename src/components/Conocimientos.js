import React from 'react'
import { FaPython, FaReact, FaDatabase, FaSalesforce, FaFigma, FaDocker, FaWordpress, FaGitAlt, FaRobot, FaCogs, FaBolt } from "react-icons/fa";
import { GoRadioTower } from "react-icons/go";
import { TbWritingSign } from "react-icons/tb";
import { SiDjango, SiFastapi, SiPostgresql, SiTailwindcss, SiVuedotjs, SiOpenai, SiTableau, SiPandas, SiArduino, SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiRailway, SiCloudflare, SiWhatsapp } from "react-icons/si";


const Servicios = () => {
  return (
    <div className='page animate__animated animate__fadeInLeft'>
      <h1 className='heading'>Mis Conocimientos</h1>
      <section className='services'>
        <article className='service'>
          <h3>Automatización con n8n + IA</h3><FaCogs className='icon animate__animated animate__zoomInDown'/><SiOpenai className='icon animate__animated animate__zoomInDown'/><SiWhatsapp className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Integración OpenAI API (GPT-4 / GPT-4o, agentes IA)</h3><SiOpenai className='icon animate__animated animate__zoomInDown'/><FaRobot className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Integraciones - GHL (GoHighLevel), Airtable, Google Workspace, WhatsApp Cloud API</h3><FaCogs className='icon animate__animated animate__zoomInDown'/><SiWhatsapp className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Backend - Django, FastAPI, PostgreSQL, REST APIs</h3><FaPython className='icon animate__animated animate__zoomInDown'/><SiDjango className='icon animate__animated animate__zoomInDown'/><SiFastapi className='icon animate__animated animate__zoomInDown'/><SiPostgresql className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Frontend - HTMX, Tailwind, React, Vue, React Native</h3><FaBolt className='icon animate__animated animate__zoomInDown'/><SiTailwindcss className='icon animate__animated animate__zoomInDown'/><FaReact className='icon animate__animated animate__zoomInDown'/><SiVuedotjs className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Diseño UX/UI</h3><FaFigma className='icon animate__animated animate__zoomInDown'/><SiAdobeillustrator className='icon animate__animated animate__zoomInDown'/><SiAdobephotoshop className='icon animate__animated animate__zoomInDown'/><SiCanva className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>CMS - Wordpress, Elementor, Woocommerce, Gravity Forms</h3><FaWordpress className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Análisis de Datos - pandas, Tableau, ML</h3><SiPandas className='icon animate__animated animate__zoomInDown'/><SiTableau className='icon animate__animated animate__zoomInDown'/><FaDatabase className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>DevOps - Railway, Cloudflare, Docker, Git/GitHub</h3><SiRailway className='icon animate__animated animate__zoomInDown'/><SiCloudflare className='icon animate__animated animate__zoomInDown'/><FaDocker className='icon animate__animated animate__zoomInDown'/><FaGitAlt className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Calidad - ISO 9001:2015, SGC, CAPA</h3><TbWritingSign className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Salesforce - Apex, LWC</h3><FaSalesforce className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Soluciones IoT - Arduino, ESP32</h3><GoRadioTower className='icon animate__animated animate__zoomInDown'/><SiArduino className='icon animate__animated animate__zoomInDown'/>
        </article>
      </section>
    </div>
  )
}

export default Servicios
