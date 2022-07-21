import { axiosConfigLocal } from "../config/AxiosConfig";

const model = 'productoventas'

export const deleteProductoVenta = async (idVenta) => {
    const response = await axiosConfigLocal.delete(`/${model}/${idVenta}`);
    return response.data;
}