import { React } from 'react'
<<<<<<< HEAD
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import UserContext from './components/context/userContext'
=======
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import UserContext from './components/context/userContext'

>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
import Home from './pages/home'
import LoginContainer from './components/container/loginContainer'
import Register from './components/container/registerContainer'
import Dashboard from './components/container/dashboard'
import Profile from './pages/profile'
import Error from './pages/404'
import Wallet from './pages/wallet'
<<<<<<< HEAD
import RecoverPassword from './pages/recoverPassword'
=======
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e

function App() {

  return (
    <UserContext>
      <Browser>
        <Routes>
<<<<<<< HEAD
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
    
=======
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/profile' element={<Profile />} />



          <Route path='/*' element={<Error />} />
        </Routes>
      </Browser>
    </UserContext>

>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
  )
}

export default App
