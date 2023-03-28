import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { 
    createJobThunk, 
    getAllJobThunk,
    deleteJobThunk 
} from './jobThunk'

const searchDefaultFilterState = {
    search: '',
    status: 'all',
    type: 'all',
    sort: 'latest',
}

const initialState = {
    job: {
        isLoading: false,
        isError: false,
        position: '',
        company: '',
        jobLocation: '',
        status: 'pending',
        jobType: 'full-time',
        statusOptions: ['pending', 'Declined', 'interview'],
        jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    },
    searchForm: {
        isSearchLoading: false,
        isSearchError: false,
        searchFilter: searchDefaultFilterState,
        statuses: ['all','interview','declined','pending'],
        types: ['all', 'full-time', 'part-time', 'remote', 'internship'],
        sorts: ['latest', 'oldest', 'a-z', 'z-a'],
        allJob: [],
        totalJob: 0,
        numberOfPage: 1
    }
}

export const createJob = createAsyncThunk('job/create', createJobThunk);
export const getAllJob = createAsyncThunk('job/getAll', getAllJobThunk );
export const deleteJob = createAsyncThunk('job/delete', deleteJobThunk );

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, { payload: { newData, originPage}}) => {
            const { name, value } = newData;
            if(originPage === 'add-job') {
                state.job[name] = value;
            }
            if(originPage === 'all-job') {
                state.searchForm.searchFilter[name] = value;
            }
        },
        clearFilter : (state) => {
            // setup logic
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllJob.pending, (state) => {
            state.searchForm.isSearchLoading = true
        })
        .addCase(getAllJob.fulfilled, (state, { payload }) => {
            const {jobs, totalJobs, numOfPages } = payload;
            state.searchForm.isSearchLoading = false;
            state.searchForm.isSearchError = false;
            state.searchForm.allJob = jobs;
            state.searchForm.totalJob = totalJobs;
            state.searchForm.numberOfPage = numOfPages;
        })
        .addCase(getAllJob.rejected, (state, { payload }) => {
            state.searchForm.isSearchLoading = false;
            state.searchForm.isSearchError = true;
            console.log(payload);
        })
        .addCase(createJob.pending, (state) => {
            state.job.isLoading = true;
        })
        .addCase(createJob.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.job.isLoading = false;
            state.job.isError = false;
            toast.success('Job created')
        })
        .addCase(createJob.rejected, (state, { payload }) => {
            console.log(payload);
            state.job.isLoading = false;
            state.job.isError = true;
            toast.success('Something went wrong')
        })
        .addCase(deleteJob.pending, (state) => {
            state.job.isLoading = true;
        })
        .addCase(deleteJob.fulfilled, (state, { payload }) => {
            state.job.isLoading = false;
            toast.success(payload)
        })
        .addCase(deleteJob.rejected, (state, { payload }) => {
            console.log(payload);
            state.job.isLoading = false;
            state.job.isError = true;
            toast.error('Unathorized');
        })
    }
});

export const { handleChange } = jobSlice.actions;

export default jobSlice.reducer;