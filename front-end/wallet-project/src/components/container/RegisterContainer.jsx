import React from "react"
import { Link } from 'react-router-dom'
// import { httpsRequest } from '../../assets/config/axios'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import '../../styles/register.css'
import logo from "../../assets/images/Logo-bg-black.png"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const RegisterSchema = Yup.object({

  name: Yup.string()
        .min(4, 'Mínimo 4 caracteres')
        .required('Requiere nombre'),
  lastName: Yup.string()
            .min(4, 'Mínimo 4 caracteres')
            .required('Requiere apellido'),
  email: Yup.string()
        .email('Formato no valido')
        .required('Requiere email'),
  confirmEmail: Yup.string()
                .oneOf([Yup.ref('email'), null])
                .required('El correo no coincide'),
  password: Yup.string()
            .min(4, 'Contraseña muy debil')
            .max(16, 'Contraseña demasiado extensa')
            .required('Requiere contraseña'),
  confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password')])
                  .required('La contraseña no coincide'),
  terms: Yup.bool()
        .isTrue('Debe aceptar los terminos')
        .required()
}).required()

const Register = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm( { resolver: yupResolver(RegisterSchema) } )  
  // const MySwal = withReactContent(Swal)

  const registerUser = (info) =>{
    console.log(info)
    // try {
    //   httpsRequest(
    //     'post',
    //     'http://localhost:5000/api/register',
    //     {

    //     }
    //   )
    // } catch (error) {

    //   MySwal.fire({
    //     icon: 'error',
    //     title: 'Oops',
    //     text: error
    //   })
    // }
  }

  return (
    <main className="container-register">
      <img src={logo} className='logo' alt='logo'/>
      <h1>Welcome</h1>
      <h2>Register your account</h2>

      <form className="container-form" onSubmit={ handleSubmit(registerUser) }>

        <div className="div-input">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Pedro" { ...register('name')} />
            <span className='error'>{errors.name?.message}</span>
        </div>
        
        <div className="div-input">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" id="lastName" placeholder="Perez" { ...register('lastName')} />
            <span className='error'>{errors.lastName?.message}</span>
        </div>

        <div className="div-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@example.com" { ...register('email')} />
            <span className='error'>{errors.email?.message}</span>
        </div>

        <div className="div-input">
            <label htmlFor="confirmEmail">Confirmar email</label>
            <input type="email" id="confirmEmail" placeholder="example@example.com" { ...register('confirmEmail')} />
            <span className='error'>{errors.confirmEmail?.message}</span>
        </div>

        <div className="div-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="**********" { ...register('password')} />
            <span className='error'>{errors.password?.message}</span>
        </div>

        <div className="div-input">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input type="password" id="confirmPassword" placeholder="**********" { ...register('confirmPassword')} />
            <span className='error'>{errors.confirmPassword?.message}</span>
        </div>

        <div className="form-check">
          
          <div>
            <input type="checkbox" id="terms" {...register('terms')}/>
            <p>
                Acepto las <span>Condiciones de Servicio</span> y la {" "}
                <span>Política de Privacidad</span>
            </p>
          </div>
          <span className='error'>{errors.terms?.message}</span>
          
          <button >Registrate ahora</button>
        </div>

      </form>

      <p className="form-signIn">
          Already have an account? {" "} 
          <Link to='/login' style={{ cursor:'pointer', color: '#16C98C'}}>
            Sign in
          </Link>
      </p>
    </main>
  )
}

export default Register