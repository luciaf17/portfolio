import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Curriculum = () => {
  return (
      <div className='page animate__animated animate__fadeInLeft'>
        <h1 className='heading'>Mi Curriculum <a href={process.env.PUBLIC_URL + '/CV MARIA LUCIA FUTESTTI.pdf'} download={''} className='animate__animated animate__pulse'>Descargar PDF</a></h1>

        <h2 className='cv-title'>Experiencia Laboral</h2>

        <h3 className='cv-job'>Fundadora & Desarrolladora Full-Stack — AutomatizaLab — 2021 - Actualidad — Freelance Remoto</h3>
        <ul>
          <li>Sistemas web con <strong className='strong'>Django + HTMX + Tailwind + PostgreSQL</strong>: cotizadores industriales con bonificaciones en cascada, validación dimensional y generación de PDF.</li>
          <li>Plataformas municipales: bolsa de empleo con <strong className='strong'>parseo de CV por IA</strong> y matching inteligente; sistema fitosanitario con mapas Leaflet.</li>
          <li><strong className='strong'>Automatizaciones con n8n</strong> (self-hosted en Railway): workflows integrando GHL, Airtable, Google Docs, generación de PDF y SMTP (hasta 76 combinaciones de contenido).</li>
          <li><strong className='strong'>Chatbots de WhatsApp con n8n + GPT-4 + Google Sheets</strong>: clasificación de intenciones, deduplicación y arquitectura de prompts.</li>
          <li><strong className='strong'>SGC ISO 9001 con Django</strong>: no conformidades, flujos CAPA, reportes PDF, bot Telegram con GPT-4o vision.</li>
          <li>Bot de trading algorítmico con análisis de sentimiento: <strong className='strong'>FastAPI + PostgreSQL</strong> backend, dashboard interactivo en React, integración con Binance API para paper trading.</li>
          <li>Diseño UX/UI con Vue.js, Tailwind y Figma. Paneles multi-tenant con permisos por rol.</li>
          <li><strong className='strong'>Agentes IA con n8n y OpenAI API</strong>: flujos automatizados de atención y gestión.</li>
        </ul>

        <h3 className='cv-job'>Asistente en Dirección de Producción — Metalúrgica Tesio S.A. — Oct 2017 - Dic 2020</h3>
        <p>Gestión de órdenes de compra y producción. Presentaciones con gráficos informativos. Resolución de reclamos.
        Área Calidad: investigación, organización y redacción de documentos requeridos para la certificación <strong className='strong'>ISO 9001:2015</strong>.</p>

      <h2 className='cv-title'>Formación Académica</h2>

      <h3 className='cv-job'>2025 — Agentes IA con n8n — UBA IALab</h3>
      <p>Diseño de <strong className='strong'>agentes inteligentes con n8n, LLMs y herramientas externas</strong>.</p>

      <h3 className='cv-job'>2024 — Inteligencia Artificial con Python — M1000IA</h3>
      <p><strong className='strong'>Machine Learning, pandas, modelos predictivos y análisis de datos</strong>.</p>

      <h3 className='cv-job'>2023 — Diseño Gráfico Digital — DIGITALMIND</h3>
      <p><strong className='strong'>Illustrator, Photoshop, Figma</strong>. Interfaces, branding y piezas gráficas.
      <u> Proyecto</u>: <a href='https://drive.google.com/file/d/1jc5h-Fqsc_O3DhBMVycWeiY8eB-8sd14/view?usp=drive_link' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>

      <h3 className='cv-job'>2022 — React JS — Codo a Codo, Buenos Aires Ciudad</h3>
      <p><strong className='strong'>Componentes, hooks, estado, consumo de APIs y SPA</strong>.
      <u> Proyecto</u>: <a href='https://github.com/luciaf17/cotizador-cripto' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>

      <h3 className='cv-job'>2022 — Salesforce Developer — Cloudgaia, Buenos Aires Ciudad</h3>
      <p><strong className='strong'>Apex, Lightning Components, configuración de orgs</strong>.
      <u> Proyecto</u>: <a href='https://github.com/CloudConsultingProyectLED/CloudConsultingLEDMM' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>

      <h3 className='cv-job'>2022 — Tableau & Visualización de Datos — DataBrotes / Bluepatagon</h3>
      <p><strong className='strong'>Análisis y dashboards</strong>. Proyecto: Análisis de Criptomonedas.
      <u> Proyecto</u>: <a href='https://public.tableau.com/app/profile/mar.a.luc.a.futestti/viz/AnlisisCriptomonedas-DataBrotes/Dashboard1' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>

      <h3 className='cv-job'>2021 — Desarrollo Mobile React Native — Codo a Codo & IBM</h3>
      <p>App Iris-App en equipo.
      <u> Proyecto</u>: <a href='https://github.com/ibm-grupo-107/Iris-App' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>

      <h3 className='cv-job'>2021 — Argentina Programa #YoProgramo — CESSI</h3>
      <p><strong className='strong'>Java, SQLite, HTML, CSS, Bootstrap, Java Web</strong>.
      <u> Proyecto</u>: <a href='https://github.com/ap-lisajunior/turismo-tierra-media-webapp' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>

      <h3 className='cv-job'>2012 - 2018 — Lic. en Relaciones Internacionales — UAI</h3>
      <p>Facultad de Derecho y Ciencias Políticas. Promedio: 8.03 puntos.</p>

      <h2 className='cv-title'>Idiomas</h2>

      <h3 className='cv-job'>Inglés B1 — En curso</h3>
      <h3 className='cv-job'>Portugués B1 — Certificado</h3>
      <h3 className='cv-job'>Francés A2 — Alianza Francesa</h3>
    </div>
  )
}

export default Curriculum
