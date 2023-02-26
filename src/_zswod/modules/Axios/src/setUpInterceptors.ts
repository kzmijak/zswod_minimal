import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { selectBackendUrl } from '../../Config/src/slice/selectors';
import { api } from './instance';

const setUpInterceptors = (store: Store, jwt: string, logout: () => void) => {
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
    (error: AxiosError) => {
      const status = error.response?.status;
      if (status === 401) {
        logout();
        return Promise.reject();
      }

      const message = (error.response?.data ?? error.message) as string;
      const enumOnly = message.slice(0, message.indexOf(':'));
      return Promise.reject(enumOnly);
    }
  );
};

export { setUpInterceptors };
