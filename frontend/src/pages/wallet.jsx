import React, { useState } from 'react'

import Header from '../components/pure/header'
import CardForm from '../components/pure/forms/cardForm'
import cardChip from '../assets/images/cardChip.png'

import '../styles/wallet.css'

const Wallet = () => {

  const [card, setCard] = useState({})
  
  const cardData = (data) =>{
    switch (data.name) {
      case "number":
        setCard({ ...card, number: data.value })
        break
      case "name":
        setCard({ ...card, name: data.value })
        break
      case "surname":
        setCard({ ...card, surname: data.value })
        break
      case "month":
        setCard({ ...card, month: data.value })
        break
      case "year":
        setCard({ ...card, year: data.value })
        break
      case "cvv":
        setCard({ ...card, cvv: data.value })
        break
      default:
        setCard({ ...card })
        break
    }
  }

  const saveCard = () =>{
    localStorage.setItem('card', JSON.stringify( card ) )
  }

  const localCard = localStorage !== null && localStorage.getItem('card')
  return (
    <div>
      <Header title='Wallet' id='space' show={true}/>
      <main className='wallet-container'> 
        <section>
          <div className='card-image'>
            <img src={cardChip} />
            <span>{
              localCard === null ?
                card.number
                :
                localCard.number
              }
            </span>
            <span>{
              localCard === null ?
                card.name
                :
                localCard.name
              }
              {" "}
              {
              localCard === null ?
                card.surname
                :
                localCard.surname
              }
            </span>
            <span>{
              localCard === null ?
                card.month
                :
                localCard.month
              } 
              / 
              {
              localCard === null ?
                card.year
                :
                localCard.year
              }
            </span>
            <span>{
              localCard === null ?
                card.cvv
                :
                localCard.cvv
              }
            </span>
          </div>
        </section>
        <section>
          <CardForm handleCard={cardData} save={saveCard}/>
        </section>
      </main>     
    </div>
  )
}

export default Wallet
