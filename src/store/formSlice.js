import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  join: {
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  },
  login: {
    email: '',
    password: '',
  },
  changePassword: {
    curPassword: '',
    newPassword: '',
    confirmPassword: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
});

export default formSlice.reducer;
