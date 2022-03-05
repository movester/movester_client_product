import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  join: {
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  },
  authenticate: {
    emailVerifyKey: '',
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
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state, { payload: form }) => {
      state[form] = initialState[form];
    },
  },
  extraReducers: {},
});

export const { changeField, initializeForm } = formSlice.actions;

export default formSlice.reducer;
