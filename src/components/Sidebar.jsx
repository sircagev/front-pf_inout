import React from 'react'
import logo from '../assets/logo.svg'
import dashboard from '../assets/dashboard.svg'
import exit from '../assets/exit.svg'
import user from '../assets/user.svg'
import tool from '../assets/tool.svg'
import reservation from '../assets/reservation.svg'
import home from '../assets/home.svg'
import report from '../assets/report.svg'

export const Sidebar = () => {
  
  return (
    <div className='w-[306px] h-screen bg-[#fff]'>
        <div className='flex gap-4 ml-5'>
            <img src={logo} className='w-[60px] mt-5' alt="" />
            <h1 className='text-[26px] mt-8 font-bold'>InOut</h1>
        </div>
        <nav className='mt-[50px] ml-6 text-[16px] font-semibold text-[#6c6d74]'>
            <ul>
              <div className='text-[#fff] flex items-center gap-5 mb-2 w-[85%] h-[46px] bg-[#39A900] rounded-[8px] cursor-pointer'>
                <img src={dashboard} className='w-[28px] ml-3' alt="" />
                <li className=''>Dashboard</li>
              </div>
              <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
                <img src={user} className='w-[28px] ml-3' alt="" />
                <li className=''>Usuarios</li>
              </div>
              <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
                <img src={tool} className='w-[28px] ml-3' alt="" />
                <li className=''>Elementos</li>
              </div>
              <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
                <img src={reservation} className='w-[28px] ml-3' alt="" />
                <li className=''>Reservas</li>
              </div>
              <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
                <img src={home} className='w-[28px] ml-3' alt="" />
                <li className=''>Bodegas</li>
              </div>
              <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
                <img src={report} className='w-[28px] ml-3' alt="" />
                <li className=''>Reportes</li>
              </div>
            </ul>
        </nav>
        <div className='flex items-center ml-6 mt-[150px] gap-5 w-[85%] h-[46px] text-[#6c6d74] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
          <img src={exit} className='ml-3 w-[28px]' alt="" />
          <a href="" className='text-[16px] font-semibold'>Logout</a>
        </div>
    </div>
  )
}
