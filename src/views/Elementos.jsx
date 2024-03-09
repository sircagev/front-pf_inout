import React from 'react'
import { Table } from '../components/organismos/Table'
import { TableHidder } from '../components/organismos/TableHidder'
import Table2 from '../components/organismos/Table2'

export const Elementos = () => {

  const columnsInfo = ['Codigo','Nombre','Stock','Tipo','Vencimiento','Categoria','Detalle Ubicacion']
  const dataInfo = [ {'Codigo': 23,'Nombre':23,'Stock':445,'Tipo':565,'Vencimiento':657,'Categoria':65757,'Detalle Ubicacion':474},
  {'Codigo': 23,'Nombre':23,'Stock':445,'Tipo':565,'Vencimiento':657,'Categoria':65757,'Detalle Ubicacion':474},
  {'Codigo': 23,'Nombre':23,'Stock':445,'Tipo':565,'Vencimiento':657,'Categoria':65757,'Detalle Ubicacion':474} ]
  return (
    <div className='w-full flex flex-col items-center mt-10'>
        <div className='w-[90%]'>
            <TableHidder/>
            <Table/> 
            <Table2 columns={columnsInfo} data={dataInfo}></Table2>       
        </div>
        
    </div>
  )
}
