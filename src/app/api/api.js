import axios from 'axios'

export const customAxios = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
})