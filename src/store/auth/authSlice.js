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
  reducers: {
    initializeAuth: state => {
      state.isLogin = false;
      state.error = null;
      state.user = null;
    },
  },
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
    [fetchJoinThunk.rejected]: (state, action) => {
      state.isLogin = false;
      state.user = null;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
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
    [fetchEmailAuthThunk.rejected]: (state, action) => {
      state.isLogin = false;
      state.user = null;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
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
    [fetchLoginThunk.rejected]: (state, action) => {
      state.isLogin = false;
      state.user = null;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    },
  },
});

export const { initializeAuth } = authSlice.actions;
export default authSlice.reducer;
