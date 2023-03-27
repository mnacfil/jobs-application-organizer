import {customAxios} from '../../api/api'

export const loginThunk = async (path, user, thunkAPI) => {
    try {
        const response = await customAxios.post(path, user);
        console.log(response.data)
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