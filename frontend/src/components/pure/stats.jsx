import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context/userContext'
// import PropTypes from 'prop-types'

import money from '../../assets/images/money.png'
import income from '../../assets/images/income.png'
import spend from '../../assets/images/spend.png'
import { httpsRequest } from '../../assets/config/axios'

const Stats = () => {
  const { user } = useUserContext()
  const [ingress, setIngress] = useState(0)

  useEffect( () => {
    async function getHistory() {
      try {
        const res = await httpsRequest('get', `https://c7-32-back.herokuapp.com/api/operations/${user.id}`);
       
        let addIngress = 0;
     for (let index = 0; index < res.data.ingreso.length; index++) {
      addIngress = addIngress + res.data.ingreso[index].user_amount
      
     }
     setIngress(addIngress)

      } catch (error) {
        swalAlert('error', 'Oops', error)
      }
    }
    getHistory();
  },[]);

  return (
    <section className='stats-container'>
      <div className='money'>
        <p>Dinero</p>
        <p>${user.amount}</p>
        <img src={money}/>
      </div>
      <div className='income'>
        <p>Ingresos</p>
        <p>${ingress}</p>
        <img src={income}/>
      </div>
      <div className='spend'>
        <p>Gastos</p>
        <p>${}</p>
        <img src={spend}/>
      </div>
    </section>
  )
}

// Stats.propTypes = {
//   props: PropTypes.string.isRequired
// }

export default Stats
