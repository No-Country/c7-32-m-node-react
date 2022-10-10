import React from 'react'
import PropTypes from 'prop-types'
import { useUserContext } from '../context/userContext'

import '../../styles/header.css'
import flag from '../../assets/images/flag.png' 
import { IoNotificationsOff,IoPersonCircleSharp } from 'react-icons/io5'

const TitlePage = ({id, title}) => {

  const { user } = useUserContext()

  return (
    <div className='header'>
      <h2 id={id} >{title}</h2>
      <div className='header-info' >

        <div className='info-flag'>
          <span></span>
          <img src={flag} alt='bandera' />
          <span></span>
        </div>

        <div className='info-user'>
          <IoNotificationsOff className='icon'/>
          {
            user.image === null ?
              (<IoPersonCircleSharp className='image' />)
              :
              <img className='image' src={user.image} alt='Usuario' />
          }
          <p className='user-name'>{ user.name } { user.surname }</p>
        </div>
      </div>
    </div>
  )
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default TitlePage
