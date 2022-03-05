import { createSlice } from '@reduxjs/toolkit';
import { fetchJoinThunk, fetchEmailAuthThunk } from './authAsyncThunk';

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
      console.log('fetchJoinThunk[rejected] start');
      state.isLogin = false;
      state.error = error;
      state.user = null;
      console.log('fetchJoinThunk[rejected] end', state);
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
      state.error = action.payload.error;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
