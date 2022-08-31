import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contacto = () => {

  const notify = () => toast.success('Mensaje Enviado correctamente!', {
    duration: 4000,
    position: 'center',
  
    // Styling
    style: {
    fontSize: '20px',
    backgroundColor: '#cafde6'
    },
  
    // Custom Icon
    icon: '👏'});
  const notifyError = () => toast.error('Error al enviar mensaje :(');

  const notifyFields = () => toast.error('Faltan Campos para Rellenar :(', {
    duration: 4000,
    position: 'center',
  
    // Styling
    style: {
    fontSize: '20px',
    backgroundColor: '#ff6565'
    }});

    const notifyFieldsLength = () => toast.error('Los campos deben tener una longitud mínima de 3 caracteres', {
      duration: 4000,
      position: 'center',
    
      // Styling
      style: {
      fontSize: '20px',
      backgroundColor: '#ff6565'
      }});

      const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      const notifyFieldsEmail = () => toast.error('Ingrese un email válido', {
        duration: 4000,
        position: 'center',
      
        // Styling
        style: {
        fontSize: '20px',
        backgroundColor: '#ff6565'
        }});

  let form = useRef();

  const handleReset = () => {
    form.current.reset();
    setValues('');
  };


  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });

  const {nombre, apellido, email, mensaje} = values;

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };


  const sendEmail = (e) => {
    e.preventDefault();

    if(nombre === '' || apellido === '' || email === '' || mensaje === '' ){
      notifyFields();
      return;
    } 

    if(nombre.length < 3 || apellido.length < 3 || mensaje.length < 3){
      notifyFieldsLength();
      return;
    }

    if(!isValidEmail.test(email)){
      notifyFieldsEmail();
      return;
    }

    emailjs.sendForm('service_kpt4rcn', 'template_eeemvp7', form.current, 'f7r-tRS8pVAXWqS3M')
      .then((result) => {
        notify();
        handleReset();
      }, (error) => {
        notifyError();
      });
  };

  return (
    <div className='page animate__animated animate__fadeInLeft'>
      <h1 className='heading'>Contacto</h1>
      <form className='contact' ref={form} >
        <input type="text" placeholder='Nombre' onChange={handleChange} name="nombre" value={nombre}/>
        <input type="text" placeholder='Apellido' onChange={handleChange} name="apellido" value={apellido}/>
        <input type="text" placeholder='Email' onChange={handleChange} name="email" value={email}/>
        <textarea placeholder='Motivo de Contacto..' onChange={handleChange} name="mensaje" value={mensaje}/>
        <input type="submit" onClick={sendEmail} placeholder='Enviar' className='animate__animated animate__pulse'/>
        <Toaster />
      </form>
    </div>
  )
}

export default Contacto
