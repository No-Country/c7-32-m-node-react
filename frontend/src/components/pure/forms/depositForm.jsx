import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { httpsRequest } from '../../../assets/config/axios'
import { swalAlert } from '../../../assets/config/swal'
import { useUserContext } from '../../context/userContext'


const DepositForm = ({ close }) => {

  const { register, handleSubmit } = useForm()
  const { user, makeDeposit } = useUserContext()

  async function getDeposit() {
    const res = await httpsRequest('get', `https://c7-32-back.herokuapp.com/api/operations/${user.id}`)
    let result = 0
    for (let i = 0; i < res.data.ingreso.length; i++) {
      if (res.data.ingreso.length !== 0) {
        result += res.data.ingreso[i].user_amount
      }
    }
    makeDeposit(result)
  }

  const sendDeposit = async (qty) => {
    try {
      await httpsRequest(
        'post',
        `https://c7-32-back.herokuapp.com/api/${user.id}/ingress`,
        {
          amount: qty
        }
      )
      swalAlert('success', 'Excelente', "Su deposito ha sido realizado.")
      close()
      getDeposit()
    } catch (error) {
      swalAlert('error', 'Oops', error.response.data.message)
    }
  }



  return (
    <form className='form' style={{ width: '100%' }} onSubmit={handleSubmit(sendDeposit)}>
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
        {...register('amount')}
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

DepositForm.propTypes = {
  close: PropTypes.func.isRequired
}


export default DepositForm
