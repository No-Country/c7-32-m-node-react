import React from 'react'
import Actions from '../pure/actions'
import Header from '../pure/header'

import '../../styles/dashboard.css'
import ListTransactions from '../pure/listTransactions'

const Dashboard = () => {

  return (
    <div>
      <Header id='space' title='Dashboard' show={true} />
      <main className='main-container'>
        <Actions />
        <ListTransactions />
      </main>
    </div>
  )
}

export default Dashboard
