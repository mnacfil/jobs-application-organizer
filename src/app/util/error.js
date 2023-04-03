import { logoutUser } from '../features/user/userSlice';

export const handleError = (error, thunkAPI) => {
    if(error.response.status === 401) {
        thunkAPI.dispatch(logoutUser(error.response.data.msg));
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    return thunkAPI.rejectWithValue("Something went wrong!");
}