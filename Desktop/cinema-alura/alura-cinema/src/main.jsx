import React from 'react'
import ReactDOM from 'react-dom/client'
import './Normalize.css'
import AppRoutes from './Pages/inicio/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)
