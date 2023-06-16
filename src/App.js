import React from 'react'
import './app.css'
import Sidebar from './Components/SidebarSection/Sidebar'
import Body from './Components/BodySection/Body'

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Body/>
    </div>
  )
}

export default App