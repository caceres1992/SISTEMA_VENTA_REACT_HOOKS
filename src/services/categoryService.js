import { axiosConfigLocal } from "../config/AxiosConfig";

const model ="category"

const getAllCategories = async () => {
    const categories = await axiosConfigLocal.get(model);
    return categories
}

const addApiCategory = async (category) => {
    const newCategory = await axiosConfigLocal.post(model, category);
    return newCategory
}


const updateCategoryById = async (idCategory,category) => {
    const categoryUpdate = await axiosConfigLocal.put(`${model}/${idCategory}`,category);
    return categoryUpdate
}

const  getCategoryById= async (id) => {
    const category = await axiosConfigLocal.get(`${model}/${id}`);
    return category
}
export{
    getAllCategories,
    addApiCategory,
    updateCategoryById,getCategoryById

}