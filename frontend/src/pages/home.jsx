import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import  logo  from '../assets/images/Logo-bg-black.png'
import  home  from '../assets/images/home-page.png'
import '../styles/homePage.css'

const Home = () => {

  const navigate = useNavigate()

  return (

    <main className='home'>
    
      <section className='home-logo'>
        <img src={ logo } alt='logo'/>
        <div className='home-sesion'>
          <span></span>
         <Link className='btn-login' to='/login'>Iniciar sesión</Link>
         <Link className='btn-register' to='/register'>!Registrate ahora¡</Link>
        </div>
      </section>

      <section className='home-info'>
        <div className='info'>
          <h1>Administre sus finanzas personales <span>y la de su familia</span> </h1>
          <p className='info-text'>
            Mira los planes, dale seguimientos a todo el progreso y mantente al tanto de todos los datos desde un solo lugar.
            Si gestionas tus proyectos con nosotros, estarás al tanto de todos los movimientos, gastos y datos que se realizan.
          </p>
          <button className='btn-register' onClick={ () => navigate('/register')}>Únete a nosotros</button>
          <span>@Createdbywenwallet</span>
        </div>
        <img src={ home } alt='empresario' />
      </section>

    </main>

  )
}

export default Home
