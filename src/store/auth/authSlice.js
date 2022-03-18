import { createSlice } from '@reduxjs/toolkit';
import { fetchLoginThunk } from './authAsyncThunk';

const initialState = {
  isAuth: false,
  error: null,
  user: null,
};

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchLoginThunk.pending]: state => {
//       state.isLoading = true;
//       state.isAuth = false;
//       state.error = null;
//       state.user = null;
//     },
//     [fetchLoginThunk.fulfilled]: (state, { payload: data }) => {
//       state.isAuth = true;
//       state.error = null;
//       state.user = data.data.data;
//       state.isLoading = false;
//     },
//     [fetchLoginThunk.rejected]: (state, { payload: error }) => {
//       state.isAuth = false;
//       state.error = error;
//       state.user = null;
//       state.isLoading = false;
//     },
//   },
// });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLoginThunk.pending]: state => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
      state.user = null;
    },
    [fetchLoginThunk.fulfilled]: (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      state.user = payload.data.data;
      state.isLoading = false;
    },
    [fetchLoginThunk.rejected]: (state, action) => {
      state.isAuth = false;
      state.error = action.payload;
      state.user = null;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
