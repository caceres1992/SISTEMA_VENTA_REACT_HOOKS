import * as yup from 'yup';

export const schemaCategory = yup.object({
    name: yup.string().required('Nombre es requerido')
})