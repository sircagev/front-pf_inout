import React from 'react'

const TableBody = ({ data, columns }) => (
  <tbody>
    {data.map((row, rowIndex) => (
      <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {columns.map((column, columnIndex) => (
          <td key={columnIndex} className={`py-4 px-6 ${columnIndex > 2 ? "hidden": ""} ${columnIndex > 3 ? "": ""}`}>
            {row[column]}
          </td>
        ))}
        <td className="py-2 px-6 flex gap-4">
          <button className="px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
            Eliminar
          </button>
          <button className="px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
            Actualizar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBody
