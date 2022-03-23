import axios from './defaultClient';

const authAPI = {
  fetchLogin(payload) {
    return axios.post('/users/login', payload);
  },
  fetchLogout() {
    return axios.get('/users/logout');
  },
  fetchResign() {
    return axios.delete('/users');
  },
};

export default authAPI;
