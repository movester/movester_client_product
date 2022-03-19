import { createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../services/authAPI';

export const fetchLoginThunk = createAsyncThunk('user/fetchLogin', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.fetchLogin(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
