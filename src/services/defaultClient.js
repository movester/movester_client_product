import axios from 'axios';

const defaultClient = axios.create({
  baseURL: `http://${process.env.REACT_APP_SERVER_HOST}/api`,
  withCredentials: true,
});

export default defaultClient;
