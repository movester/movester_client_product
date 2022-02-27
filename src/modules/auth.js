// import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';

// const CHANGE_FIELD = 'auth/CHANGE_FIELD';
// const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
//   form, // join, login
//   key, // email, password, passwordConfirm, username
//   value, // 실제 바꾸려는 값
// }));

// export const initializeForm = createAction(INITIALIZE_FORM, form => form); // join / login

// // auth
// const initialState = {
//   join: {
//     email: '',
//     password: '',
//     passwordConfirm: '',
//     username: '',
//     modalOn: false,
//     emailAuthentication: false,
//   },
//   login: {
//     email: '',
//     password: '',
//   },
//   account: {
//     email: '',
//     password: '',
//     passwordConfirm: '',
//   },
// };

// const auth = handleActions(
//   {
//     [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
//       produce(state, draft => {
//         draft[form][key] = value; // state.join.username 변경
//       }),
//     [INITIALIZE_FORM]: (state, { payload: form }) => ({
//       ...state,
//       [form]: initialState[form],
//     }),
//   },
//   initialState
// );

// export default auth;
