import React from 'react'
import { FaPython, FaReact, FaDatabase, FaSalesforce, FaFigma, FaDocker, FaWordpress, FaGitAlt, FaRobot, FaCogs, FaBolt } from "react-icons/fa";
import { GoRadioTower } from "react-icons/go";
import { TbWritingSign } from "react-icons/tb";
import { SiDjango, SiFastapi, SiPostgresql, SiTailwindcss, SiVuedotjs, SiOpenai, SiTableau, SiPandas, SiArduino, SiCanva, SiAdobephotoshop, SiAdobeillustrator, SiRailway, SiWhatsapp } from "react-icons/si";


const Servicios = () => {
  return (
    <div className='page animate__animated animate__fadeInLeft'>
      <h1 className='heading'>Mis Conocimientos</h1>
      <section className='services'>
        <article className='service'>
          <h3>IA & LLMs - LangGraph, LangChain, LlamaIndex, OpenAI / Gemini / Anthropic APIs, function calling, MCP</h3><SiOpenai className='icon animate__animated animate__zoomInDown'/><FaRobot className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>RAG & Evals - RAG híbrido (pgvector, RRF, reranking), evals, Langfuse, Ollama, fine-tuning de BERT</h3><FaRobot className='icon animate__animated animate__zoomInDown'/><FaDatabase className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Automatización - n8n (self-hosted), GoHighLevel (GHL), Airtable, WhatsApp Cloud API, Telegram Bot API, Retell AI</h3><FaCogs className='icon animate__animated animate__zoomInDown'/><SiWhatsapp className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Backend - Python, FastAPI, Django, Pydantic, PostgreSQL, pgvector, Supabase, REST APIs, SSE, webhooks</h3><FaPython className='icon animate__animated animate__zoomInDown'/><SiDjango className='icon animate__animated animate__zoomInDown'/><SiFastapi className='icon animate__animated animate__zoomInDown'/><SiPostgresql className='icon animate__animated animate__zoomInDown'/>
        </article>
        <article className='service'>
          <h3>Frontend - HTMX, Tailwind, React, Vue.js</h3><FaBolt className='icon animate__animated animate__zoomInDown'/><SiTailwindcss className='icon animate__animated animate__zoomInDown'/><FaReact className='icon animate__animated animate__zoomInDown'/><SiVuedotjs className='icon animate__animated animate__zoomInDown'/>
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
          <h3>DevOps - Docker, GitHub Actions, Railway, pytest, ruff, uv, Linux</h3><SiRailway className='icon animate__animated animate__zoomInDown'/><FaDocker className='icon animate__animated animate__zoomInDown'/><FaGitAlt className='icon animate__animated animate__zoomInDown'/>
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
