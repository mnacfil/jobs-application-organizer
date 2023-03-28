import { customAxios } from '../../api/api'
import { getAllJob } from './jobSlice';

export const createJobThunk = async(job, thunkAPI) => {
    try {
        await customAxios.post('/jobs', job)
    } catch (error) {
        console.log(error);
    }
}
export const getAllJobThunk = async( _, thunkAPI) => {
    try {
        const response = await customAxios.get('/jobs')
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteJobThunk = async(jobID, thunkAPI) => {
    try {
        const response = await customAxios.delete(`/jobs/${jobID}`)
        thunkAPI.dispatch(getAllJob());
        return response.data.msg;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}