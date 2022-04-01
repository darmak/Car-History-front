import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers.authorization = `JWT ${localStorage.getItem('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
