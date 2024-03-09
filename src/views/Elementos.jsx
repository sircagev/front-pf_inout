import React from 'react'
import { Table } from '../components/organismos/Table'
import { TableHidder } from '../components/organismos/TableHidder'
import { Button } from '../components/moleculas/Button'
import Modal from 'react-modal';

export const Elementos = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

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
            overlayClassName="w-[50%]"
            >   
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
            </Modal>
            <div className='flex gap-4 mb-5'>
                <Button
                    label="Añadir nuevo Elemento"
                    bg = "bg-green-500"
                    hoover= "bg-green-600"
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
