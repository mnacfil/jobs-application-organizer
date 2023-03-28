import { customAxios } from '../../api/api'

export const createJobThunk = async(job, thunkAPI) => {
    try {
        const response = await customAxios.post('/jobs', job)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
export const getAllJobThunk = async( _, thunkAPI) => {
    console.log(thunkAPI.getState())
    try {
        const response = await customAxios.get('/jobs')
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}