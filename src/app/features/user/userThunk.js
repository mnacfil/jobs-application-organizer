import {customAxios} from '../../api/api'
import { logoutUser } from './userSlice';

export const loginThunk = async (path, user, thunkAPI) => {
    try {
        const response = await customAxios.post(path, user);
        return response.data;
    } catch (error) {
        console.log(error);
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

export const clearStoreThunk = async(undefined ,thunkAPI) => {
    try {
        thunkAPI.dispatch(logoutUser())
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
}