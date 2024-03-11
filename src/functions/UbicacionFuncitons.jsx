import axios from "axios";

export const ListarUbicaciones = async () => {
    try {
        const response = await axios.get('http://localhost:3000/ubicacion/listar')
        return response.data;
    } catch {
        console.log(error)
    }
}