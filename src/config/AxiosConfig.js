import axios from "axios";

export const axiosConfigLocal = axios.create({
    baseURL:'https://api-sistema-venta.herokuapp.com/api' // api url
});

