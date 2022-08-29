import React from 'react'
import {Link} from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
  return (
    <div className='home'>
      <Link to="/contacto">Contáctame</Link>
     <h1 className='heading'>Hola! :) mi nombre es Maria Lucia Futestti</h1>
     <h2 className='title'>Sobre mi </h2>
     <p className='sobre-mi'>
     <strong>Licenciada En Relaciones Internacionales. Data analyst. Salesforce and Software/Mobile Developer</strong>. En busca de mi primer empleo en el rubro IT. También tengo experiencia en otras tecnologías, como <strong>Javascript, React JS, React Native, Node, Express, SQL, Docker, IoT con Arduino, ESP32.</strong> <br /> <br />
      Soy una persona que presta atención a los <strong>detalles</strong>, me gusta crear visualizaciones con especial mirada en el <strong>diseño</strong>, logrando un resultado armónico, agradable de ver y usar. Me gusta mucho trabajar en equipo, creo que los puntos de vista de colegas te ayudan a ver las cosas de otra manera logrando así crecer <strong>profesionalmente</strong>. Soy <strong>empática</strong>, me gusta <strong>escuchar</strong> y entender el problema que se debe resolver para luego pensar en una solución que realmente genere un valor en el usuario. Soy una apasionada de la <strong>tecnología</strong> en general, especialmente en el mundo <strong>crypto</strong> e <strong>IoT</strong>. 
    </p>
     <section className='last-works'>
      
     </section>
    </div>
  )
}

export default Inicio
