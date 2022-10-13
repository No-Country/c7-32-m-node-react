import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import Home from './pages/home'
import LoginContainer from './components/container/LoginContainer'
import Register from './components/container/Register.Container'
import Dashboard from './components/container/Dashboard'
import Error from './pages/404'

import CartContextProvider from './components/context/Context'

function App() {

   
  return (
    <CartContextProvider>
    <Browser>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element = { <LoginContainer /> }/>
        <Route path='/register' element ={ <Register /> } />
        <Route path='/dashboard' element={ <Dashboard />}/>
        <Route />



        <Route path='/*' element={ <Error />}/>
      </Routes>
    </Browser>
    </CartContextProvider>
  )
}

export default App
