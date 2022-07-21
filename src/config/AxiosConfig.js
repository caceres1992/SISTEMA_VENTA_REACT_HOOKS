import axios from "axios";
    const localApi = 'http://localhost:8080/api';
    const prodApi = 'https://api-sistema-venta.herokuapp.com/api';
export const axiosConfigLocal = axios.create({
    baseURL:localApi

});

