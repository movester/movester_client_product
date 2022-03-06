import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import formSlice from './formSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    form: formSlice,
    user: userSlice,
  },
});
