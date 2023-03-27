import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from './userThunk';
import { toast } from 'react-toastify';
import { getUserFromLS, saveUserToLS } from '../../util/localStorage';

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        action: 'login'
    },
    isLoading: false,
    isError: false,
    isLogin: false
}

export const registerUser = createAsyncThunk('user/register', async(user, thunkAPI) => {
    return registerThunk('/auth/register', user, thunkAPI);
});

export const loginUser = createAsyncThunk('user/login', async(user, thunkAPI) => {
    return loginThunk('/auth/login', user, thunkAPI);
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleUserAction: (state, { payload }) => {
            state.user.action = payload;
        },
        handleChange: (state, { payload: { name, value} }) => {
            state.user[name] = value;
        }
    },
    extraReducers: (builder) => {
        builder.
            addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isLogin = true;
                toast.success(`Welcome back ${payload.user.name}!`);
                saveUserToLS(payload.user);
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isError = true;
                state.isLogin = false;
                toast.error(action.payload);
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isLogin = true;
                toast.success(`Welcome ${payload.user.name}`);
                saveUserToLS(payload.user);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isLogin = false;
                toast.error(action.payload);
            })
    }
})

export default userSlice.reducer;
export const { toggleIsAlreadyRegister, handleChange, toggleUserAction }  = userSlice.actions;