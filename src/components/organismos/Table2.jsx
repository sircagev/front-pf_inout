import React from 'react'
import TableHeader from '../moleculas/TableHeader'
import TableBody from '../moleculas/TableBody'

const Table2 = ({columns, data}) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  )
}

export default Table2