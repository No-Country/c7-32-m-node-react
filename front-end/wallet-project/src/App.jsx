import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'
import './App.css'
import LoginContainer from './components/container/LoginContainer'
import Register from './components/container/Register.Container'

function App() {

  return (
    <div className="App">
      <Browser>
        <Routes>
          <Route path='/login' element = { <LoginContainer /> }/>
          <Route path='/register' element ={ <Register /> } />
          <Route />
          <Route />
          <Route />
        </Routes>
      </Browser>
    </div>
  )
}

export default App
