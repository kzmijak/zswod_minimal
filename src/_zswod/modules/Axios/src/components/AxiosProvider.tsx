import { Store } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useJwt } from 'src/_zswod/modules/User';
import { setUpInterceptors } from '../setUpInterceptors';

type AxiosProviderProps = {
  children: ReactNode;
  store: Store;
};

const AxiosProvider: FC<AxiosProviderProps> = ({ children, store }) => {
  const { token } = useJwt();

  useEffect(() => {
    setUpInterceptors(store, token);
  }, [store, token]);

  return <>{children}</>;
};

export { AxiosProvider };
