<<<<<<< HEAD
import React, { useEffect, useState } from 'react'

import { useUserContext } from '../context/userContext'
import { httpsRequest } from '../../assets/config/axios'
import { swalAlert } from '../../assets/config/swal'

import '../../styles/transactions.css'
import Transaction from './transaction'

const ListTransactions = () => {

  const [transferences, setTransferences] = useState([])
  const { user } = useUserContext()

  useEffect( async () => {
    try {
      const res = await httpsRequest('get', `http://localhost:5000/api/history/${user.id}`)
      setTransferences(res.data)
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  },[transferences])

=======
import React from 'react'

import '../../styles/transactions.css'

const ListTransactions = () => {
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
  return (
    <section className='transactions'>
      <h2 className='title'>Transaction Activity</h2>
      <div className='container-transactions'>
<<<<<<< HEAD
        <ul>
          {transferences.map( (e, i) =>{
            return (
              <Transaction key={i} props={e}/>
            )
          } )}
        </ul>
=======
        {/* Mapear la lista de transacciones */}
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
        <p>No se ha realizado ninguna transación</p>
      </div>
    </section>
  )
}

export default ListTransactions
