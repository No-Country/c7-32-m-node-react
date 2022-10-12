import React from 'react'
import { useUserContext } from '../../context/userContext'


import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import '../../../styles/transferForm.css'
import { httpsRequest } from '../../../assets/config/axios'


const LoginSchema = Yup.object({
  mount: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .min(1,'Mínimo de 1')
        .max(10000, 'Máxima cantidad a transferir: 10.000')
        .required('Necesita ingresar un monto'),

  cbuId: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .min(3, 'Debe tener exactamente 3 dígitos')
        .max(3, 'Debe tener exactamente 3 dígitos')
        .required('Necesita ingresas un cbu'),

  cbuVer: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .min(5, 'Debe tener exactamente 5 dígitos')
        .max(5, 'Debe tener exactamente 5 dígitos')
        .required('Necesita ingresas un cbu'),

  cbuAcc: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .min(14, 'Debe tener exactamente 14 dígitos')
        .max(14, 'Debe tener exactamente 14 dígitos')
        .required('Necesita ingresas un cbu'),

  reason: Yup.string()
          .max(20, 'Máximo 20 caracteres')
          .required('Agrega un motivo'),
}).required()


const TransferForm = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm( { resolver: yupResolver(LoginSchema) } )
  const { client } = useUserContext()


  const sendTransfer = (info) =>{
    const cbu = `${info.cbuId}${info.cbuVer}${info.cbuAcc}`

    const transfer = {
      cbu: cbu,
      amount: info.mount,
      reason: info.reason
    }
    httpsRequest(
      'post',
      `http://localhost:5000/api/user/${client.user.id}/transference`,
      {
        transfer: transfer
      }
    )
    
    console.log(transfer)

  }

  return (
    <form className='form' onSubmit={ handleSubmit(sendTransfer) }>
          
      <label htmlFor='reason'>Motivo:</label>
      <input type='text' id='reason' placeholder='Netflix...' {...register ('reason') }/>
      <p className='error'>{errors.reason?.message}</p>

      <label htmlFor='mount'>Cantidad a transferir:</label>
      <input type='number' id='mount' placeholder='1.000' {...register ('mount') }/>
      <p className='error'>{errors.mount?.message}</p>

      <label htmlFor='cbu'>Clave Bancaria:</label>
      <div className='form-cbu'>
        <div>
          <input type='number' className='' placeholder='Número de identidad...' {...register ('cbuId') }/>
          <span className='error'>{errors.cbuId?.message}</span>
        </div>
        <div>
          <input type='number' placeholder='Sucursal y verificador...' {...register ('cbuVer') }/>
          <span className='error'>{errors.cbuVer?.message}</span>
        </div>
        <div>
          <input type='number' placeholder='Segundo bloque...' {...register ('cbuAcc') }/>
          <span className='error'>{errors.cbuAcc?.message}</span>
        </div>
      </div>
    
    <button type='submit' className='btn-transfer' >Transferir</button>
  </form>
  )
}

export default TransferForm
