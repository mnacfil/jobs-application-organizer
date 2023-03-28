import { customAxios } from '../../api/api'

export const createJobThunk = async(job, thunkAPI) => {
    try {
        const response = await customAxios.post('/jobs', job)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}