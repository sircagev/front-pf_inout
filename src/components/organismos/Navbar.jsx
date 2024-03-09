import React from 'react'
import bell from '../../assets/bell.svg'

export const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-[#39A900] flex justify-end'>
        <ul className='flex gap-5 items-center mr-6'>
            <div className='flex gap-3 items-center'>
              <div className='w-[40px] h-[40px] bg-[#000] rounded-[20px] cursor-pointer'></div>
              <li className='font-bold text-[17px]'>Dorelia</li>
            </div>
            <img src={bell} className='w-[32px] h-[32px] cursor-pointer' alt="" />
        </ul>
    </div>
  )
}
