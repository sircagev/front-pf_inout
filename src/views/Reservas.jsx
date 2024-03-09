import React from 'react'
import Table2 from '../components/organismos/Table2'

const Reservas = () => {

  const columnsInfo = ['reservas', 'reservas2']
  const dataINfo = [{reservas: 2, reservas2: 1},{reservas: 2, reservas2: 1}]
  return (
    <>
      <Table2 columns={columnsInfo} data={dataINfo}/>
    </>
  )
}

export default Reservas