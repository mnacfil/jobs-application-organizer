import axios from 'axios'
import { getUserToken } from '../util/localStorage'

const deployURL = 'https://mnacfil-jobs-organizer.onrender.com/api/v1';
const localURL = 'http://localhost:5000/api/v1';

export const customAxios = axios.create({
    baseURL: localURL
})

customAxios.interceptors.request.use((config) => {
    const token = getUserToken();
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})