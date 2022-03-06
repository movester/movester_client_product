import { createSlice } from '@reduxjs/toolkit';
import { fetchJoinThunk, fetchEmailAuthThunk, fetchLoginThunk } from './authAsyncThunk';

const initialState = {
  isLogin: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchJoinThunk.pending]: state => {
      state.isLogin = false;
      state.error = null;
      state.user = null;
    },
    [fetchJoinThunk.fulfilled]: (state, { payload: data }) => {
      state.isLogin = false;
      state.error = null;
      state.user = data.data;
    },
    [fetchJoinThunk.rejected]: (state, { payload: error }) => {
      state.isLogin = false;
      state.error = error;
      state.user = null;
    },
    [fetchEmailAuthThunk.pending]: state => {
      state.isLogin = false;
      state.error = null;
      state.user = null;
    },
    [fetchEmailAuthThunk.fulfilled]: (state, { payload: data }) => {
      state.isLogin = false;
      state.error = null;
      state.user = data.data;
    },
    [fetchEmailAuthThunk.rejected]: (state, { payload: error }) => {
      state.isLogin = false;
      state.error = error;
      state.user = null;
    },
    [fetchLoginThunk.pending]: state => {
      state.isLogin = false;
      state.error = null;
      state.user = null;
    },
    [fetchLoginThunk.fulfilled]: (state, { payload: data }) => {
      state.isLogin = true;
      state.error = null;
      state.user = data.data.data;
    },
    [fetchLoginThunk.rejected]: (state, { payload: error }) => {
      state.isLogin = false;
      state.error = error;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
