import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customAxios } from '../../api/api'

const initialState = {
    isLoading: false,
    isError: false,
    position: '',
    company: '',
    jobLocation: '',
    status: 'Pending',
    jobType: 'Full-time',
    statusOptions: ['Pending', 'Interviewed', 'Declined', 'Job Offer'],
    jobTypeOptions: ['Full-time', 'Part-time', 'Remote', 'Internship'],
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value }}) => {
            state[name] = value
        }
    }
});

export const { handleChange } = jobSlice.actions;

export default jobSlice.reducer;