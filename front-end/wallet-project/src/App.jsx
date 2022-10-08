<<<<<<< HEAD
import { React } from 'react'
import { BrowserRouter as Browser, Routes, Route   } from 'react-router-dom'

import LoginContainer from './components/container/LoginContainer'
import Register from './components/container/Register.Container'

function App() {

   
  return (
    <Browser>
      <div>
        <Routes>
          <Route path='/login' element = { <LoginContainer /> }/>
          <Route path='/register' element ={ <Register /> } />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </Browser>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
>>>>>>> CJ_BK
  )
}

export default App
