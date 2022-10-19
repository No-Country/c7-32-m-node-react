import React from 'react'

import '../../styles/transactions.css'

const ListTransactions = () => {
  return (
    <section className='transactions'>
      <h2 className='title'>Transaction Activity</h2>
      <div className='container-transactions'>
        {/* Mapear la lista de transacciones */}
        <p>No se ha realizado ninguna transación</p>
      </div>
    </section>
  )
}

export default ListTransactions
