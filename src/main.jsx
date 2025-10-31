import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ParticlesComponent from './client/components/bg.jsx'; 
import Navbar from './client/components/navbar.jsx' 
import VideoBackgroundPage from './client/components/landingPage.jsx'
import VideoTransitionPage from './client/components/landingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ParticlesComponent />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
