import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from './userThunk';
import { toast } from 'react-toastify';
import { getUserFromLS, saveUserToLS } from '../../util/localStorage';

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        isAlreadyRegister: true,
    },
    isLoading: false,
    isError: false,
    isLogin: false
}

export const registerUser = createAsyncThunk('user/register', async(thunkAPI) => {
    console.log(thunkAPI);
    console.log('register user');
})
export const loginUser = createAsyncThunk('user/register', async(user, thunkAPI) => {
    console.log(thunkAPI);
    return loginThunk('/auth/login', user, thunkAPI);
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleIsAlreadyRegister: (state) => {
            state.user.isAlreadyRegister = !state.user.isAlreadyRegister;
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
                toast.success(`Welcome ${payload.user.name}`);
                saveUserToLS(payload.user);
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isError = true;
                state.isLogin = false;
                toast.error(action.payload);
            })
    }
})

export default userSlice.reducer;
export const { toggleIsAlreadyRegister, handleChange }  = userSlice.actions;