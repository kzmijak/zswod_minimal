import { Store } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { setUpInterceptors } from '../setUpInterceptors';

type AxiosProviderProps = {
  children: ReactNode;
  store: Store;
};

const AxiosProvider: FC<AxiosProviderProps> = ({ children, store }) => {
  setUpInterceptors(store);

  return <>{children}</>;
};

export { AxiosProvider };
