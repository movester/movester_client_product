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
    return axios.post('/users/login', payload);
  },
  fetchKakaoLogin() {
    return axios.get('/auth/kakao');
  },
};

export default authAPI;
