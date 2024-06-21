import React from 'react'
import ReactDOM from 'react-dom/client'
import Workshop01 from './Workshop01.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Workshop01 />
    <App />
  </React.StrictMode>,
)
