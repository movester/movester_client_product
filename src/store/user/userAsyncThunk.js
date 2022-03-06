import { createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../services/userAPI';

export const fetchUserRecordTenEach = createAsyncThunk('user/fetchRecordTenEach', async (_, thunkAPI) => {
  try {
    const response = await userAPI.fetchRecordTenEach();
    console.log('fetchUserRecordTenEach response', response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchUserRecordTypeByDates = createAsyncThunk('user/fetchRecordTypeByDates', async (payload, thunkAPI) => {
  try {
    const response = await userAPI.fetchRecordTypeByDates(payload);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
