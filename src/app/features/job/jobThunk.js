import { customAxios } from '../../api/api'
import { getAllJob, clearInput } from './jobSlice';

export const createJobThunk = async(job, thunkAPI) => {
    try {
        await customAxios.post('/jobs', job);
        thunkAPI.dispatch(clearInput());
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
export const getAllJobThunk = async( _, thunkAPI) => {
    try {
        const response = await customAxios.get('/jobs')
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
export const deleteJobThunk = async(jobID, thunkAPI) => {
    try {
        const response = await customAxios.delete(`/jobs/${jobID}`)
        thunkAPI.dispatch(getAllJob());
        return response.data.msg;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const editJobThunk = async({editID, job}, thunkAPI) => {
    try {
        const response = await customAxios.patch(`/jobs/${editID}`, job);
        thunkAPI.dispatch(clearInput());
        return response.data.msg;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}