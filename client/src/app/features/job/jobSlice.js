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
    page: 1,
    limit: null
}

const initialState = {
    // add-job page
    job: {
        isLoading: false,
        isError: false,
        position: '',
        company: '',
        jobLocation: getUserFromLS()?.location || '',
        jobStatus: 'applied',
        jobType: 'full time',
        statusOptions: [
            'initial interview', 
            'final interview', 
            'exam', 
            'assestment', 
            'not selected', 
            'job offer', 
            'applied', 
            'ghosted', 
            'waiting in result'
        ],
        jobTypeOptions: [
            'full time', 
            'part time', 
            'internship', 
            'remote', 
            'freelance'
        ],
        recruiterName: '',
        recruiterEmail: '',
        recruiterNumber: ''
    },
    // all-job-page
    searchForm: {
        isSearchLoading: false,
        isSearchError: false,
        searchFilter: searchDefaultFilterState,
        statuses: [
            'all',
            'initial interview', 
            'final interview', 
            'exam', 
            'assestment', 
            'not selected', 
            'job offer', 
            'applied', 
            'ghosted', 
            'waiting in result'
        ],
        types: [
            'all',
            'full time', 
            'part time', 
            'internship', 
            'remote', 
            'freelance'
        ],
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
            const { position, company, status, jobType, jobLocation, recruiter} = jobToBeEdit;
            state.searchForm.isEditing = true;
            state.searchForm.editID = payload;
            state.job.position = position;
            state.job.company = company;
            state.job.status = status;
            state.job.jobType = jobType;
            state.job.jobLocation = jobLocation;
            state.job.recruiterName = recruiter.name;
            state.job.recruiterEmail = recruiter.email;
            state.job.recruiterNumber = recruiter.contactNumber;
        },
        clearAddJobInput : (state) => {
            state.job.position = '';
            state.job.company = '';
            state.job.status = 'applied';
            state.job.jobType = 'full time';
            state.job.jobLocation = '';
            state.job.recruiterName = '';
            state.job.recruiterEmail = '';
            state.job.recruiterNumber = '';
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
            const {queryJobs, totalJobApplication, numberOfPage } = payload;
            state.searchForm.isSearchLoading = false;
            state.searchForm.isSearchError = false;
            state.searchForm.allJob = queryJobs;
            state.searchForm.totalJob = totalJobApplication;
            state.searchForm.numberOfPage = numberOfPage;
        })
        .addCase(getAllJob.rejected, (state, { payload }) => {
            state.searchForm.isSearchLoading = false;
            state.searchForm.isSearchError = true;
            toast.error('Something error, while getting all job.')
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
            toast.success(payload);
        })
        .addCase(deleteJob.rejected, (state, { payload }) => {
            state.job.isLoading = false;
            state.job.isError = true;
            toast.error(payload);
        })
        .addCase(editJob.pending, (state) => {
            state.job.isLoading = true;
        })
        .addCase(editJob.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.job.isLoading = false;
            state.searchForm.isEditing = false;
            state.searchForm.editID = null;
            toast.success('Job Updated!')
        })
        .addCase(editJob.rejected, (state, { payload }) => {
            state.searchForm.isEditing = false;
            state.searchForm.editID = null;
            state.job.isLoading= false;
            state.job.isError = true;
            toast.error(payload);
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