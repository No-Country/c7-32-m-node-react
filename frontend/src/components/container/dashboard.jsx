import React from 'react'
import Actions from '../pure/actions'
import Header from '../pure/header'


import '../../styles/dashboard.css'
import ListTransactions from '../pure/listTransactions'
import Stats from '../pure/stats'
import Cards from '../pure/cards'
import { useUserContext } from '../context/userContext'

const Dashboard = () => {

  const { user } = useUserContext()

  return (
    <div>
      <Header id='space' title='Dashboard' show={true} />
      <p className='cbu'>CBU: {user.cbu}</p>
      <main className='dashboard-container'>
         <Actions />
        <ListTransactions />
        <Stats /> 
        <Cards />
      </main>
    </div>
  )
}

export default Dashboard