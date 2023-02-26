import { Store } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { useJwt } from 'src/_zswod/modules/User';
import { setUpInterceptors } from '../setUpInterceptors';

type AxiosProviderProps = {
  children: ReactNode;
  store: Store;
};

const AxiosProvider: FC<AxiosProviderProps> = ({ children, store }) => {
  const { token, logout } = useJwt();

  setUpInterceptors(store, token, logout);

  return <>{children}</>;
};

export { AxiosProvider };
