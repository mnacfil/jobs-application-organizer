import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { 
    createJobThunk, 
    getAllJobThunk,
    deleteJobThunk,
    editJobThunk 
} from './jobThunk'
import { getUserFromLS } from '../../util/localStorage';
import { validatePageNumber } from '../../util/validatePageNumber';

const searchDefaultFilterState = {
    search: '',
    status: 'all',
    type: 'all',
    sort: 'latest',
    page: 1
}

const initialState = {
    // add-job page
    job: {
        isLoading: false,
        isError: false,
        position: '',
        company: '',
        jobLocation: getUserFromLS()?.location || '',
        status: 'pending',
        jobType: 'full-time',
        statusOptions: ['pending', 'declined', 'interview'],
        jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    },
    // all-job-page
    searchForm: {
        isSearchLoading: false,
        isSearchError: false,
        searchFilter: searchDefaultFilterState,
        statuses: ['all','interview','declined','pending'],
        types: ['all', 'full-time', 'part-time', 'remote', 'internship'],
        sorts: ['latest', 'oldest', 'a-z', 'z-a'],
        allJob: [],
        totalJob: 0,
        numberOfPage: 1,
        isEditing: false,
        editID: null
    }
}

export const createJob = createAsyncThunk('job/create', createJobThunk );
export const getAllJob = createAsyncThunk('job/getAll', getAllJobThunk );
export const deleteJob = createAsyncThunk('job/delete', deleteJobThunk );
export const editJob = createAsyncThunk('job/edit', editJobThunk );

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
        handleEditAction: (state, { payload }) => {
            const jobToBeEdit = state.searchForm.allJob.find(job => job._id === payload);
            const { position, company, status, jobType, jobLocation} = jobToBeEdit;
            state.searchForm.isEditing = true;
            state.searchForm.editID = payload;
            state.job.position = position;
            state.job.company = company;
            state.job.status = status;
            state.job.jobType = jobType;
            state.job.jobLocation = jobLocation;
        },
        clearAddJobInput : (state) => {
            state.job.position = '';
            state.job.company = '';
            state.job.status = 'pending';
            state.job.jobType = 'full-time';
            state.job.jobLocation = '';
        },
        clearAllJobFilter: (state) => {
            state.searchForm.searchFilter = searchDefaultFilterState;
        },
        navigateToNextPage: (state) => {
            state.searchForm.searchFilter.page  = 
                validatePageNumber(state.searchForm.searchFilter.page + 1, state.searchForm.numberOfPage);
        },
        navigateToPrevPage: (state) => {
            state.searchForm.searchFilter.page  = 
                validatePageNumber(state.searchForm.searchFilter.page - 1, state.searchForm.numberOfPage);
        },
        navigateToTargetPage: (state, { payload }) => {
            state.searchForm.searchFilter.page  = payload;
        },
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
            state.job.isLoading = false;
            state.job.isError = false;
            toast.success('Job created')
        })
        .addCase(createJob.rejected, (state, { payload }) => {
            state.job.isLoading = false;
            state.job.isError = true;
            if(!(payload === 'Authentication Invalid')){
                toast.error(payload);
            }
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
        .addCase(editJob.pending, (state) => {
            state.job.isLoading = true;
        })
        .addCase(editJob.fulfilled, (state, { payload }) => {
            state.job.isLoading = false;
            state.searchForm.isEditing = false;
            state.searchForm.editID = null;
            toast.success('Job Updated!')
        })
        .addCase(editJob.rejected, (state, { payload }) => {
            console.log(payload);
            state.searchForm.isEditing = false;
            state.searchForm.editID = null;
            state.job.isError = true;
            toast.error('Something went wrong');
        })
    }
});

export const { 
    handleChange, 
    handleEditAction, 
    clearAddJobInput,
    clearAllJobFilter,
    navigateToNextPage,
    navigateToPrevPage,
    navigateToTargetPage 
} = jobSlice.actions;

export default jobSlice.reducer;