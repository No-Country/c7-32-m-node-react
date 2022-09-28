import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import '../../styles/Login.css'
import logo from '../../assets/images/Logo-bg-black.png'
import login_svg from '../../assets/images/Wallet_Monochromatic.svg'

const LoginSchema = Yup.object({
  email: Yup.string()
        .email('Formato invalido')
        .required('Requiere email'),
  password: Yup.string()
            .min(8, 'Mínimo 8 caracteres')
            .required('Requiere contraseña')
}).required()

const LoginContainer = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm( { resolver: yupResolver(LoginSchema) } )  

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
            <input type='email' id='email' placeholder='example@example.com' {...register ('email') }/>
            <p>{errors.email?.message}</p>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password...' {...register ('password') }/>
            <p>{errors.password?.message}</p>

            <div className='form-warned'>
              <div className='form-check'>
                <input type='checkbox' id='remember'  />
                <label htmlFor='remember'>Recuerdame</label>
              </div>
              <Link to='#' className='link' >¿Olvidaste la contraseña?</Link>
            </div>
            <button type='submit' className='btn btn-login' >Inicia Sesión</button>
            <button type='button' className='btn btn-google'>Inicia sesión con Google</button>
          </form>
          
          <span>¿No tiene una cuenta? <Link className='link'>Únase ahora</Link></span>
        </div>   

      </div>
    </section>
  )
}

export default LoginContainer
