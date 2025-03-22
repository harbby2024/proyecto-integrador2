import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import InicarSecion from './Login.jsx'
import Formulario from "./components/Formulario.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Formulario/>
  </StrictMode>,
)

