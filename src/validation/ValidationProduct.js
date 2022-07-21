import * as yup from 'yup';
export const schemaProduct = yup.object({
    idCategory : yup.number().required('Categoria es requerido'),
    modelName: yup.string().required('Modelo es requerido'),
    brandName: yup.string().required('Marca es requerido'),
    stock : yup.number().typeError('Stock debe ser un numero').positive("El numero no puede empezar menos de ").min(2).required('Stock es requerido'),
    price : yup.number().positive("El numero no puede empezar menos de ").min(1).required('Categoria es requerido'),
    color: yup.string().required('Color es requerido'),
    size: yup.string().required('Talla es requerido'),


})  

