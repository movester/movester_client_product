import { createSlice } from '@reduxjs/toolkit';
import { fetchUserRecordTenEach, fetchUserRecordTypeByDates } from './userAsyncThunk';

const initialState = {
  loading: false,
  errorMessage: null,
  records: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserRecordTenEach.pending]: state => {
      state.loading = true;
      state.errorMessage = null;
      state.records = null;
    },
    [fetchUserRecordTenEach.fulfilled]: (state, { payload: data }) => {
      state.loading = false;
      state.errorMessage = null;
      state.records = data.data;
    },
    [fetchUserRecordTenEach.rejected]: (state, { payaload: error }) => {
      state.loading = false;
      state.errorMessage = error;
      state.records = null;
    },
    [fetchUserRecordTypeByDates.pending]: state => {
      state.loading = true;
      state.errorMessage = null;
      state.records = null;
    },
    [fetchUserRecordTypeByDates.fulfilled]: (state, { payload: data }) => {
      state.loading = false;
      state.errorMessage = null;
      state.records = data.data;
    },
    [fetchUserRecordTypeByDates.rejected]: (state, { payload: error }) => {
      state.loading = false;
      state.errorMessage = error;
      state.records = null;
    },
  },
});

export default userSlice.reducer;
