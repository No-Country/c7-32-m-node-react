import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const CreateUserContext = createContext(null)
export const useUserContext = () => useContext(CreateUserContext)

const UserContext = ({ children }) => {
  
  const [user, setUser] = useState({})

  const getUser = (userData) => {
    setUser(userData)
  }
  const logOut = () => {
    setUser({})
  }

  return (
    <CreateUserContext.Provider value={{
      user,
      getUser,
      logOut
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
