import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='footer'>
      <h3>Mis redes</h3>
      <a href='https://www.linkedin.com/in/maria-lucia-futestti-98a459103/' rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
      <a href='https://github.com/luciaf17' rel="noreferrer" target="_blank"><FaGithub /></a>
      <a href='https://public.tableau.com/app/profile/mar.a.luc.a.futestti' rel="noreferrer" target="_blank"><SiTableau /></a>
      <h4>luciafutestti@gmail.com · +54 9 3467 403697 · Córdoba, Argentina</h4>
    </footer>
  )
}

export default Footer
