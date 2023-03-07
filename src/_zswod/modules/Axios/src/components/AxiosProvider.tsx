import { AxiosError, AxiosRequestConfig } from 'axios';
import { FC, ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectBackendUrl } from 'src/_zswod/modules/Config';
import { useJwt } from 'src/_zswod/modules/User';
import { api } from '../..';

type AxiosProviderProps = {
  children: ReactNode;
};

const AxiosProvider: FC<AxiosProviderProps> = ({ children }) => {
  const { token, logout } = useJwt();
  const backendUrl = useSelector(selectBackendUrl);

  const requestInterceptorIdRef = useRef(0);
  const responseInterceptorIdRef = useRef(0);

  api.interceptors.request.eject(requestInterceptorIdRef.current);
  requestInterceptorIdRef.current = api.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      config.baseURL = backendUrl;
      config.headers = {
        ...config.headers,
        Authorization: Boolean(token) ? `Bearer ${token}` : '',
      };
      return config;
    }
  );

  api.interceptors.response.eject(responseInterceptorIdRef.current);
  responseInterceptorIdRef.current = api.interceptors.response.use(
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

  return <>{children}</>;
};

export { AxiosProvider };
