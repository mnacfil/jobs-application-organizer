import {customAxios} from '../../api/api'
import { logoutUser } from './userSlice';
import { clearAddJobInput, clearAllJobFilter } from '../job/jobSlice';

export const loginThunk = async (path, user, thunkAPI) => {
    try {
        const response = await customAxios.post(path, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
export const registerThunk = async (path, user, thunkAPI) => {
    try {
        const response = await customAxios.post(path, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const updateThunk = async (path, user, thunkAPI) => {
    try {
        const response = await customAxios.patch(path, user);
        return response.data;
    } catch (error) {
        if(error.response.status === 401) {
            thunkAPI.dispatch(logoutUser(error.response.data.msg));
            thunkAPI.rejectWithValue(error.response.data.msg);
            return;
        }
        thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
export const clearAllDataThunk = async ( message, thunkAPI ) => {
    try {
        thunkAPI.dispatch(clearAddJobInput());
        thunkAPI.dispatch(clearAllJobFilter());
        thunkAPI.dispatch(logoutUser(message));
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
}

