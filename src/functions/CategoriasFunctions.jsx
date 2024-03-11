import axios from "axios";

export const ListarCategorias = async () => {
    try {
        const response = await axios.get('http://localhost:3000/categoria/listar')
        return response.data;
    } catch {
        console.log(error)
    }
}