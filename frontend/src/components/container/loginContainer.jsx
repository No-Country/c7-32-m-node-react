import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { GoogleLogin } from '@react-oauth/google'


import { useUserContext } from '../context/userContext'
import { httpsRequest } from '../../assets/config/axios'
import { swalAlert } from '../../assets/config/swal'
import Modal from '../pure/modal'
import { useModal } from '../../hooks/useModal'

import '../../styles/login.css'
import logo from '../../assets/images/Logo-bg-black.png'
import login_image from '../../assets/images/login-image.png'
import RecoverForm from '../pure/forms/recoverForm'


const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Formato invalido')
    .required('Requiere email'),
  password: Yup.string()
    .min(8, 'Mínimo 8 caracteres')
    .required('Requiere contraseña')
}).required()

const LoginContainer = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LoginSchema) })
  const [remember, setRemember] = useState(false)
  const { getUser } = useUserContext()

  const navigate = useNavigate()

  const login = async (info) => {

    try {
      const res = await httpsRequest('post',
        'http://localhost:5000/api/login',
        {
          email: info.email,
          password: info.password,
          remember: remember
        })
      getUser(res.data)
      navigate('/dashboard')
      remember ? localStorage.setItem('user', JSON.stringify(res.data.user)) : sessionStorage.setItem('user', JSON.stringify(res.data.user))
    } catch (error) {
      swalAlert('error', 'Oops', error.response.data.message)
    }
  }

  const [recover, openRecover, closeRecover] = useModal(false)

  return (
    <section className='login'>
      <div className='login-image'>

        <div className='image'>
          <img src={login_image} alt='image-login' />
        </div>

        <h1>Una forma fácil de gestionar su dinero</h1>
        <p>Conecta tu dinero con tus amigos, tarjetas, bancos y marcas de forma segura</p>
      </div>

      <div className='login-info'>

        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='login-form'>
          <p>Bienvenido</p>
          <h2>Acceda a su cuenta</h2>
          <form className='form' onSubmit={handleSubmit(login)}>

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='example@example.com' {...register('email')} />
            <p className='error'>{errors.email?.message}</p>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password...' {...register('password')} />
            <p className='error'>{errors.password?.message}</p>

            <div className='form-warned'>
              <input type='checkbox' id='remember' onChange={() => setRemember(!remember)} />
              <label htmlFor='remember'>Recuerdame</label>
            </div>

            <button type='submit' className='btn-login' >Inicia Sesión</button>
            <GoogleLogin
              text='sigin_with'
              size='large'
              theme='outline'
              locale='es'
              onSuccess={res => httpsRequest('post', 'http://localhost:5000/api/google/login', { token: ` ${res.credential}` })}
            >
            </GoogleLogin>

          </form>

          <span className='register'>¿No tiene una cuenta? <Link className='link' to='/register'>Únase ahora</Link></span>
          <span onClick={openRecover} className='recover' >¿Olvidaste la contraseña?</span>
          <Modal isOpen={recover} close={closeRecover}>
            <RecoverForm />
          </Modal>
        </div>

      </div>
    </section>
  )
}

export default LoginContainer
