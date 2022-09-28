import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import LoginContainer from './components/container/LoginContainer'

function App() {

   
  return (
    <Browser>
      <div>
        <Routes>
          <Route path='/' element={ <LoginContainer /> }/>
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </Browser>
  )
}

export default App
