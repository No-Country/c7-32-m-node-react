import React from 'react'
import Header from '../components/pure/header'

import '../styles/notFound.css'
import notFound from '../assets/images/404.svg'
const Error = () => {

  return (
    <div>
      <Header title='Erorr' id='none'/>
      <main className='main'>
        <section className='not-found'>
          <img src={notFound} alt='Not Found Image'/>
          <p className='not-found-fs'>Oh No! Algo salió mal</p>
          <p className='not-found-sc'>Por favor, inténtelo más tarde</p>
          <button className='not-found-btn'>Ir al inicio</button>
        </section>
      </main>
    </div>
  )
}

export default Error
