import React from 'react'
import { useForm } from 'react-hook-form'

import { httpsRequest } from '../../../assets/config/axios'

import { useUserContext }  from '../../context/userContext'


const DepositForm = () => {

  const { register, handleSubmit } = useForm()
  const { user } = useUserContext()

  const sendDeposit = async (qty) =>{
    try {
      await httpsRequest(
        'post',
        `https://c7-32-back.herokuapp.com/api/${user.id}/ingress`,
        {
          amount: qty
        }
      )
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  }

  return (
    <form className='form' style={{ width: '100%' }} onSubmit={ handleSubmit(sendDeposit) }>
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
