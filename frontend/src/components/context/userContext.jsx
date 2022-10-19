import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const CreateUserContext = createContext(null)
export const useUserContext = () => useContext(CreateUserContext)

const UserContext = ({ children }) => {
<<<<<<< HEAD
  
=======

>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
  const [client, setClient] = useState({})

  const getUser = (userData) => {
    setClient(userData)
  }
  const logOut = () => {
    setClient({})
  }
<<<<<<< HEAD
  
  const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : JSON.parse(sessionStorage.getItem('user'))
=======


>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e

  return (
    <CreateUserContext.Provider value={{
      client,
      getUser,
      logOut,
<<<<<<< HEAD
      user
=======
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
    }}
    >
      {children}
    </CreateUserContext.Provider>
  )
}

UserContext.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserContext
