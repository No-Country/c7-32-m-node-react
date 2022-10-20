import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({key, props}) => {
  return (
    <li id={key}>
      <span>{ props.user_transferring_id ? "egreso" : "ingreso"} </span>
      <span>{props.user_transferring_reason} </span>
      <span>{props.createAt} </span>
      <span>{props.user_transferring_amount}</span>
    </li>
  )
}
Transaction.propTypes = {
  key: PropTypes.number.isRequired,
  props: PropTypes.object.isRequired
}

export default Transaction
