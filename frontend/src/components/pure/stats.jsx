import React from 'react'
import { useUserContext } from '../context/userContext'

import money from '../../assets/images/money.png'
import income from '../../assets/images/income.png'

const Stats = () => {
  const { user, deposit } = useUserContext()

  return (
    <section className='stats-container'>
      <div className='money'>
        <p>Dinero</p>
        <p>${user.amount}</p>
        <img src={money} />
      </div>
      <div className='income'>
        <p>Ingresos</p>
        <p>${deposit}</p>
        <img src={income} />
      </div>
    </section>
  )
}



export default Stats
