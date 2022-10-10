import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import Home from './pages/home'
import LoginContainer from './components/container/LoginContainer'
import Register from './components/container/RegisterContainer'
import Dashboard from './components/container/Dashboard'
import Error from './pages/404'
import UserContext from './components/context/userContext'

function App() {

   
  return (
    <UserContext>
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
    </UserContext>
    
  )
}

export default App
