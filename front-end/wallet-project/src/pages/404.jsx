import React from 'react'
import Header from '../components/pure/header'
import { useNavigate } from 'react-router-dom'

import '../styles/notFound.css'
import notFound from '../assets/images/404.svg'
const Error = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Header title='Error' id='none'/>
      <main className='main'>
        <section className='not-found'>
          <img src={notFound} alt='Not Found Image'/>
          <p className='not-found-fs'>Oh No! Algo salió mal</p>
          <p className='not-found-sc'>Por favor, inténtelo más tarde</p>
          <button className='not-found-btn' onClick={() => navigate('/')}>Ir al inicio</button>
        </section>
      </main>
    </div>
  )
}

export default Error
