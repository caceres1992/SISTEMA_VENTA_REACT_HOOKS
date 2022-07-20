import * as yup from 'yup';
export const schemaClient = yup.object({
    dni: yup.string().required('El DNI es requerido'),
    name: yup.string().required('Name is required'),
    lastName: yup.string().required('Lastname is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    phone: yup.string().required('Phone is required'),
    address: yup.string().required('Address is required'),

})  