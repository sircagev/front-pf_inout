import React from 'react'
import logo from '../../assets/logo.svg'
import { MdDashboard } from "react-icons/md"
import { FaUser, FaClipboardList } from "react-icons/fa"
import { AiFillTool } from "react-icons/ai"
import { IoLogOut, IoStorefrontSharp } from 'react-icons/io5'
import { BiSolidReport } from 'react-icons/bi'

export const Sidebar = () => {

  return (
    <div className='w-[306px] h-screen bg-[#fff]'>
      <div className='flex gap-4 ml-5'>
        <img src={logo} className='w-[60px] mt-5' alt="" />
        <h1 className='text-[26px] mt-8 font-bold'>InOut</h1>
      </div>
      <nav className='mt-[50px] ml-6 text-[16px] font-semibold text-[#6c6d74]'>
        <ul>
          <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
            <MdDashboard className='w-[28px] ml-3 h-[36px]' />
            <li className=''>Dashboard</li>
          </div>
          <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
            <FaUser className='w-[28px] ml-3 h-[28px]' />
            <li className=''>Usuarios</li>
          </div>
          <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
            <AiFillTool className='w-[28px] ml-3 h-[28px]' />
            <li className=''>Elementos</li>
          </div>
          <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
            <FaClipboardList className='w-[28px] ml-3 h-[28px]' />
            <li className=''>Reservas</li>
          </div>
          <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
            <IoStorefrontSharp className='w-[28px] ml-3 h-[28px]' />
            <li className=''>Bodegas</li>
          </div>
          <div className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
          <BiSolidReport className='w-[28px] ml-3 h-[28px]' />
            <li className=''>Reportes</li>
          </div>
        </ul>
      </nav>
      <div className='flex items-center ml-6 mt-[150px] gap-5 w-[85%] h-[46px] text-[#6c6d74] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
      <IoLogOut className='w-[28px] ml-3 h-[28px]' />
        <a href="" className='text-[16px] font-semibold'>Logout</a>
      </div>
    </div>
  )
}
