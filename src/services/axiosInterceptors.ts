// import { store } from '../store';

import API from './api';

// const { getState } = store;

const setupAxiosInterceptors = () => {
  API.interceptors.request.use(function (config) {
    return config;
  });

  API.interceptors.response.use(function (config) {
    return config;
  });
};

export default setupAxiosInterceptors;
