import { createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../services/authAPI';

export const fetchJoinThunk = createAsyncThunk('user/fetchJoin', async (payload, { rejectWithValue }) => {
  try {
    const response = await authAPI.fetchJoin(payload);
    return response;
  } catch (error) {
    const err = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(err.response.data);
  }
});

export const fetchEmailAuthThunk = createAsyncThunk('user/fetchEmailAuth', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.fetchEmailAuth(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reponse.data);
  }
});

export const fetchLoginThunk = createAsyncThunk('user/fetchLogin', async (payload, { rejectWithValue }) => {
  try {
    const response = await authAPI.fetchLogin(payload);
    return response;
  } catch (error) {
    const err = error;
    if (!err.response) {
      throw error;
    }
    return rejectWithValue(err.response.data);
  }
});