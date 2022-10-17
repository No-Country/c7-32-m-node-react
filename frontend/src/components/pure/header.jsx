import React from 'react'
import PropTypes from 'prop-types'


import TitlePage from './titlePage'
import Navbar from './navbar'

const Header = ({ title, id, show }) => {


  return (
    <header>
      {show ?
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


  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
}

export default Header
