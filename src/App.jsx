import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/organismos/Sidebar'
import { Navbar } from './components/organismos/Navbar'




import {Elementos} from './views/Elementos'
import Bodegas from './views/Bodegas'
import Dashboard from './views/Dashboard'
import Reportes from './views/Reportes'
import Reservas from './views/Reservas'
import Usuarios from './views/Usuarios'

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
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/usuarios' element={<Usuarios/>} />
              <Route path='/elementos' element={<Elementos/>} />
              <Route path='/reservas' element={<Reservas/>} />
              <Route path='/bodegas' element={<Bodegas/>} />
              <Route path='/reportes' element={<Reportes/>} />
            </Routes>
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App