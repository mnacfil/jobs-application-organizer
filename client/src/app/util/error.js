import { clearAllWhenUserLogout } from '../features/user/userSlice';

export const handleError = (error, thunkAPI) => {
    if(error.response.status === 401) {
        const userEmail = thunkAPI.getState().user.user.email;
        if(userEmail === 'demo@gmail.com') {
            // dont logout, and just show the error message
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
        thunkAPI.dispatch(clearAllWhenUserLogout('Unauthorized! logging out...'));
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
}