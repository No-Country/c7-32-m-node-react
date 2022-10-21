import React, { useEffect, useState } from 'react'
import { httpsRequest } from '../../assets/config/axios';
import { useUserContext } from '../context/userContext';
import '../../styles/cardDash.css';

function Cards() {

    const [cards, setCards] = useState([])
    const { user } = useUserContext()

    useEffect( () => {
        async function getHistory() {
          try {
            const res = await httpsRequest('get', `https://wenwallet.vercel.app/api/card/user/${user.id}`);
            setCards(res.data.cards);
          } catch (error) {
            swalAlert('error', 'Oops', error)
          }
        }
        getHistory();
      },[]);

  return (
    <div>
        <h2 className='title-card'>Tarjetas</h2>
        <div className='container-show-card'>
            
                    <table className='table'>
                    <thead>
                        <tr>
                          <th scope="col">Número</th>
                          <th scope="col">nombre</th>
                          <th scope="col">expiración</th>
                          <th scope="col">cvv</th>
                        </tr>
                      </thead>
                      <tbody>
                {       
                cards.length > 1 ?
                cards.map((e, i) => {
                    return (
                       
                        <tr>
                          <th scope="row">{e.number}</th>
                          <td>{e.name + ' ' + e.surname}</td>
                          <td>{e.exp_date}</td>
                          <td>{e.cvv}</td>
                        </tr>
                       
                    )
                })  
                : 
                <p>No tiene tarjetas</p>
            }
            </tbody>
                    </table>
        </div>
    </div>
  )
}

export default Cards