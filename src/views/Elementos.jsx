import React from 'react'
import { Table } from '../components/organismos/Table'
import { TableHidder } from '../components/organismos/TableHidder'


export const Elementos = () => {
  return (
    <div className='w-full flex flex-col items-center mt-10'>
        <div className='w-[90%]'>
            <TableHidder/>
            <Table/>        
        </div>
    </div>
  )
}
