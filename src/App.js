import './App.css'
import React from 'react'
import Dashboard from './routes/Dashboard'

export const UserContext = React.createContext()

function App() {
  
  return (
    <Dashboard />
  )
}

export default App;
