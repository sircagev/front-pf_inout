import React from 'react'
import { Table } from '../components/organismos/Table'
import { TableHidder } from '../components/organismos/TableHidder'
import { Button } from '../components/moleculas/Button'
import Modal from 'react-modal';
import Table2 from '../components/organismos/Table2';
import axios from 'axios'
import { useEffect, useState } from 'react';



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

  const [UseCategorias, setCategorias] = useState([]);
  const [UseEmpaques, SetEmpaques] = useState([]);
  const [UseUbicacion, SetUbicacion] = useState([]);

  const [values,setValues] = useState(
    {
        codigo_elemento: 800,
        nombre_elemento: "",
        stock: "",
        tipo_elemento: "",
        fecha_vancimiento: "",
        fk_categoria: "",
        fk_tipoEmpaque: "",
        unidad_medida: "",
        fk_ubicacion: "",
    }
)

const handleInputChange=(event) => {
    setValues({
        ...values,
        [event.target.name]:event.target.value
    });
    console.log(values);
}

const handleForm = async(event) => {
    try {
        event.preventDefault();
        const response = await axios ({
            method: 'post',
            url: `http://localhost:3000/elemento/registrar`,
            data: values
        })
        if (response.status === 200) {
            console.log(response.data.message);
            closeModal()
        }
    } catch (error){
        console.log(error)
    }   
}

    
  

  const ListarCategorias = async () => {
    try {
        await axios.get('http://localhost:3000/categoria/listar')
            .then(response => {
                setCategorias(response.data)
                console.log(response.data)
            })

            
    } catch {

    }
  }

  const ListarEmpaques = async () => {
    try {
        await axios.get('http://localhost:3000/empaque/listar')
            .then(response => {
                SetEmpaques(response.data)
                console.log(response.data)
            })
            
            
    } catch {

    }
  }

  const ListarUbicacion = async () => {
    try {
        await axios.get('http://localhost:3000/ubicacion/listar')
            .then(response => {
                SetUbicacion(response.data)
                console.log(response.data)
            })

            
    } catch {

    }
  }

  useEffect(()=> {
    ListarCategorias()
    ListarEmpaques()
    ListarUbicacion()
    },[])

  return (
    <>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}

        >
          <h2 className='text-[22px] font-semibold mb-3'>Registrar Elementos</h2>
          <div>
            <form onSubmit={handleForm} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className='flex gap-10'>
              <div>
                <div className='flex flex-col'>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Nombre Elemento
                    </label>
                    <input name="nombre_elemento" value={values.nombre_elemento} onChange={handleInputChange} class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre Elemento" />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Stock
                    </label>
                    <input name="stock" value={values.stock} onChange={handleInputChange} class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Stock" />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Unidad de medida
                    </label>
                    <input name="unidad_medida" value={values.unidad_medida} onChange={handleInputChange} class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Stock" />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Fecha vencimiento
                    </label>
                    <input name="fecha_vancimiento" value={values.fecha_vancimiento} onChange={handleInputChange} class="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="Date" placeholder="" />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Detalle ubicación
                    </label>
                    <select name="fk_ubicacion" onChange={handleInputChange} class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 w-[190px] py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option option selected = 'true' disabled = 'true'>Elija un tipo</option>
                        {
                        UseUbicacion.map(ubicacion => ( 
                        <option value={ubicacion.codigo_detalleUbi} key={ubicacion.codigo_detalleUbi}>
                            {ubicacion.sector.charAt(0).toUpperCase() + ubicacion.sector.slice(1) + " " + ubicacion.ubicacion_especifica.charAt(0).toUpperCase() + ubicacion.ubicacion_especifica.slice(1)}
                        </option>
                        ))
                        }
                    </select>
                    </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col'>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Tipo Elemento
                    </label>
                    <select name="tipo_elemento" onChange={handleInputChange} class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 w-[190px] py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option option selected = 'true' disabled = 'true'>Elija un tipo</option>
                        <option value = "Devolutivo" >Devolutivo</option>
                        <option Value = "Consumible" >Consumible</option>
                    </select>
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Categoría
                    </label>
                    <select name="fk_categoria" onChange={handleInputChange} class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 w-[190px] py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option selected = 'true' disabled = 'true'>Elija una categoría</option>
                    {
                        UseCategorias.map(categoria => ( 
                        <option value={categoria.codigo_categoria} key={categoria.codigo_categoria}>
                            {categoria.nombre_categoria.charAt(0).toUpperCase() + categoria.nombre_categoria.slice(1)}
                        </option>
                        ))
                        }
                    </select>
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Tipo Empaque
                    </label>
                    <select name="fk_tipoEmpaque" onChange={handleInputChange} class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 w-[190px] py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option option selected = 'true' disabled = 'true'>Elija un tipo</option>
                        {
                        UseEmpaques.map(empaque => ( 
                        <option value={empaque.Codigo_empaque} key={empaque.Codigo_empaque}>
                            {empaque.Nombre_empaque.charAt(0).toUpperCase() + empaque.Nombre_empaque.slice(1)}
                        </option>
                        ))
                        }
                    </select>
                    </div>
                </div>
              </div>
              </div>
              <div className='flex justify-end gap-4'>
                <Button
                  label="Registrar"
                  bg="bg-green-500"
                  hoover="bg-green-950"
                  type = "submit"
                />
                <Button
                  label="Cancelar"
                  bg="bg-red-500"
                  hoover="bg-red-600"
                  funcion={closeModal}
                />
              </div>
            </form>
          </div>
        </Modal>
        <div className='flex gap-4 mb-5'>
          <Button
            label="Añadir nuevo Elemento"
            bg="bg-green-500"
            hoover="bg-green-700"
            funcion={openModal}
          />
          <Button
            label="Añadir nuevo Stock"
            bg="bg-[#B6A400]"
            hoover="bg-red-600"
          />
        </div>
        <TableHidder title="Todos los elementos" subtitle="Elementos Activos" />
        <Table2 columns={columns} data={dataInfo} />

      </div>
    </>
  )
}

export default Elementos