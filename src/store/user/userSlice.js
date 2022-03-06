import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddRecordThunk,
  fetchModifyRecordThunk,
  fetchUserRecordTenEach,
  fetchUserRecordTypeByDates,
} from './userAsyncThunk';

const initialState = {
  loading: false,
  error: null,
  records: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserRecordTenEach.pending]: state => {
      state.loading = true;
      state.error = null;
      state.records = null;
    },
    [fetchUserRecordTenEach.fulfilled]: (state, { payload: data }) => {
      state.loading = false;
      state.error = null;
      state.records = data.data;
    },
    [fetchUserRecordTenEach.rejected]: (state, { payaload: error }) => {
      state.loading = false;
      state.error = error;
      state.records = null;
    },
    [fetchUserRecordTypeByDates.pending]: state => {
      state.loading = true;
      state.error = null;
      state.records = null;
    },
    [fetchUserRecordTypeByDates.fulfilled]: (state, { payload: data }) => {
      state.loading = false;
      state.error = null;
      state.records = data.data;
    },
    [fetchUserRecordTypeByDates.rejected]: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
      state.records = null;
    },
    [fetchAddRecordThunk.pending]: state => {
      state.loading = true;
      state.error = null;
      state.records = null;
    },
    [fetchAddRecordThunk.fulfilled]: (state, { payload: data }) => {
      state.loading = false;
      state.error = null;
      state.records = data.data;
    },
    [fetchAddRecordThunk.rejected]: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
      state.records = null;
    },
    [fetchModifyRecordThunk.pending]: state => {
      state.loading = false;
      state.error = null;
      state.records = null;
    },
    [fetchModifyRecordThunk.fulfilled]: (state, { payload: data }) => {
      state.loading = true;
      state.error = null;
      state.records = data.data;
    },
    [fetchModifyRecordThunk.rejected]: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
      state.records = null;
    },
  },
});

export default userSlice.reducer;
