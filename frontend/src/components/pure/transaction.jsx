import React from 'react'
import PropTypes from 'prop-types'

import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

const Transaction = ({props, id}) => {

  const getFormattedDate = (date) => {
    return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())} ${padNumber(date.getHours())}:${padNumber(date.getMinutes())}:${padNumber(date.getSeconds())}`
  }
  
  const padNumber = (number) => {
    return number < 10 ? "0" + number : number
  }
  
  const actualyDate = getFormattedDate(new Date(props.createdAt))

  return (
    <li className='item-transaction' id={id}>
      <span className={props.user_transferring_id ? "egreso" : "ingreso"}>
        {props.user_transferring_id ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
      </span>
      <span className='reason'>{props.user_transferring_reason} </span>
      <span className='date'>{actualyDate}</span>
      <span className='amount'>${props.user_transferring_amount}</span>
    </li>
  )
}
Transaction.propTypes = {
  props: PropTypes.object,
  id: PropTypes.number
}

export default Transaction
