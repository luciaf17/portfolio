import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const HeaderNav = () => {
  return (
    <header className='header'>
            <h3>
            <Link to="/inicio">Maria Lucia Futestti </Link>
            </h3> 
      <nav>
        <ul>
            <li>
                <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio"className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
            </li>
            <li>
                <NavLink to="/conocimientos"className={({isActive}) => isActive ? "active" : ""}>Conocimientos</NavLink>
            </li>
            <li>
                <NavLink to="/curriculum"className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
            </li>
            <li>
                <NavLink to="/contacto"className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
