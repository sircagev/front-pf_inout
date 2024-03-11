import axios from "axios";

export const ListarReservas = async () => {
    try {        
        const response = await axios.get('http://localhost:300/reservas/listar');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}