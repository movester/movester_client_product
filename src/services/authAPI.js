import axios from './defaultClient';

const authAPI = {
  fetchLogin(payload) {
    return axios.post('/users/login', payload);
  },
};

export default authAPI;
