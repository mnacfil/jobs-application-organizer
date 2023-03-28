import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createJobThunk, getAllJobThunk } from './jobThunk'

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
        statusOptions: ['pending', 'Declined', 'Job Offer'],
        jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    },
    searchForm: {
        isSearchLoading: false,
        isSearchError: false,
        searchFilter: searchDefaultFilterState,
        statuses: ['all','interview','Declined','Pending'],
        types: ['all', 'Full-time', 'Part-time', 'Remote', 'Internship'],
        sorts: ['latest', 'oldest', 'a-z', 'z-a'],
        allJob: [],
        totalJob: 0,
        numberOfPage: 1
    }
}

export const createJob = createAsyncThunk('job/create', createJobThunk);

export const getAllJob = createAsyncThunk('job/getAllJob', getAllJobThunk )

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
            console.log(payload);
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
    }
});

export const { handleChange } = jobSlice.actions;

export default jobSlice.reducer;