import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="788418791012-cg4g59fivrprdgm4eq9pkgv4fmr8474f.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
