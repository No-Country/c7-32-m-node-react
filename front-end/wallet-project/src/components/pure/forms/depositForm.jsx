import React from 'react'
import { useForm } from 'react-hook-form'

import { httpsRequest } from '../../../assets/config/axios'
import { alertError } from '../../../assets/config/swall'
import { useUserContext }  from '../../context/userContext'


const DepositForm = () => {

  const { register, handleSubmit } = useForm()
  const { client } = useUserContext()

  const sendDeposit = (qty) =>{
    try {
      httpsRequest(
        'post',
        `http://localhost:5000/api/user/${client.user.id}/ingress`,
        {
          amount: qty
        }
      )
    } catch (error) {
      alertError(error)
    }
  }

  return (
    <form className='form' onSubmit={ handleSubmit(sendDeposit) }>
      <h2 
        style={{
          fontWeight: '500',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        Ingrese el monton que desea depositar
      </h2>
      <input 
        type='number' 
        id='amount' 
        placeholder='1.000' 
        {...register ('amount') }
      />
      <button 
        style={{ 
          width: '250px',
          backgroundColor: '#16C98C',
          margin: '15px auto 0px',
          color: '#ffffff',
          letterSpacing: '1px',
          
          }}
      >
        Depositar monto
      </button>
    </form>
  )
}

export default DepositForm
