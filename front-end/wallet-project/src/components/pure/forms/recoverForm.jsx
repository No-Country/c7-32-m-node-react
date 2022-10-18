import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { httpsRequest } from '../../../assets/config/axios'
import { swalAlert } from '../../../assets/config/swal'

const schema = Yup.object({
  email: Yup.string()
        .email('Formato invalido')
        .required('Requiere email')
})

const RecoverForm = () => {
  
  const { register, handleSubmit, formState:{ errors } } = useForm( { resolver: yupResolver(schema) } )  
  const recoverPass = (data) =>{
    try {
      httpsRequest(
        'post',
        'http://localhost:5000/api/forgot-password',
        {
          data
        }
      )
      swalAlert('success', 'Excelente', 'Reciba tu buzón de correos')
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  } 

  return (
    <form onSubmit={ handleSubmit(recoverPass)} 
      style={{ display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', gap:'1rem', padding:'2.5rem'}}>
      <h2>
        Ingresa tu email para recuperar tu contraseña
      </h2>

      <input 
        type='email' 
        { ...register('email') } 
        style={{
          width:'80%',
          height: '2.5rem',
          border: '1px solid #000000',
          outline: 'none',
          fontSize:'1rem',
          borderRadius: '.3125rem',
          paddingLeft: '.625rem'
        }}
      />

      <span 
        style={{
          color: 'red'
        }}
      >
        {errors.email?.message}
      </span>

      <button
        type='submit'
        style={{
          width: '12.5rem',
          color: '#ffffff',
          backgroundColor: '#16C98C',
          outline: 'none',
        }}
      >
        Enviar email
      </button>
    </form>
  )
}

export default RecoverForm
