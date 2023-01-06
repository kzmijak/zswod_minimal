import { Store } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useJwt } from 'src/_zswod/modules/Auth';
import { setUpInterceptors } from '../setUpInterceptors';

type AxiosProviderProps = {
  children: ReactNode;
  store: Store;
};

const AxiosProvider: FC<AxiosProviderProps> = ({ children, store }) => {
  const { token } = useJwt();

  setUpInterceptors(store, token);
  useEffect(() => {
    console.log(token);
  }, [token]);

  return <>{children}</>;
};

export { AxiosProvider };
