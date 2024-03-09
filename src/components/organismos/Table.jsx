import React from 'react'



export const Table = () => {
  return (
    <div>
         <table class="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">Código</th>
                    <th scope="col" class="py-3 px-6">Nombre</th>
                    <th scope="col" class="py-3 px-6">Stock</th>
                    <th scope="col" class="py-3 px-6">Tipo</th>
                    <th scope="col" class="py-3 px-6">Vencimiento</th>
                    <th scope="col" class="py-3 px-6">Categoría</th>
                    <th scope="col" class="py-3 px-6">Detalle Ubicación</th>
                    <th scope="col" class="text-center py-3 px-6">Administrar</th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="py-4 px-6">Alex Johnson</td>
                    <td class="py-4 px-6">82926417</td>
                    <td class="py-4 px-6">$4,500.00</td>
                    <td class="py-4 px-6">Yes</td>
                    <td class="py-4 px-6">Alex Johnson</td>
                    <td class="py-4 px-6">82926417</td>
                    <td class="py-4 px-6">$4,500.00</td>
                    <td class="py-4 px-6 flex gap-4">
                        <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none">
                            Eliminar
                        </button>
                        <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                            Actualizar
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
    </div>
  )
}
