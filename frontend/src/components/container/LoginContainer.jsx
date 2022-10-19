import React, { useState } from 'react'
import * as Yup from 'yup'

<<<<<<< HEAD

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useGoogleLogin } from '@react-oauth/google'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import '../../styles/Login.css'
import logo from '../../assets/images/Logo-bg-black.png'
import login_svg from '../../assets/images/Wallet_Monochromatic.svg'
import { FcGoogle } from 'react-icons/fc'
import { httpsRequest } from '../../assets/config/axios'
import  setCookie from '../../assets/config/setCookie'
import  removeCookie  from '../../assets/config/removeCookie'
=======
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { GoogleLogin } from '@react-oauth/google'
import { httpsRequest } from '../../assets/config/axios'

import '../../styles/Login.css'
import logo from '../../assets/images/Logo-bg-black.png'
import login_image from '../../assets/images/login-image.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
>>>>>>> origin/CJ_BK

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
  const [remember, setRemember] = useState(false)
<<<<<<< HEAD
  
  const login = (info) =>{
    try {
      httpsRequest('post', 'http:localhost:5000/api/login', info)
      
      if (remember) {
        removeCookie('user')
        setCookie('user', info)
      }
      location.assign('/dashboard')
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const MySwal = withReactContent(Swal)

  const loginGoogle = useGoogleLogin({
    onSuccess: async res => {
      try {
        const data = await httpsRequest('post', 'http:localhost:5000/api/google/login', res.tokenId)
        console.log(data)
      } catch (error) {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error, intentalo más tarde'
        })
      }
    }
  })


=======
  const MySwal = withReactContent(Swal)
  
  const login = (info) =>{

    try {
      httpsRequest('post',
       'http://localhost:5000/api/login',
        { 
            email: info.email,
            password: info.password,
            remember: remember 
        })
        .then( () => { 
          location.assign('/dashboard')
        })
        .catch( (err) => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Ha ocurrido un error, ${err.message}`
          })
        })
    } catch (error) {
      MySwal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'No hemos podido iniciar sesión',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }

>>>>>>> origin/CJ_BK
  return (
    <section className='login'>
      <div className='login-image'>

        <div className='image'>
<<<<<<< HEAD
          <img src={login_svg} alt='image-login'/>
=======
          <img src={login_image} alt='image-login'/>
>>>>>>> origin/CJ_BK
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
          <form className='form' onSubmit={ handleSubmit(login) }>
          
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='example@example.com' {...register ('email') }/>
            <p className='error'>{errors.email?.message}</p>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password...' {...register ('password') }/>
            <p className='error'>{errors.password?.message}</p>

            <div className='form-warned'>
              <div className='form-check'>
                <input type='checkbox' id='remember' onChange={ () => setRemember( !remember ) } />
                <label htmlFor='remember'>Recuerdame</label>
              </div>
              <Link to='/recoverpass' className='link' >¿Olvidaste la contraseña?</Link>
            </div>
            
<<<<<<< HEAD
            <button type='submit' className='btn btn-login' >Inicia Sesión</button>
            <button
              onClick={ loginGoogle }
              className='btn btn-google' >
              <FcGoogle className='google-svg'/>
              Inicia Sesión con Google
            </button>
=======
            <button type='submit' className='btn-login' >Inicia Sesión</button>
            <GoogleLogin
              text='sigin_with'
              size='large'
              theme='outline'
              locale='es'
              onSuccess={ res => httpsRequest('post','http://localhost:5000/api/google/login',{ token: ` ${res.credential}` })}         
              onError={ err => MySwal.fire({icon: 'error',title: 'Oops...',text: `Ha ocurrido un error, intentalo más tarde.${err}` })}
              >
            </GoogleLogin>
>>>>>>> origin/CJ_BK
      
          </form>
          
          <span className='register'>¿No tiene una cuenta? <Link className='link' to='/register'>Únase ahora</Link></span>
        </div>   

      </div>
    </section>
  )
}

export default LoginContainer
