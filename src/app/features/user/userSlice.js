import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isAlreadyRegister: false,
    isLoading: false,
    isError: false
}

const registerUser = createAsyncThunk('user/register', async(thunkAPI) => {
    console.log(thunkAPI);
    console.log('register user');
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})