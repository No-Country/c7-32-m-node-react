import React, { useEffect, useState } from 'react'

import { httpsRequest } from '../../assets/config/axios'
import { swalAlert } from '../../assets/config/swal'
import { useUserContext } from '../context/userContext'

import '../../styles/cards.css'

function Cards() {

    const [cards, setCards] = useState([])
    const { user } = useUserContext()

    useEffect( () => {
        async function getHistory() {
          try {
            const res = await httpsRequest('get', `https://c7-32-back.herokuapp.com/api/card/user/${user.id}`)
            setCards(res.data.cards)
          } catch (error) {
            swalAlert('error', 'Oops', error.response.data.message)
          }
        }
        getHistory()
      },[])

  return (
    <div className='cards'>
      <h2 className='title-card'>Tarjetas</h2>
      {
        cards.length > 0 ?
        <div className='container-show-card'>
        <table className='table'>
          <thead>
            <tr>
              <th >Número</th>
              <th >Nombre</th>
              <th >Expiración</th>
              <th >CVV</th>
            </tr>
          </thead>
          <tbody>
            {cards.map( (e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.number}</td>
                    <td>{e.name + ' ' + e.surname}</td>
                    <td>{e.exp_date}</td>
                    <td>{e.cvv}</td>
                  </tr>

                )
            })}
          </tbody>
        </table>
      </div>
      : 
      <p>No tiene tarjetas</p>
      } 
    </div>
  )
}

export default Cards