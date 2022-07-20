import { axiosConfigLocal } from "../config/AxiosConfig";

const model = "sales";

export const getAllSales= async () => {
    const sales = await axiosConfigLocal.get(model);
    return sales
}
