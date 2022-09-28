import React from 'react'
import { useForm } from 'react-hook-form'

import '../../styles/Login.css'
import logo from '../../assets/images/Logo-bg-black.png'
import login_svg from '../../assets/images/Wallet_Monochromatic.svg'

const LoginContainer = () => {

  const { register, handleSubmit, required } = useForm()  

  const submit = (e) =>{
    e.preventDefault()

  }
  return (
    <section className='login'>
      <div className='login-image'>

        <div className='image'>
          <img src={login_svg} alt='image-login'/>
        </div>

        <h1>Una forma fácil de gestionar su dinero</h1>
        <p>Conecta tu dinero con tus amigos, tarjetas, bancos y marcas de forma segura</p>
      </div>

      <div className='login-info'>

        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>

        <div className='login-form'>
          <p>Bienvenido</p>
          <h2>Acceda a su cuenta</h2>
          <form className='form' onSubmit={ handleSubmit(submit) }>
          
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='example@example.com' {...register ('email', { required }) }/>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password...' {...register ('password', { required }) }/>

            <button type='submit' className='btn' >Inicia Sesión</button>
          </form>
          <span>¿No tiene una cuenta? Únase ahora</span>
        </div>   

      </div>
    </section>
  )
}

export default LoginContainer
