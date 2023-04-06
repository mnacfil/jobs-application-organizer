import { customAxios } from '../../api/api'
import { getAllJob, clearAddJobInput } from './jobSlice';
import { handleError } from '../../util/error';

export const createJobThunk = async(job, thunkAPI) => {
    console.log(thunkAPI);
    try {
        await customAxios.post('/jobs', job);
        thunkAPI.dispatch(clearAddJobInput());
    } catch (error) {  
        return handleError(error, thunkAPI);
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
        return handleError(error, thunkAPI);
    }
}
export const deleteJobThunk = async(jobID, thunkAPI) => {
    try {
        const response = await customAxios.delete(`/jobs/${jobID}`)
        thunkAPI.dispatch(getAllJob());
        return response.data.msg;
    } catch (error) {
        return handleError(error, thunkAPI);
    }
}

export const editJobThunk = async({editID, job}, thunkAPI) => {
    try {
        const response = await customAxios.patch(`/jobs/${editID}`, job);
        thunkAPI.dispatch(clearAddJobInput());
        return response.data.msg;
    } catch (error) {
        return handleError(error, thunkAPI);
    }
}