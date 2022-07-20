import { axiosConfigLocal } from "../config/AxiosConfig"

const model="products"

const getAllProductos = async () => {
    const productos = await axiosConfigLocal.get(`${model}`);
    return productos
}
const addProducto = async (product) => {
    const producto = await axiosConfigLocal.post(model, product);
    return producto
}

const updateProductById = async (idProduct,product) => {
    const producto = await axiosConfigLocal.put(`${model}/${idProduct}`,product);
    return producto
}
const getProductoById = async (id) => {
    const producto = await axiosConfigLocal.get(`${model}/${id}`);
    return producto
}
export{
    getAllProductos,
    addProducto,
    getProductoById,
    updateProductById
    
}