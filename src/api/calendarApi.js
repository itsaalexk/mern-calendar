import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables()




const calendarApi = axios.create({
    baseURL: 'http://localhost:8000/api'
});

// ESTOS SON LOS INTERCEPTORES DE AXIOS QUE NOS PERMITEN OBTENER EL TOKEN DEL LOCALSTORAGE
calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default calendarApi;



