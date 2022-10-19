import React from 'react'
import { useForm } from 'react-hook-form'

import { httpsRequest } from '../../../assets/config/axios'
<<<<<<< HEAD
import { swalAlert } from '../../../assets/config/swal'
import { useUserContext }  from '../../context/userContext'
=======
import { alertError } from '../../../assets/config/swall'
import { useUserContext } from '../../context/userContext'
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e


const DepositForm = () => {

  const { register, handleSubmit } = useForm()
  const { client } = useUserContext()

<<<<<<< HEAD
  const sendDeposit = (qty) =>{
=======
  const sendDeposit = (qty) => {
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
    try {
      httpsRequest(
        'post',
        `http://localhost:5000/api/user/${client.user.id}/ingress`,
        {
          amount: qty
        }
      )
    } catch (error) {
<<<<<<< HEAD
      swalAlert('error', 'Oops', error)
=======
      alertError(error)
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
    }
  }

  return (
<<<<<<< HEAD
    <form className='form' style={{ width: '100%' }} onSubmit={ handleSubmit(sendDeposit) }>
      <h2 
=======
    <form className='form' onSubmit={handleSubmit(sendDeposit)}>
      <h2
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
        style={{
          fontWeight: '500',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        Ingrese el monton que desea depositar
      </h2>
<<<<<<< HEAD
      <input 
        style={{
          width: '100%'
        }}
        type='number' 
        id='amount' 
        placeholder='1.000' 
        {...register ('amount') }
      />
      <button 
        style={{ 
=======
      <input
        type='number'
        id='amount'
        placeholder='1.000'
        {...register('amount')}
      />
      <button
        style={{
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
          width: '250px',
          backgroundColor: '#16C98C',
          margin: '15px auto 0px',
          color: '#ffffff',
          letterSpacing: '1px',
<<<<<<< HEAD
          
          }}
=======

        }}
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
      >
        Depositar monto
      </button>
    </form>
  )
}

export default DepositForm
