import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import UserContext from './components/context/userContext'
import Home from './pages/home'
import LoginContainer from './components/container/loginContainer'
import Register from './components/container/registerContainer'
import Dashboard from './components/container/dashboard'
import Profile from './pages/profile'
import Error from './pages/404'
import Wallet from './pages/wallet'
import RecoverPassword from './pages/recoverPassword'

function App() {

  return (
    <UserContext>
      <Browser>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/login' element = { <LoginContainer /> }/>
            <Route path='/register' element ={ <Register /> } />
            <Route path='/dashboard' element={ <Dashboard />} />
            <Route path='/wallet' element={ <Wallet />}/>
            <Route path='/profile' element={ <Profile />}/>
            <Route path='/recoverpass' element={ <RecoverPassword />}/>
            
            <Route path='/*' element={ <Error />}/>
          </Routes>
      </Browser>
    </UserContext>
    
  )
}

export default App
