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

export const updateThunk = async (path, user, thunkAPI) => {
    try {
        const response = await customAxios.patch(path, user);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        // if(error.response.status === 401) {
        //     thunkAPI.dispatch(logoutUser(error.response.data.msg));
        //     thunkAPI.rejectWithValue(error.response.data.msg);
        // }
        thunkAPI.rejectWithValue(error.response.data.msg);
    }
}
