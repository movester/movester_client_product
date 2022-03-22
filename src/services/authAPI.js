import axios from './defaultClient';

const authAPI = {
  fetchLogin(payload) {
    return axios.post('/users/login', payload);
  },
  fetchLogout() {
    return axios.get('/users/logout');
  },
};

export default authAPI;
