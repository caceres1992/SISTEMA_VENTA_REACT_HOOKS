import * as yup from 'yup';

export const schemaAddStock = yup.object({
    idProduct: yup.number().required('producto es requerido'),
    quantity: yup.number().required('Cantidad es requerida'),
    price: yup.number().required('Precio es requerido'),
    provider: yup.string().required('Proveedor es requerido'),
    guideNumber: yup.string().required('Numero de guia es requerido'),
})