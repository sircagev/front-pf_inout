import React from 'react'

const TableBody = ({ data, columns }) => (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {columns.map((column, columnIndex) => (
            <td key={columnIndex} className="py-4 px-6">
              {row[column]}
            </td>
          ))}
          <td className="py-4 px-6 flex gap-4">
            {/* Agrega botones de administración aquí */}
          </td>
        </tr>
      ))}
    </tbody>
  );

  export default TableBody
