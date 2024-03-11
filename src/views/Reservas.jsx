import React, {useEffect, useState} from 'react'
import Table2 from '../components/organismos/Table2'
import { TableHidder } from '../components/organismos/TableHidder'
import { ListarReservas } from '../functions/ReservaFunctions'

const Reservas = () => {
  
  const [ reservas , setReservas ] = useState([]);
  const [columnsHeader,setColumnsHeader] = useState([]);

  const fetchData = async() => {
    try {
      const responseReserva = await ListarReservas();
      const reservasInfo = responseReserva.reservas;
      setReservas(reservasInfo);
      setColumnsHeader(Object.keys(reservasInfo[0]))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchData();
  },[]);
  
  return (
    <div className='w-[90%] overflow-hidden'>
      <TableHidder title="Todas las Reservas" subtitle="Reservas Activas" />
      <Table2 columns={columnsHeader} data={reservas} />
    </div>
  )
}

export default Reservas