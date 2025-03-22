import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Transfer from './pages/Transfer'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Transfer/>
  </StrictMode>,
)
