import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "Cotizador Industrial Multi-Tenant",
    client: "Metalúrgica Ceibo S.R.L.",
    tags: ["Django", "PostgreSQL", "HTMX", "Tailwind", "ReportLab"],
    description: "Sistema de cotización con 18 modelos, motor de bonificaciones en cascada, validación dimensional, acumulación por tasas, IVA diferenciado, generación de PDF y paneles multi-tenant con permisos por rol.",
    highlight: "128 horas de desarrollo · 18 modelos Django · Motor de bonificaciones de 4 niveles",
    category: "fullstack",
  },
  {
    title: "SGC ISO 9001:2015",
    client: "Metalúrgica Ceibo S.R.L.",
    tags: ["Django", "DRF", "PostgreSQL", "n8n", "Telegram", "GPT-4o Vision", "ReportLab"],
    description: "Sistema de gestión de calidad completo: tracking de no conformidades, flujos CAPA, módulo de interacciones con cliente, encuestas de satisfacción con análisis IA, reportes PDF, y bot Telegram con análisis de fotos de planta via GPT-4o Vision.",
    highlight: "Bot Telegram con visión IA · Reportes PDF automáticos · 2 instancias Railway en producción",
    category: "fullstack",
  },
  {
    title: "Bolsa de Trabajo Municipal",
    client: "Municipalidad de Armstrong",
    tags: ["Django", "HTMX", "Tailwind", "PostgreSQL", "GPT-4.1-mini"],
    description: "Plataforma de empleo con parseo de CV por IA, matching inteligente candidato-puesto, publicaciones anónimas, pipeline de seguimiento y 3 paneles diferenciados (admin, empresa, candidato). Producto replicable bajo emplear.com.ar.",
    highlight: "Parseo de CV con IA · Matching inteligente · Replicable para otros municipios",
    category: "fullstack",
  },
  {
    title: "Automatización Bulthaup",
    client: "Bulthaup (Valencia & Moraira)",
    tags: ["n8n", "Airtable", "Google Docs", "Azure OAuth2", "JavaScript"],
    description: "Automatización end-to-end para generación de emails personalizados de recomendación de cocinas. Motor JavaScript de ~300 líneas mapea 76 combinaciones de contenido desde Airtable, genera PDF vía Google Docs y envía por Outlook.",
    highlight: "76 combinaciones de contenido · Generación automática de PDF · Envío SMTP con OAuth2",
    category: "automation",
  },
  {
    title: "Chatbot WhatsApp — Día de Granja",
    client: "Centro Educativo Día de Granja",
    tags: ["n8n", "GPT-4.1-mini", "Google Sheets", "WhatsApp Cloud API"],
    description: "Bot de atención automatizada con clasificación de intenciones, deduplicación de respuestas, switch on/off global, prompts con reglas de acción directa y link de reserva dinámico.",
    highlight: "Clasificación de intenciones por IA · Switch global on/off · Prompt architecture",
    category: "automation",
  },
  {
    title: "Sistema de Voz Multi-Clínica",
    client: "Clínicas varias",
    tags: ["Retell", "n8n", "Airtable"],
    description: "Sistema de voz con IA para atención telefónica de clínicas. Integración Retell + n8n + Airtable para gestión de turnos y consultas automatizadas por voz.",
    highlight: "Atención por voz con IA · Multi-tenant · Integración Retell",
    category: "automation",
  },
  {
    title: "Bot de Trading Algorítmico",
    client: "Proyecto propio",
    tags: ["FastAPI", "PostgreSQL", "React", "Celery", "Binance API"],
    description: "Bot de trading con análisis de sentimiento multi-fuente combinado con indicadores técnicos. Dashboard interactivo en React para monitoreo en tiempo real. Backend FastAPI con Celery para tareas asíncronas e integración con Binance API.",
    highlight: "Dashboard React en tiempo real · Análisis de sentimiento · Paper trading con Binance",
    category: "fullstack",
  },
  {
    title: "Planimetría Industrial",
    client: "Metalúrgica Ceibo S.R.L.",
    tags: ["Python", "pdfplumber", "gspread", "Google Drive API"],
    description: "Sistema de gestión de planos industriales con procesamiento de PDF, relaciones estructurales, alertas automáticas y sincronización con Google Sheets. 6 fases de desarrollo, 229 tests pasando.",
    highlight: "229 tests · 6 fases · Procesamiento de PDFs industriales",
    category: "fullstack",
  },
];

const CATEGORIES = [
  { key: "all", label: "Todos" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "automation", label: "Automatización & IA" },
];

const SKILLS = [
  { group: "Frontend", items: "React · Vue.js · HTMX · Tailwind CSS · React Native · Figma" },
  { group: "Backend", items: "Django · FastAPI · PostgreSQL · REST APIs · Celery" },
  { group: "Automatización", items: "n8n · WhatsApp Cloud API · GoHighLevel · Airtable · Google Apps Script" },
  { group: "IA", items: "OpenAI API · GPT-4 / GPT-4o Vision · Agentes IA · Prompt Engineering" },
  { group: "DevOps", items: "Railway · Cloudflare · Git/GitHub · Docker" },
  { group: "Datos", items: "Tableau · pandas · Excel avanzado · pdfplumber" },
];

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function ProjectCard({ project, index }) {
  const ref = useRef();
  const visible = useInView(ref);
  const tagColors = {
    Django: "#0C4B33", React: "#1a2d3d", PostgreSQL: "#1a2540", n8n: "#2d1a1a",
    "GPT-4o Vision": "#2d1a2d", "GPT-4.1-mini": "#2d1a2d", Tailwind: "#0c2d3d",
    FastAPI: "#0c3d2d", Airtable: "#1a2d1a", JavaScript: "#2d2d0c",
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
        background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(212, 68, 124, 0.3)";
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(212, 68, 124, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #D4447C, transparent)", opacity: 0.6 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "18px", fontWeight: 600, color: "#F0F0F0", margin: 0, letterSpacing: "-0.01em" }}>{project.title}</h3>
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#D4447C", margin: 0, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>{project.client}</p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#999", margin: 0, lineHeight: 1.6 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#ccc",
            background: tagColors[tag] || "rgba(255,255,255,0.05)",
            padding: "3px 10px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.08)",
          }}>{tag}</span>
        ))}
      </div>
      <div style={{
        marginTop: "auto", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#D4447C", opacity: 0.8, lineHeight: 1.5,
      }}>
        {project.highlight}
      </div>
    </div>
  );
}

function SkillBar({ skill, index }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)",
      transition: `all 0.6s ease ${index * 0.08}s`,
      padding: "16px 20px", background: "rgba(255,255,255,0.02)",
      borderLeft: "2px solid #D4447C", borderRadius: "0 8px 8px 0",
    }}>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", fontWeight: 600, color: "#D4447C", marginBottom: "4px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{skill.group}</div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999" }}>{skill.items}</div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F0F0F0", position: "relative", overflow: "hidden" }}>
      {/* Ambient background */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,68,124,0.06) 0%, transparent 70%)", transform: `translateY(${scrollY * 0.1}px)` }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,42,74,0.15) 0%, transparent 70%)", transform: `translateY(${scrollY * -0.05}px)` }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Hero */}
        <header style={{ paddingTop: "100px", paddingBottom: "80px" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#D4447C", marginBottom: "16px", letterSpacing: "0.1em" }}>FULL-STACK DEVELOPER & AUTOMATION SPECIALIST</p>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, margin: "0 0 24px 0", letterSpacing: "-0.03em" }}>
            María Lucía<br />
            <span style={{ background: "linear-gradient(135deg, #D4447C, #FF6B9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Futestti</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#888", maxWidth: "560px", lineHeight: 1.7, margin: "0 0 40px 0" }}>
            Desarrollo sistemas web, automatizaciones inteligentes y soluciones con IA que resuelven problemas reales de negocio. Desde Córdoba, Argentina, para clientes en LATAM y Europa.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="mailto:luciafutestti@gmail.com" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500,
              color: "#fff", background: "#D4447C", padding: "12px 28px",
              borderRadius: "100px", textDecoration: "none", transition: "all 0.3s",
            }}>Contactame</a>
            <a href="https://www.linkedin.com/in/maria-lucia-futestti-98a459103/" target="_blank" rel="noreferrer" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500,
              color: "#ccc", background: "rgba(255,255,255,0.05)", padding: "12px 28px",
              borderRadius: "100px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s",
            }}>LinkedIn</a>
            <a href="https://github.com/luciaf17" target="_blank" rel="noreferrer" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500,
              color: "#ccc", background: "rgba(255,255,255,0.05)", padding: "12px 28px",
              borderRadius: "100px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s",
            }}>GitHub</a>
          </div>
        </header>

        {/* Projects */}
        <section style={{ paddingBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Proyectos</h2>
            <div style={{ display: "flex", gap: "8px" }}>
              {CATEGORIES.map((cat) => (
                <button key={cat.key} onClick={() => setFilter(cat.key)} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500,
                  color: filter === cat.key ? "#fff" : "#777",
                  background: filter === cat.key ? "rgba(212,68,124,0.2)" : "rgba(255,255,255,0.03)",
                  border: filter === cat.key ? "1px solid rgba(212,68,124,0.4)" : "1px solid rgba(255,255,255,0.06)",
                  padding: "6px 16px", borderRadius: "100px", cursor: "pointer", transition: "all 0.3s",
                }}>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}>
            {filtered.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </section>

        {/* Skills */}
        <section style={{ paddingBottom: "80px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: 700, marginBottom: "32px", letterSpacing: "-0.02em" }}>Stack Técnico</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {SKILLS.map((s, i) => <SkillBar key={s.group} skill={s} index={i} />)}
          </div>
        </section>

        {/* About */}
        <section style={{ paddingBottom: "80px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "28px", fontWeight: 700, marginBottom: "24px", letterSpacing: "-0.02em" }}>Sobre mí</h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px",
          }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#999", lineHeight: 1.8 }}>
              Lic. en Relaciones Internacionales reconvertida a desarrolladora full-stack y especialista en automatizaciones con IA. Mi formación me dio visión estratégica, capacidad de análisis y habilidades de negociación que aplico a cada proyecto.
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#999", lineHeight: 1.8 }}>
              Trabajo desde Cruz Alta, Córdoba, sirviendo clientes en Argentina, España y LATAM. Fundadora de AutomatizaLab. Nacionalidad italiana. Disponible para trabajo remoto full-time.
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer style={{
          paddingBottom: "60px", paddingTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px",
        }}>
          <div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", fontWeight: 600, margin: "0 0 4px 0" }}>María Lucía Futestti</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666", margin: 0 }}>luciafutestti@gmail.com · +549 3467 403697</p>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#444" }}>
            © 2025 — Built with passion from Córdoba, Argentina
          </div>
        </footer>
      </div>
    </div>
  );
}
