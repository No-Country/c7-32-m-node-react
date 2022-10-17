import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/header.css'
import flag from '../../assets/images/flag.png' 
import user from '../../assets/images/user.jpg'
import { IoNotificationsOff } from 'react-icons/io5'
 
const Header = ( { title, id } ) => {
  
  return (
    <header className='header'>
      <h2 id={id} >{title}</h2>
      <div className='header-info' >

        <div className='info-flag'>
          <span></span>
          <img  src={flag} alt='bandera' />
          <span></span>
        </div>

        <div className='info-user'>
          <IoNotificationsOff className='icon'/>
          <img src={user} alt='usuario' />
          <p>Matias Teijeiro</p>
        </div>
      </div>

    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Header
