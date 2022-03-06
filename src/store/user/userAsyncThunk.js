import { createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../services/userAPI';

export const fetchUserRecordTenEach = createAsyncThunk('user/fetchRecordTenEach', async (_, thunkAPI) => {
  try {
    const response = await userAPI.fetchRecordTenEach();
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

export const fetchAddRecordThunk = createAsyncThunk('user/fetchRecord', async (payload, thunkAPI) => {
  try {
    const response = await userAPI.fetchAddRecord(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchModifyRecordThunk = createAsyncThunk('user/fetchModifyRecord', async (payload, thunkAPI) => {
  try {
    const response = await userAPI.fetchModifyRecord(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
