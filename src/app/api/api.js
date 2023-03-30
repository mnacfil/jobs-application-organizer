import axios from 'axios'
import { getUserFromLS } from '../util/localStorage'

export const customAxios = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
})
// 'allJobs/showStats'
customAxios.interceptors.request.use((config) => {
    const user = getUserFromLS()
    if(user) {
        config.headers['Authorization'] = `Bearer ${user.token}`
    }
    return config;
})