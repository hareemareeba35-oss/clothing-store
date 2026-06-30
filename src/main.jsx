import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Agar file ka naam Capital A hai to yeh chalega
import './index.css'

// Dono cases ko handle karne ke liye fallback check
import * as SmallApp from './app.jsx' 

const MainComponent = App || SmallApp.default;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>,
)