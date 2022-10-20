import React from 'react'
import PropTypes from 'prop-types'
import { IoNotificationsOff,IoPersonCircleSharp } from 'react-icons/io5'

import { useUserContext } from '../context/userContext'
import flag from '../../assets/images/flag.png' 

import '../../styles/header.css'

const TitlePage = ({id, title}) => {

  const { user } = useUserContext()

  return (
    <div className='header'>
      <h2 id={id} >{title}</h2>
      { screen.width >= 768 &&
      <div className='header-info' >

        <div className='info-flag'>
          <span></span>
          <img src={flag} alt='bandera' />
          <span></span>
        </div>

        { title === "Error" || title === 'Recover Pass' ?
          <></>
          :
          (<div className='info-user'>
            <IoNotificationsOff className='icon'/>
            {
              user.length > 0 ?
                <img className='image' src={user.image} alt='Usuario' />
                :
                (<IoPersonCircleSharp className='image' />)
            }
            <p className='user-name'>{ user.name } { user.surname }</p>
          </div>)
        }
      </div>
      }
      
    </div>
  )
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default TitlePage
