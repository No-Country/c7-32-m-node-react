import React from 'react'
import PropTypes from 'prop-types'

<<<<<<< HEAD

import TitlePage from './titlePage'
import Navbar from './navbar'
 
const Header = ( { title, id, show} ) => {

  
  return (
    <header>
      { show ?
        (
          <>
            <TitlePage id={id} title={title} />
            <Navbar />
          </>
        )
        :
        (
          <TitlePage id={id} title={title} />
        )
      }
    </header>
    

=======
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
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
<<<<<<< HEAD
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
=======
  id: PropTypes.string.isRequired
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
}

export default Header
