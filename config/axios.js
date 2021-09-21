import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.urlPublic,
});

export default clienteAxios;
