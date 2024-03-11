import axios from "axios";

export const ListarReservas = async () => {
    try {        
        const response = await axios.get('http://localhost:3000/reservas/listar');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}