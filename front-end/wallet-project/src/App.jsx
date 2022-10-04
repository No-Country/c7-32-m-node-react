import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import LoginContainer from './components/container/LoginContainer'
import Register from './components/container/Register.Container'
import Home from './pages/home'

function App() {

   
  return (
    <Browser>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element = { <LoginContainer /> }/>
        <Route path='/register' element ={ <Register /> } />
        <Route />
        <Route />
      </Routes>
    </Browser>
  )
}

export default App
