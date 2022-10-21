import React from 'react'
import Actions from '../pure/actions'
import Header from '../pure/header'

import '../../styles/dashboard.css'
import ListTransactions from '../pure/listTransactions'
import Stats from '../pure/stats'

const Dashboard = () => {

  return (
    <div>
      <Header id='space' title='Dashboard' show={true} />
      <main className='dashboard-container'>
         <Actions />
        <ListTransactions />
        <Stats />  
      </main>
    </div>
  )
}

export default Dashboard
