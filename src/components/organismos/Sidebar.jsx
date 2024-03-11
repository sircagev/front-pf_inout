import React from 'react'
import logo from '../../assets/logo.svg'
import { MdDashboard } from "react-icons/md"
import { FaUser, FaClipboardList } from "react-icons/fa"
import { AiFillTool } from "react-icons/ai"
import { IoLogOut, IoStorefrontSharp } from 'react-icons/io5'
import { BiSolidReport } from 'react-icons/bi'
import LiUnique from '../../components/moleculas/LiUnique'

export const Sidebar = () => {

  return (
    <div className='sm:w-[250px] h-screen lg:w-[306px] bg-[#fff] flex flex-col'>
      <div className='flex gap-4 pl-5 w-full'>
        <img src={logo} className='w-[60px] pt-5' alt="" />
        <h1 className='text-[26px] pt-8 font-bold'>InOut</h1>
      </div>
      <nav className='w-full pt-[50px] pl-6 text-[16px] font-semibold text-[#6c6d74]'>
        <ul>
          <LiUnique label="Dashboard" icono={MdDashboard} ruta="/dashboard" />
          <LiUnique label="Usuarios" icono={FaUser} ruta="/usuarios"/>
          <LiUnique label="Elementos" icono={AiFillTool} ruta="/elementos" />
          <LiUnique label="Reservas" icono={FaClipboardList} ruta="/reservas" />
          <LiUnique label="Bodegas" icono={IoStorefrontSharp} ruta="/bodegas" />
          <LiUnique label="Reportes" icono={BiSolidReport} ruta="/reportes" />
        </ul>
      </nav>
      <div className='flex items-center ml-6 mt-[150px] gap-5 w-[85%] h-[46px] text-[#6c6d74] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white'>
        <IoLogOut className='w-[28px] ml-3 h-[28px]' />
        <a href="" className='text-[16px] font-semibold'>Logout</a>
      </div>
    </div>
  )
}
