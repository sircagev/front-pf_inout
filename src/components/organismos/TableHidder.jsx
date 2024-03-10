import React from 'react'
import { FaSearch } from "react-icons/fa";

export const TableHidder = ({title, subtitle}) => {
  return (
    <div className='w-full h-[100px] bg-gray-50 flex justify-between'>
        <div className='ml-5 pt-4'>
            <h1 className='text-[22px] font-semibold'>{title}</h1>
            <h2 className='text-[#16C098] text-[16px]'>{subtitle}</h2>
        </div>
        <div className=''>
            
        </div>
    </div>
  )
}
