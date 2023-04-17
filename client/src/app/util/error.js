import { clearAllWhenUserLogout } from '../features/user/userSlice';

export const handleError = (error, thunkAPI) => {
    if(error.response.status === 401) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
}