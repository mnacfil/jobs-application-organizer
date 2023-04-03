import { customAxios } from '../../api/api'
import { getAllJob, clearAddJobInput } from './jobSlice';
import { logoutUser } from '../user/userSlice';

export const createJobThunk = async(job, thunkAPI) => {
    console.log(thunkAPI);
    try {
        await customAxios.post('/jobs', job);
        thunkAPI.dispatch(clearAddJobInput());
    } catch (error) {  
        if(error.response.status === 401) {
            thunkAPI.dispatch(logoutUser(error.response.data.msg));
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
        thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
export const getAllJobThunk = async( _, thunkAPI) => {
    const { 
        search, 
        status, 
        type, 
        sort, 
        page
    } = thunkAPI.getState().job.searchForm.searchFilter;
    let queryParam = `status=${status}&jobType=${type}&sort=${sort}&page=${page}`;
    if(search) {
        queryParam += `&search=${search}`;
    }
    try {
        const response = await customAxios.get(`/jobs?${queryParam}`)
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
        thunkAPI.dispatch(clearAddJobInput());
        return response.data.msg;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}