import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Header from '../components/pure/header'
import { httpsRequest } from '../../../assets/config/axios'
import { swalAlert } from '../../../assets/config/swal'

const schema = Yup.object({
  password: Yup.string()
            .min(4, 'Contraseña muy debil')
            .max(16, 'Contraseña demasiado extensa')
            .required('Requiere contraseña'),
  confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password')])
                  .required('La contraseña no coincide')
})

const RecoverPassword = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm( { resolver: yupResolver(schema) } ) 
  const changePassword = (data) =>{
    try {
      httpsRequest(
        'post',
        // `http://localhost:5000/api/renew-password/${}`,
        {
          password: data.password
        }
      )
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  }

  return (
    <div>
      <Header title='Recover Pass' id='none' show={false} />
      <main className='recover-container'>
        <form onSubmit={ handleSubmit(changePassword)} >

          <label>Nueva contraseña</label>
          <input type='password' {...register('password')}/>
          <span>{errors.password?.message}</span>

          <label>Confirmar nueva contraseña</label>
          <input type='password' {...register('confirmPassword')}/>
          <span>{errors.confirmPassword?.message}</span>

          <button
            type='submit'
            style={{
              width: '12.5rem',
              color: '#ffffff',
              backgroundColor: '#16C98C',
              outline: 'none'
            }}
          >
          Cambiar contraseña
          </button>
        </form>
      </main>
    </div>
  )
}

export default RecoverPassword

