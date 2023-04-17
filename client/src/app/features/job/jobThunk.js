import { customAxios } from '../../api/api'
import { getAllJob, clearAddJobInput } from './jobSlice';
import { handleError } from '../../util/error';

export const createJobThunk = async(job, thunkAPI) => {
    console.log(thunkAPI);
    try {
        await customAxios.post('/job', job);
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
    let queryParam = `status=${status}&type=${type}&sort=${sort}&page=${page}`;
    if(search) {
        queryParam += `&search=${search}`;
    }
    try {
        const response = await customAxios.get(`/job?${queryParam}`);
        return response.data.data;
    } catch (error) {
        return handleError(error, thunkAPI);
    }
}
export const deleteJobThunk = async(jobID, thunkAPI) => {
    try {
        const response = await customAxios.delete(`/job/${jobID}`);
        console.log(response);
        thunkAPI.dispatch(getAllJob());
        return response.data.data;
    } catch (error) {
        return handleError(error, thunkAPI);
    }
}

export const editJobThunk = async({editID, job}, thunkAPI) => {
    try {
        const response = await customAxios.patch(`/job/${editID}`, job);
        thunkAPI.dispatch(clearAddJobInput());
        return response.data.message;
    } catch (error) {
        return handleError(error, thunkAPI);
    }
}