import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const HeaderNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/' || location.pathname === '/inicio';

  const goToSection = (id) => (e) => {
    e.preventDefault();
    if (!onHome) {
      navigate('/inicio');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className='header'>
      <h3>
        <Link to="/inicio">María Lucía Futestti</Link>
      </h3>
      <nav>
        <ul>
          <li><a href="#proyectos" onClick={goToSection('proyectos')}>Proyectos</a></li>
          <li><a href="#stack" onClick={goToSection('stack')}>Stack</a></li>
          <li><a href="#sobre-mi" onClick={goToSection('sobre-mi')}>Sobre mí</a></li>
          <li><Link to="/curriculum">Curriculum</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
