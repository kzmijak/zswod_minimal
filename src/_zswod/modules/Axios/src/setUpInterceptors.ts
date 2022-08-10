import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { selectBackendUrl } from '../../Config/src/slice/selectors';
import { api } from './instance';

const setUpInterceptors = (store: Store) => {
  const state = store.getState();
  const backendUrl = selectBackendUrl(state);

  api.interceptors.request.use((config) => {
    config.baseURL = backendUrl;
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => Promise.reject(error.response?.data ?? error.message)
  );
};

export { setUpInterceptors };
