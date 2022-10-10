import React from 'react'
import PropTypes from 'prop-types'


import TitlePage from './titlePage'
import Navbar from './navbar'
 
const Header = ( { title, id } ) => {

  
  return (
    <header>
      <TitlePage id={id} title={title} />
      <Navbar />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Header
