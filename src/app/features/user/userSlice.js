import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { loginThunk, registerThunk, clearStoreThunk, updateThunk } from './userThunk';
import { toast } from 'react-toastify';
import { saveUserToLS, removeUserFromLS, getUserFromLS } from '../../util/localStorage';

const user = getUserFromLS();

const defaultUser = {
    name: '',
    lastName: '',
    location: '',
    email: '',
    password: '',
    action: 'login'
}
const initialState = {
    currentUser: getUserFromLS(),
    user: {
        name: user?.name || '',
        email: user?.email || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
        password: '',
        action: 'login'
    },
    isLoading: false,
    isError: false,
    isLogin: false,
    isLogoutBtnShow: false,
    isSmallSidebarShow: false,
    isBigSidebarShow: true
}

export const registerUser = createAsyncThunk('user/register', async(user, thunkAPI) => {
    return registerThunk('/auth/register', user, thunkAPI);
});

export const loginUser = createAsyncThunk('user/login', async(user, thunkAPI) => {
    return loginThunk('/auth/login', user, thunkAPI);
});

export const updateUser = createAsyncThunk('user/update', async(user, thunkAPI) => {
    return updateThunk('/auth/updateUser', user, thunkAPI);
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleUserAction: (state, { payload }) => {
            state.user.action = payload;
        },
        handleChange: (state, { payload: { name, value} }) => {
            state.user[name] = value;
        },
        toggleLogoutBtn : (state) => {
            state.isLogoutBtnShow = !state.isLogoutBtnShow;
        },
        logoutUser: (state, {payload}) => {
            state.user = defaultUser;
            state.isLogin = false;
            state.isLogoutBtnShow = false;
            state.currentUser = null;
            state.isBigSidebarShow = true;
            removeUserFromLS();
            if(payload) return toast.error(payload);
            toast.success('Logging out...');
        },
        openSidebar: (state) => {
            state.isSmallSidebarShow = true;
        },
        closeSidebar: (state) => {
            state.isSmallSidebarShow = false;
        },
        toggleBigSidebar: (state) => {
            state.isBigSidebarShow = !state.isBigSidebarShow;
        },
        hideBigSidebar: (state) => {
            state.isBigSidebarShow = false;
        },
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
                state.currentUser = payload.user;
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
                state.currentUser = payload.user;
                toast.success(`Welcome ${payload.user.name}`);
                saveUserToLS(payload.user);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isLogin = false;
                toast.error(action.payload);
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                toast.success('Success, Profile updated!');
                saveUserToLS(payload.user);
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.currentUser = null;
                state.isLogin = false
                state.user = defaultUser
                state.isLogoutBtnShow = false;
                toast.error(payload);
            })
    }
})

export default userSlice.reducer;
export const { 
    handleChange, 
    toggleUserAction,
    toggleLogoutBtn,
    logoutUser,
    openSidebar,
    closeSidebar,
    toggleBigSidebar,
    hideBigSidebar
}  = userSlice.actions;