import React from 'react'
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import Contacto from '../components/Contacto'
import Curriculum from '../components/Curriculum'
import Inicio from '../components/Inicio'
import Footer from '../components/layout/Footer'
import HeaderNav from '../components/layout/HeaderNav'
import Portafolio from '../components/Portafolio'
import Proyecto from '../components/Proyecto'
import Conocimientos from '../components/Conocimientos'

const MisRutas = () => {
  return (
    <BrowserRouter >
      <HeaderNav />
      <section className='content'>
        <Routes>
              <Route path='/' element={<Navigate to="/inicio"/>}></Route>
              <Route path='/inicio' element={<Inicio/>}></Route>
              <Route path='/portfolio' element={<Portafolio/>}></Route>
              <Route path='/conocimientos' element={<Conocimientos/>}></Route>
              <Route path='/curriculum' element={<Curriculum/>}></Route>
              <Route path='/contacto' element={<Contacto/>}></Route>
              <Route path='/proyecto/:id' element={<Proyecto/>}></Route>
              <Route path='/*' element={
                <div className='page'>
                  <h1 className='heading'>Error 404</h1>
                </div> } />
          </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  )
}

export default MisRutas
