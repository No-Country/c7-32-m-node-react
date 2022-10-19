import React from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { swalAlert } from '../../../assets/config/swal.js'
import { httpsRequest } from '../../../assets/config/axios'

const cardSchema = Yup.object({
  number: Yup.string()
          .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
          .min(16,'Mínimo 16 dígitos')
          .max(16, 'Máximo 16 dígitos')
          .required('Necesita un número de tarjeta'),
  name: Yup.string()
        .required('Necesita agregar un nombre'),
  surname: Yup.string()
          .required('Necesita agregar un apellido'),
  month: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .min(1, 'Mínimo 1 dígito')
        .max(2, 'Máximo 2 dígitos')
        .required('Necesita ingresar un mes'),
  year: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .min(1, 'Mínimo 1 dígito')
        .max(2, 'Máximo 2 dígitos')
        .required('Necesita ingresar un año'),
  cvv: Yup.string()
        .matches(/^[0-9]+$/, "Deben ser solamente dígitos") 
        .max(3, 'Máximo 3 dígitos')
        .required('Debe introducir un código de seguridad')
})

const CardForm = ({ handleCard, save }) => {

  const { register, handleSubmit, formState:{ errors } } = useForm( { resolver: yupResolver(cardSchema) } )

  const createCard = (data) =>{
    const exp_date = new Date(parseInt(data.year) + 2000 , (parseInt(data.month) - 1)  )
    
    try {
      httpsRequest(
        'post',
        '',
        {
          ...data,
          exp_date
        },
      )
      save()
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  }

  return (
    <form className='form-wallet' onSubmit={ handleSubmit(createCard) }>

      <div className='form-number'>
        <label>Número</label>
        <input type='text' placeholder='Número de tarjeta' {...register('number') } onChange={ (e) => handleCard(e.target) } />
        <span className='error'>{errors.number?.message}</span>
      </div>

      <div className='form-name'>
        <label>Nombre</label>
        <input type='text' placeholder='Escriba su nombre' {...register('name') } onChange={ (e) => handleCard(e.target) } />
        <span className='error'>{errors.name?.message}</span>
      </div>
      
      <div className='form-lastName'>
        <label>Apellido</label>
        <input type='text' placeholder='Escriba su apellido' {...register('surname') } onChange={ (e) => handleCard(e.target) } />
        <span className='error'>{errors.surname?.message}</span>
      </div>
      
      <div className='form-date'>
        <label>Fecha de experación</label>
        <input type='text' placeholder='Mes' {...register('month') } onChange={ (e) => handleCard(e.target) } />
        <input type='text' placeholder='Año' {...register('year') } onChange={ (e) => handleCard(e.target) } />
        <span className='error'>{errors.month?.message}</span>
        <span className='error'>{errors.year?.message}</span>
      </div>
      
      <div className='form-cvv'>
        <label>CVV</label>
        <input type='number' placeholder='Código de seguridad' {...register('cvv') } onChange={ (e) => handleCard(e.target) } />
        <span className='error'>{errors.cvv?.message}</span>
      </div>

      <button type='submit'>Agregar tarjeta</button>
    </form>
  )
}

CardForm.propTypes = {
  handleCard: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
}

=======

const CardForm = () => {
  return (
    <div>

    </div>
  )
}

>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
export default CardForm
