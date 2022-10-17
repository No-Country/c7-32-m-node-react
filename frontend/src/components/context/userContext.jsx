import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const CreateUserContext = createContext(null)
export const useUserContext = () => useContext(CreateUserContext)

const UserContext = ({ children }) => {

  const [client, setClient] = useState({})

  const getUser = (userData) => {
    setClient(userData)
  }
  const logOut = () => {
    setClient({})
  }



  return (
    <CreateUserContext.Provider value={{
      client,
      getUser,
      logOut,
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
