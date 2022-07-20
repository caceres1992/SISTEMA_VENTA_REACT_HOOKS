import { axiosConfigLocal } from "../config/AxiosConfig";

const model ="clients";
export const getAllClientes = async () => {
    const response = await axiosConfigLocal.get(model);
    return response.data;
}

export const addClient = async (client) => {
    const response = await axiosConfigLocal.post(model,client);
    return response.data;
}

export const updateClienteById = async (id,client) => {
    const response = await axiosConfigLocal.put(`${model}/${id}`,client);
    return response.data;
}

export const deleteClienteById = async (id) => {
    const response = await axiosConfigLocal.delete(`${model}/${id}`);
    return response.data;
}

export const getClienteByDniByApi = async (dni) => {
    const response = await axiosConfigLocal.get(`${model}/document/${dni}`);
    return response.data;
}