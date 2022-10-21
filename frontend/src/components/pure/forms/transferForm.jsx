import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useUserContext } from '../../context/userContext'
import { swalAlert } from '../../../assets/config/swal.js'
import { httpsRequest } from '../../../assets/config/axios'

import '../../../styles/transferForm.css'


const transferSchema = Yup.object({
  amount: Yup.string()
    .matches(/^[0-9]+$/, "Deben ser solamente dígitos")
    .min(1, 'Mínimo de 1')
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


const TransferForm = ({ close }) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(transferSchema) })
  const { user } = useUserContext()


  const sendTransfer = async (info) => {
    const cbu = `${info.cbuId}${info.cbuVer}${info.cbuAcc}`

    const transfer = {
      cbu: cbu,
      amount: info.amount,
      reason: info.reason
    }

    try {
      await httpsRequest(
        'post',
        `https://c7-32-back.herokuapp.com/api/user/${user.id}/transference`,
        {
          transfer: transfer
        }
      )
      swalAlert('success', 'Exelente', "Su transferencia ha sido realizada con exito.")
      close()
    } catch (error) {
      swalAlert('error', 'Oops', error.response.data.message)
    }
  }

  return (
    <form className='form' onSubmit={ handleSubmit(sendTransfer) }>
          
      <label htmlFor='reason'>Motivo:</label>
      <input type='text' id='reason' placeholder='Netflix...' {...register ('reason') }/>
      <p className='error'>{errors.reason?.message}</p>

      <label htmlFor='amount'>Cantidad a transferir:</label>
      <input type='number' id='amount' placeholder='1.000' {...register ('amount') }/>
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
TransferForm.propTypes = {
  close: PropTypes.func.isRequired
}

export default TransferForm
