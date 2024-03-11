import axios from "axios";

export const ListarEmpaques = async () => {
    try {
        const response = await axios.get('http://localhost:3000/empaque/listar')
        return response.data;
    } catch {
        console.log(error)
    }
}