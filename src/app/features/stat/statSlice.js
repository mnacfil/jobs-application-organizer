import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { statThunk } from './statThunk';

const initialState = {
    isStatLoading: false,
    isStatError: false,
    stats: {},
    monthlyApplication: 0,
    defaultChart: 'bar'
}

export const getJobApplicationStats = createAsyncThunk('stat/jobApplication', statThunk)

const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers: {
        handleChartType: (state, { payload }) => {
            state.defaultChart = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getJobApplicationStats.pending, (state) => {
                state.isStatLoading = true;
            })
            .addCase(getJobApplicationStats.fulfilled, (state, { payload }) => {
                state.isStatLoading = false;
                state.isStatError = false;
                state.stats = payload.defaultStats;
                state.monthlyApplication = payload.monthlyApplications;
            })
            .addCase(getJobApplicationStats.rejected, (state) => {
                state.isStatLoading = false;
                state.isStatError = true
            })
    }
})

export const { handleChartType } = statSlice.actions;
export default statSlice.reducer