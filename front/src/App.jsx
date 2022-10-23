import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import { Dashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="h-full bg-fundo ">
      <div className="font-sans h-screen m-0">
        <Navbar />
        <div className='flex h-full w-full'>
          <Sidebar />
          <div className='ml-40 grid grid-cols-1 w-screen h-full bg-fundo '>
            <Banner />
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
