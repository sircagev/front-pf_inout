import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/organismos/Sidebar'
import { Navbar } from './components/organismos/Navbar'
import { Elementos }  from './views/Elementos'

import './style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full'>
        <div className='flex'>
            <Sidebar/>
          <div className='w-full'>
            <Navbar/>
          <div className=''>
            <Routes>
              <Route path='/elementos' element={<Elementos/>} />
            </Routes>
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App