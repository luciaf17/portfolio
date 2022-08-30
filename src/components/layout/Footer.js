import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => { 

  return (
    <footer className='footer'>
      <h3>Mis redes</h3>
      <Link to='https://www.linkedin.com/in/maria-lucia-futestti-98a459103/'><FaLinkedinIn className='animate__animated animate__zoomInDown'/></Link>
      <Link to='https://github.com/luciaf17'><FaGithub className='animate__animated animate__zoomInDown'/></Link>
    </footer>
  )
}

export default Footer
