import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createJobThunk } from './jobThunk'

const initialState = {
    job: {
        isLoading: false,
        isError: false,
        position: '',
        company: '',
        jobLocation: '',
        status: 'pending',
        jobType: 'full-time',
        statusOptions: ['pending', 'Declined', 'Job Offer'],
        jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    }
}

export const createJob = createAsyncThunk('job/create', createJobThunk)

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value }}) => {
            state.job[name] = value
        }
    }
});

export const { handleChange } = jobSlice.actions;

export default jobSlice.reducer;