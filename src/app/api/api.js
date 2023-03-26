import axios from 'axios'

export const baseUrl = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
})