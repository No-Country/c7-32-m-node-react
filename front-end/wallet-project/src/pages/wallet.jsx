import React from 'react'

import Header from '../components/pure/header'
import CardForm from '../components/pure/forms/cardForm'

const Wallet = () => {
  return (
    <div>
      <Header title='Wallet' id='space' show={true}/>
      <main>
        <section>
          
        </section>
        <section>
          <CardForm />
        </section>
      </main>     
    </div>
  )
}

export default Wallet
