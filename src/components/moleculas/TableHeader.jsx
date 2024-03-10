import React from 'react'

const TableHeader = ({columns}) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {columns.map((column, index) => (
                    <th key={index} scope="col" className={`text-center py-3 px-6 ${index > 4 ? "sm:hidden": ""}`}>
                        {column}
                    </th>
                ))}
                <th scope="col" className="text-center py-3 px-6">
                    Administrar
                </th>
            </tr>
        </thead>
    )
}

export default TableHeader