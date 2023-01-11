import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { selectBackendUrl } from '../../Config/src/slice/selectors';
import { api } from './instance';

const setUpInterceptors = (store: Store, jwt: string) => {
  const state = store.getState();
  const backendUrl = selectBackendUrl(state);

  api.interceptors.request.use(async (config) => {
    config.baseURL = backendUrl;
    config.headers = {
      ...config.headers,
      Authorization: Boolean(jwt) ? `Bearer ${jwt}` : '',
    };
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => Promise.reject(error.response?.data ?? error.message)
  );
};

export { setUpInterceptors };
