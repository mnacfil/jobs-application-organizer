import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from './features/user/userSlice';
import jobReducer from './features/job/jobSlice';
import statReducer from './features/stat/statSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    stat: statReducer
  },
});
