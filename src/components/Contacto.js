import React, { useRef } from 'react'
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

  const notifyFields = () => toast.success('Mensaje Enviado correctamente!', {
    duration: 4000,
    position: 'center',
  
    // Styling
    style: {
    fontSize: '20px',
    backgroundColor: '#cafde6'
    }});

  let form = useRef();

  const handleReset = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    if(form.current === ''){
      notifyFields();
    }
    e.preventDefault();

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
      <form className='contact' ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Nombre' name="nombre" />
        <input type="text" placeholder='Apellido' name="apellido" />
        <input type="text" placeholder='Email' name="email" />
        <textarea placeholder='Motivo de Contacto..' name="mensaje" />
        <input type="submit" placeholder='Enviar' className='animate__animated animate__pulse'/>
        <Toaster />
      </form>
    </div>
  )
}

export default Contacto
