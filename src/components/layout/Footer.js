import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const Footer = () => { 

  return (
    <footer className='footer'>
      <h3>Mis redes</h3>
      <a href='https://www.linkedin.com/in/maria-lucia-futestti-98a459103/' rel="noreferrer" target="_blank"><FaLinkedinIn className='animate__animated animate__zoomInDown'/></a>
      <a href='https://github.com/luciaf17' rel="noreferrer" target="_blank"><FaGithub className='animate__animated animate__zoomInDown'/></a>
      <a href='https://public.tableau.com/app/profile/mar.a.luc.a.futestti' rel="noreferrer" target="_blank"><SiTableau className='animate__animated animate__zoomInDown'/></a>
      <h4>Email: luciafutestti@gmail.com</h4>
    </footer>
  )
}

export default Footer
