import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from './userThunk';

const initialState = {
    user: {
        name: null,
        email: null,
        password: null
    },
    isAlreadyRegister: true,
    isLoading: false,
    isError: false
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
            state.isAlreadyRegister = !state.isAlreadyRegister;
        },
        handleChange: (state, { payload: { name, value} }) => {
            state.user[name] = value;
        }
    }
})

export default userSlice.reducer;
export const { toggleIsAlreadyRegister, handleChange }  = userSlice.actions;