import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddData from './components/AddData.jsx'
import Displaydata from './components/Displaydata.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddData />
    <Displaydata />
  </StrictMode>,
)
