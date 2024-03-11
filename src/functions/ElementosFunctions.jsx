import axios from "axios";

export const ListarElementos = async () => {
    try {
        const response = await axios.get('http://localhost:3000/elemento/listar')
        return response.data;
    } catch {
        console.log(error)
    }
}