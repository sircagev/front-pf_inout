import React from 'react'
import Table2 from '../components/organismos/Table2'
import { TableHidder } from '../components/organismos/TableHidder'

const Reservas = () => {

  const columnsInfo = ['Codigo Reserva', 'Usuario', 'Telefono', 'Detalles', 'Observaciones']
  const dataINfo = [{ reservas: 2, reservas2: 1 }, { reservas: 2, reservas2: 1 }]
  
  return (
    <div className='w-[90%] overflow-hidden'>
      <TableHidder title="Todas las Reservas" subtitle="Reservas Activas" />
      <Table2 columns={columnsInfo} data={dataINfo} />
    </div>
  )
}

export default Reservas