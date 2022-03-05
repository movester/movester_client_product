import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import formSlice from './form/formSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    form: formSlice,
    user: userSlice,
  },
});
