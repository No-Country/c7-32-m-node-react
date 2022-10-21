import React, { useState } from 'react'

import Header from '../components/pure/header'
import CardForm from '../components/pure/forms/cardForm'
import cardChip from '../assets/images/cardChip.png'
import { useLocalStorage } from '../hooks/useLocalStorage'

import '../styles/wallet.css'

const Wallet = () => {

  const [localCard, setLocalCard] = useLocalStorage('card', '')
  const [card, setCard] = useState({})
  
  const cardData = (data) =>{
    console.log(data)
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
    setLocalCard(card)
  }

  return (
    <div>
      <Header title='Wallet' id='space' show={true}/>
      <main className='wallet-container'> 
        <section>
          <div className='card-image'>
            <img src={cardChip} />
            <span>{
              localCard ?
                localCard.number
                :
                card.number
              }
            </span>
            <span>{
              localCard ?
                localCard.name
                :
                card.name
              }
              {" "}
              {
              localCard ?
                localCard.surname
                :
                card.surname
              }
            </span>
            <span>{
              localCard ?
                localCard.month
                :
                card.month
              } 
              / 
              {
              localCard ?
                localCard.year
                :
                card.year
              }
            </span>
            <span>{
              localCard ?
                localCard.cvv
                :
                card.cvv
              }
            </span>
          </div>
        </section>
        <section>
          <CardForm handleCard={cardData} />
        </section>
      </main>     
    </div>
  )
}

export default Wallet
