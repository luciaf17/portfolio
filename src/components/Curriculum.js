import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Curriculum = () => {
  return (
      <div className='page animate__animated animate__fadeInLeft'>
        <h1 className='heading'>Mi Curriculum <a href={process.env.PUBLIC_URL + '/CV-Maria-Lucia-Futestti-AI-Engineer.pdf'} download={''} className='animate__animated animate__pulse'>Descargar CV</a></h1>

        <h2 className='cv-title'>Experiencia Laboral</h2>

        <h3 className='cv-job'>Desarrolladora Full-Stack & AI Engineer — Freelance — 2021 - Actualidad — Remoto</h3>
        <ul>
          <li><strong className='strong'>Hub de IA de AutomatizaLab (FastAPI + LangGraph)</strong>, en producción para logística agropecuaria: grafo de agente con confirmación humana vía interrupt y checkpointer en Postgres; structured output con Pydantic (14 intenciones, prompt versionado medido con evals); streaming por SSE; RAG híbrido con pgvector, RRF y reranking (recall@5 95%); observabilidad con Langfuse; 137 tests y CI en GitHub Actions; Docker en Railway.</li>
          <li><strong className='strong'>ERP AutomatizaApp (Django multi-tenant)</strong> para PyMEs industriales y agropecuarias: pedidos, viajes, paradas, stock y cotizador con motor de bonificaciones, validación dimensional y PDF.</li>
          <li><strong className='strong'>Plataforma multi-cliente de agentes IA sobre WhatsApp Cloud API</strong>: clasificador de intención, agente conversacional con herramientas contra CRM y base de datos, agente de análisis por evento. Servidor MCP propio.</li>
          <li><strong className='strong'>Agente de voz con Retell AI + n8n</strong> para clínicas: atiende llamadas, agenda, reprograma o cancela turnos en el calendario; recordatorios automáticos que reducen ausencias.</li>
          <li>Captación automatizada para infoproductores: agente de voz que contactó una base de 500 leads, calificó interés y agendó sesiones de venta; dashboard con métricas del embudo.</li>
          <li><strong className='strong'>SGC ISO 9001 con Django</strong>: no conformidades, flujos CAPA, reportes PDF, bot Telegram con GPT-4o Vision que extrae datos de reportes de planta fotografiados.</li>
          <li>Plataformas municipales: bolsa de empleo con <strong className='strong'>parseo de CV por LLM</strong>, matching semántico y pipeline; sistema fitosanitario con mapas Leaflet.</li>
          <li><strong className='strong'>Automatizaciones end-to-end con n8n</strong> (self-hosted): workflows integrando GHL, Airtable, Google Docs, generación de PDF y SMTP.</li>
        </ul>

        <h3 className='cv-job'>Asistente en Dirección de Producción — Metalúrgica Tesio S.A. — Oct 2017 - Dic 2020</h3>
        <p>Gestión de órdenes de compra y producción. Presentaciones con gráficos informativos. Resolución de reclamos.
        Área Calidad: investigación, organización y redacción de documentos requeridos para la certificación <strong className='strong'>ISO 9001:2015</strong>.</p>

      <h2 className='cv-title'>Formación Académica</h2>

      <h3 className='cv-job'>2025 — Agentes IA con n8n — UBA IALab</h3>
      <p>Diseño de <strong className='strong'>agentes inteligentes con n8n, LLMs y herramientas externas</strong>.</p>

      <h3 className='cv-job'>2024 — Inteligencia Artificial con Python — M1000IA & IBM</h3>
      <p><strong className='strong'>Fine-tuning de BERT para análisis de sentimiento, Machine Learning y pandas</strong>.</p>

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
