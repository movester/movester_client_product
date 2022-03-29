import axios from './defaultClient';

const authAPI = {
  fetchLogin(payload) {
    return axios.post('/users/login', payload);
  },
  fetchKakaoLogin(payload) {
    return axios.get(`/auth/kakao/callback?code=${payload}` );
  },
  fetchLogout() {
    return axios.get('/users/logout');
  },
  fetchResign() {
    return axios.delete('/users');
  },
};

export default authAPI;
