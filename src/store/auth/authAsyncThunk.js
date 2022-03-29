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

export const fetchKakaoLoginThunk = createAsyncThunk('user/fetchKakaoLogin', async (payload, thunkAPI) => {
  try {
    const response = await authAPI.fetchKakaoLogin(payload);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchLogoutThunk = createAsyncThunk('user/fetchLogout', async thunkAPI => {
  try {
    const response = await authAPI.fetchLogout();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchResignThunk = createAsyncThunk('user/fetchResign', async thunkAPI => {
  try {
    const response = await authAPI.fetchResign();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
