import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { fetchConfig } from '../slice/actions';
import { selectStatus } from '../slice/selectors';

type ConfigProviderProps = {
  children: ReactNode;
};

const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isReady = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  if (!isReady) return null;

  return <>{children}</>;
};

export { ConfigProvider };
