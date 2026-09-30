import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { trabajos, categorias, skills } from '../data/Trabajos'

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function ProjectCard({ project, index }) {
  const ref = useRef();
  const visible = useInView(ref);
  const imgSrc = process.env.PUBLIC_URL + '/' + (project.imagen || `${project.id}.png`);
  return (
    <article
      ref={ref}
      className="al-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.07}s`
      }}
    >
      <Link to={"/proyecto/" + project.id} className="al-card-link">
        <div className="al-card-thumb">
          <img
            src={imgSrc}
            alt={project.id}
            onError={(e) => { e.currentTarget.src = process.env.PUBLIC_URL + '/placeholder.svg'; }}
          />
        </div>
        <div className="al-card-body">
          <h3 className="al-card-title">{project.nombre}</h3>
          {project.problema ? (
            <>
              <p className="al-card-desc"><strong>Problema:</strong> {project.problema}</p>
              <p className="al-card-desc"><strong>Solución:</strong> {project.solucion}</p>
            </>
          ) : (
            <p className="al-card-desc">{project.descripcion}</p>
          )}
          <div className="al-card-tags">
            {project.tags && project.tags.map(tag => (
              <span key={tag} className="al-tag">{tag}</span>
            ))}
          </div>
          {project.highlight && (
            <div className="al-card-highlight">{project.highlight}</div>
          )}
        </div>
      </Link>
    </article>
  );
}

function SkillBar({ skill, index }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      className="al-skill"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 0.5s ease ${index * 0.07}s`
      }}
    >
      <div className="al-skill-group">{skill.group}</div>
      <div className="al-skill-items">{skill.items}</div>
    </div>
  );
}

const Inicio = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? trabajos : trabajos.filter(p => p.category === filter);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="al-landing">
      <div className="al-ambient">
        <div className="al-ambient-1" />
        <div className="al-ambient-2" />
      </div>

      <section id="hero" className="al-hero">
        <p className="al-eyebrow">APPLIED AI ENGINEER · AGENTES, RAG Y AUTOMATIZACIÓN CON LLMs</p>
        <h1 className="al-name">
          María Lucía<br />
          <span className="al-name-grad">Futestti</span>
        </h1>
        <p className="al-lead">
          Desarrolladora Python con 5 años de experiencia, especializada en llevar IA generativa a
          producción: agentes conversacionales y de voz, sistemas RAG, integraciones con LLMs y
          automatización de procesos de negocio. Trabajo con clientes en Argentina y España.
          Formación en Relaciones Internacionales y 3 años en producción industrial: entiendo el
          negocio antes de automatizarlo.
        </p>
        <div className="al-cta-row">
          <a href="#proyectos" onClick={scrollTo('proyectos')} className="al-btn al-btn-primary">Ver proyectos</a>
          <a href="#stack" onClick={scrollTo('stack')} className="al-btn al-btn-ghost">Stack técnico</a>
          <a href="#sobre-mi" onClick={scrollTo('sobre-mi')} className="al-btn al-btn-ghost">Sobre mí</a>
          <Link to="/curriculum" className="al-btn al-btn-ghost">Curriculum</Link>
        </div>
      </section>

      <section id="proyectos" className="al-section">
        <div className="al-section-head">
          <h2 className="al-section-title">Proyectos</h2>
          <div className="al-filters">
            {categorias.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={"al-chip " + (filter === cat.key ? 'al-chip-active' : '')}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className="al-grid">
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </section>

      <section id="stack" className="al-section">
        <h2 className="al-section-title">Stack técnico</h2>
        <div className="al-skills">
          {skills.map((s, i) => <SkillBar key={s.group} skill={s} index={i} />)}
        </div>
      </section>

      <section id="sobre-mi" className="al-section">
        <h2 className="al-section-title">Sobre mí</h2>
        <div className="al-about">
          <p>
            Soy Lic. en Relaciones Internacionales y trabajé 3 años en producción industrial antes de
            dedicarme al desarrollo: <strong>entiendo el negocio antes de automatizarlo</strong>.
          </p>
          <p>
            Hoy llevo <strong>IA generativa a producción</strong>: agentes con LangGraph y confirmación
            humana, sistemas RAG medidos con evals, agentes conversacionales y de voz, y
            <strong> automatización de procesos</strong> con n8n self-hosted, GoHighLevel y Airtable.
          </p>
          <p>
            Trabajo desde Cruz Alta, Córdoba, con clientes en Argentina y España.
            Nacionalidad italiana. Disponible para trabajo remoto full-time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
