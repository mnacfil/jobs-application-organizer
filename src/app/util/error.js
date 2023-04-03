import { clearAllWhenUserLogout } from '../features/user/userSlice';

export const handleError = (error, thunkAPI) => {
    if(error.response.status === 401) {
        thunkAPI.dispatch(clearAllWhenUserLogout('Unauthorized! logging out...'));
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
}