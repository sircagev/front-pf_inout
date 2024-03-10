import React from 'react'
import { Table } from '../components/organismos/Table'
import { TableHidder } from '../components/organismos/TableHidder'
import { Button } from '../components/moleculas/Button'
import Modal from 'react-modal';



export const Elementos = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const customStyles = {
        content: {
          width: 'auto', 
          height: 'auto',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='w-full flex flex-col items-center mt-10'>
        <div className='w-[90%]'>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
            
            >   
                <h2 className='text-[22px] font-semibold mb-3'>Registrar Elementos</h2>
                <div>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className='flex gap-11'>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Nombre Elemento
                            </label>
                            <input class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre Elemento"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Stock
                            </label>
                            <input class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Stock"/>
                        </div>
                    </div>
                    <div className='flex gap-11'>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Unidad de medida
                            </label>
                            <input class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Stock"/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Fecha vencimiento
                            </label>
                            <input class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="Date" placeholder=""/>
                        </div>
                    </div>
                    <div className='flex gap-11'>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Unidad de medida
                            </label>
                            <select class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 w-[190px] py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-end gap-4'>
                        <Button
                            label="Registrar"
                            bg = "bg-green-500"
                            hoover= "bg-green-950"
                        />
                        <Button
                            label="Cancelar"
                            bg = "bg-red-500"
                            hoover= "bg-red-600"
                        />
                    </div>                                                          
                </form>
                </div>
                
            </Modal>
            <div className='flex gap-4 mb-5'>
                <Button
                    label="Añadir nuevo Elemento"
                    bg = "bg-green-500"
                    hoover= "bg-green-700"
                    funcion={openModal}
                />
                <Button
                    label="Añadir nuevo Stock"
                    bg = "bg-[#B6A400]"
                    hoover= "bg-red-600"
                />
            </div>
            <TableHidder/>
            <Table/> 
        </div>
    </div>
  )
}
