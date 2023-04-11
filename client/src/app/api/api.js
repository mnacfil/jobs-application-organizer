import axios from 'axios'
import { getUserToken } from '../util/localStorage'

const thirdPartyURL = 'https://jobify-prod.herokuapp.com/api/v1/toolkit';
const localURL = 'http://localhost:5000/api/v1'

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