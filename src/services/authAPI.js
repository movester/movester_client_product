import axios from './defaultClient';

const authAPI = {
  fetchJoin(payload) {
    const { email, password, confirmPassword, name } = payload;

    return axios.post('/users/join', { email, password, confirmPassword, name });
  },
  fetchEmailAuth(payload) {
    return axios.patch('/users/email-auth/join', payload);
  },
  fetchLogin(payload) {
    console.log(payload);
    return axios.post('/users/login', payload);
  },
};

export default authAPI;
