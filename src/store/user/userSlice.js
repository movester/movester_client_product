import { createSlice } from '@reduxjs/toolkit';
import { fetchUserRecordTenEach, fetchUserRecordTypeByDates } from './userAsyncThunk';

const initialState = {
  isLoading: false,
  errorMessage: null,
  records: {
    byTen: null,
    period: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserRecordTenEach.pending]: state => {
      state.isLoading = true;
      state.errorMessage = null;
      state.records.byTen = null;
    },
    [fetchUserRecordTenEach.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = null;
      state.records.byTen = action.payload.data;
    },
    [fetchUserRecordTenEach.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
      state.records.byTen = null;
    },
    [fetchUserRecordTypeByDates.pending]: state => {
      state.isLoading = true;
      state.errorMessage = null;
      state.records.period = null;
    },
    [fetchUserRecordTypeByDates.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = null;
      state.records.period = action.payload.data;
    },
    [fetchUserRecordTypeByDates.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.error;
      state.records.period = action.payload.data;
    },
  },
});

export default userSlice.reducer;
