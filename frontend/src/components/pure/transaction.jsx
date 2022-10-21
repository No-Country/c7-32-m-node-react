import React from 'react'
import PropTypes from 'prop-types'

import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

const Transaction = ({props, id}) => {

  const createDate = new Date()
  const actualyDate = createDate.toLocaleString()

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
