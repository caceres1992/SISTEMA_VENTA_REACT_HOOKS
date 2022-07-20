import { axiosConfigLocal } from "../config/AxiosConfig";
const model ="stockAdd"


export const addApiStocktoProducto = async (stock) => {
    const newStock = await axiosConfigLocal.post(model, stock);
    return newStock
}

export const getListStockAdd = async () => {
    const newStock = await axiosConfigLocal.get(model);
    return newStock
}