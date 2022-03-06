import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  account: {
    email: '',
    username: '',
  },
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
