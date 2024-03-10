import React from 'react'
import { Table } from '../components/organismos/Table'
import { TableHidder } from '../components/organismos/TableHidder'
import Table2 from '../components/organismos/Table2'

const Elementos = () => {

  const columns = ['Codigo', 'Nombre', 'Stock', 'Tipo', 'Vencimiento', 'Categoria', 'Detalle Ubicacion']
  const dataInfo = [{
    Codigo: '001',
    Nombre: 'Pala',
    Stock: 30,
    Tipo: 'Devolutivo',
    Vencimiento: 'No tiene',
    Categoria: 'Herramientas',
    "Detalle Ubicacion": 'No sabemos'
  }]

  return (
    <div className='max-w-9/10'>
      <TableHidder title="Todos los elementos" subtitle="Elementos Activos" />
      <Table2 columns={columns} data={dataInfo} />
    </div>
  )
}

export default Elementos