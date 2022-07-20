import * as yup from 'yup';
export const schemaProduct = yup.object({
    idCategory : yup.number().required('Categoria es requerido'),
    modelName: yup.string().required('Modelo es requerido'),
    brandName: yup.string().required('Marca es requerido'),
    stock : yup.number("necesita ser numaral").required('Categoria es requerido'),
    price : yup.number().required('Categoria es requerido'),
    color: yup.string().required('Color es requerido'),
    size: yup.string().required('Talla es requerido'),


})  

