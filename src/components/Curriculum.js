import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Curriculum = () => {
  return (
      <div className='page animate__animated animate__fadeInLeft'>
        <h1 className='heading'>Mi Curriculum <a href='./CV MARIA LUCIA FUTESTTI.pdf' download={''} className='animate__animated animate__pulse'>Descargar PDF</a></h1>
        
        <h2 className='cv-title'>Experiencia Laboral</h2>
        
        <h4 className='cv-job'>Asistente en la Dirección de la Producción - 2017-2020 - Metalúrgica Tesio S.A</h4>
        <p>Funciones: Recepción de órdenes de compra y organización del
        Sistema de Producción, realización de órdenes de
        trabajo, presentaciones en Prezi con gráficos
        informativos sobre la producción, resolución de reclamos
        de clientes, relevamiento de estructuras de producción.
        Área Calidad: investigación, organización y redacción de
        documentos requeridos para la Certificación de ISO
        9001:2015.</p>
      
      <h2 className='cv-title'>Educación</h2>
      
      <h4 className='cv-job'> BOTS - Grupo Inteligencia Colectiva</h4>
      <p>Programa de formación en <strong className='strong'>Robótica Arduino</strong>. 
      <u> Proyecto</u>: <a href='https://public.tableau.com/app/profile/mar.a.luc.a.futestti/viz/AnlisisCriptomonedas-DataBrotes/Dashboard1' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>
      
      <h4 className='cv-job'>Junio 2022– Agosto 2022 - DataBrotes  - Bluepatagon.</h4>
      <p>Programa de formación en <strong className='strong'>Tableau</strong>. 
      <u> Proyecto</u>: <a href='https://public.tableau.com/app/profile/mar.a.luc.a.futestti/viz/AnlisisCriptomonedas-DataBrotes/Dashboard1' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>
      
      <h4 className='cv-job'>Marzo 2022– Julio - React JS - Codo a codo – Buenos Aires Ciudad.</h4>
      <p>Programa de formación en <strong className='strong'>React JS, Node, Express</strong>
      <u>. Proyecto</u> <a href='https://github.com/luciaf17/cotizador-cripto' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>
      
      <h4 className='cv-job'>Enero 2022 - Marzo: Bootcamp Salesforce Developer - Cloudgaia</h4>
      <p>Programa de formación en <strong className='strong'>Salesforce, Apex, LWC, Declarativo</strong>
      <u>. Proyecto</u> <a href='https://github.com/CloudConsultingProyectLED/CloudConsultingLEDMM' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>
      
      <h4 className='cv-job'>Septiembre - Diciembre 2021 : Curso de especialización en desarrollo mobile - Codo a Codo & IBM Skillsbuild</h4>
      <p>Programa de formación en <strong className='strong'>React Native</strong>
      <u>. Proyecto</u> <a href='https://github.com/ibm-grupo-107/Iris-App' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>
      
      <h4 className='cv-job'>Julio 2021 – Diciembre : Argentina Programa 2ºparte #YoProgramo. - CESSI</h4>
      <p>Programa de formación en <strong className='strong'>JAVA – SQLite – HTML - CSS - Bootstrap</strong>
      <u>. Proyecto</u> <a href='https://github.com/ap-lisajunior/turismo-tierra-media-webapp' rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt className='animate__animated animate__zoomInDown'/></a></p>
      
      <h4 className='cv-job'>2012/2018 –LICENCIADA EN RELACIONES INTERNACIONALES - UAI</h4>
      <p>Facultad de Derecho y Ciencia Política. Promedio: 8.03 puntos.</p>

      <h2 className='cv-title'>Idiomas</h2>

      <h4 className='cv-job'>Inglés B1</h4>
      <h4 className='cv-job'>Portugués B1</h4>
      <h4 className='cv-job'>Francés A2</h4>
    </div>
  )
}

export default Curriculum
