import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Toolbar from './assets/components/Toolbar.jsx'
import 'https://kit.fontawesome.com/7876dffa6a.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toolbar />
    <App />
  </StrictMode>,
)
