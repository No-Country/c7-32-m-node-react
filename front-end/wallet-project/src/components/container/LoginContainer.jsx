import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

import '../../styles/Login.css'
import logo from '../../assets/images/Logo-bg-black.png'
import login_svg from '../../assets/images/Wallet_Monochromatic.svg'
import axios from 'axios'

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
  const clientID = '788418791012-cg4g59fivrprdgm4eq9pkgv4fmr8474f.apps.googleusercontent.com'

  const submit = (info) =>{
    axios({
      method: 'get',
      url: 'http:localhost:5000/api/login',
      data: info
    })
  }
  
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientID,
        scope: ''
      })
    }
    gapi.load('client:auth2', initClient)  
  }, [])

  const onSuccess = (res) => {
    console.log('success:', res)
  }
  const onFailure = (err) => {
    console.log('failed:', err)
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
            <p className='error'>{errors.email?.message}</p>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password...' {...register ('password') }/>
            <p className='error'>{errors.password?.message}</p>

            <div className='form-warned'>
              <div className='form-check'>
                <input type='checkbox' id='remember'  />
                <label htmlFor='remember'>Recuerdame</label>
              </div>
              <Link to='#' className='link' >¿Olvidaste la contraseña?</Link>
            </div>
            <button type='submit' className='btn btn-login' >Inicia Sesión</button>
            <GoogleLogin
              className='btn-google'
              clientId={clientID}
              buttonText="Inicia Sesión con Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </form>
          
          <span className='register'>¿No tiene una cuenta? <Link className='link' to='/register'>Únase ahora</Link></span>
        </div>   

      </div>
    </section>
  )
}

export default LoginContainer
