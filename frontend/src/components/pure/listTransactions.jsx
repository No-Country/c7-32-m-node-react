import React, { useEffect, useState } from 'react'

import { useUserContext } from '../context/userContext'
import { httpsRequest } from '../../assets/config/axios'
import { swalAlert } from '../../assets/config/swal'

import '../../styles/transactions.css'
import Transaction from './transaction'

const ListTransactions = () => {

  const [transferences, setTransferences] = useState([])
  const { user } = useUserContext()

  useEffect(() => {
    async function getHistory() {
      try {
        const res = await httpsRequest('get', `https://c7-32-back.herokuapp.com/api/history/${user.id}`)
        const history = [...res.data.ingreso, ...res.data.egreso]
        setTransferences(history)
      } catch (error) {
        swalAlert('error', 'Oops', error.response.data?.message)
      }
    }
    getHistory()
  }, [])


  return (
    <section className='transactions'>
      <h2 className='title'>Transaction Activity</h2>
      <div className='container-transactions'>
        <ul className='list-transactions'>
          {transferences.map((e, i) => {
            return (
              <Transaction props={e} key={i} id={i} />
            )
          })}
        </ul>
        {transferences.length < 1 && <p>No se ha realizado ninguna transación</p> }
      </div>
    </section>
  )
}

export default ListTransactions
