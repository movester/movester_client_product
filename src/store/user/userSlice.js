import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddRecordThunk,
  fetchModifyRecordThunk,
  fetchUserRecordByType,
  fetchUserRecordTenEach,
  fetchUserRecordTypeByDates,
} from './userAsyncThunk';

const initialState = {
  loading: false,
  error: null,
  records: null,
  detailRecord: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initializeRecord(state) {
      state.loading = false;
      state.error = null;
      state.records = null;
    },
  },
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
    [fetchUserRecordByType.pending]: state => {
      state.loading = true;
      state.error = null;
      state.detailRecord = null;
    },
    [fetchUserRecordByType.fulfilled]: (state, { payload: data }) => {
      state.loading = true;
      state.error = null;
      state.detailRecord = data.data.data;
    },
    [fetchUserRecordByType.rejected]: (state, action) => {
      state.loading = true;
      state.detailRecord = null;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
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
    },
    [fetchAddRecordThunk.fulfilled]: state => {
      state.loading = false;
      state.error = null;
    },
    [fetchAddRecordThunk.rejected]: (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    },
    [fetchModifyRecordThunk.pending]: state => {
      state.loading = false;
      state.error = null;
    },
    [fetchModifyRecordThunk.fulfilled]: state => {
      state.loading = true;
      state.error = null;
    },
    [fetchModifyRecordThunk.rejected]: (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    },
  },
});

export const { initializeRecord } = userSlice.actions;
export default userSlice.reducer;
