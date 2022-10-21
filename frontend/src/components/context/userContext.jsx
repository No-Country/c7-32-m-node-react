import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const CreateUserContext = createContext(null)
export const useUserContext = () => useContext(CreateUserContext)

const UserContext = ({ children }) => {

  const [client, setClient] = useState({})
  const [deposit, setDeposit] = useState(0)

  const getUser = (userData) => {
    setClient(userData)
  }
  const logOut = () => {
    setClient({})
  }
  const makeDeposit = (value) => {
    setDeposit(value)
  }

  const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : JSON.parse(sessionStorage.getItem('user'))

  return (
    <CreateUserContext.Provider value={{
      client,
      getUser,
      logOut,
      user,
      deposit,
      makeDeposit
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
