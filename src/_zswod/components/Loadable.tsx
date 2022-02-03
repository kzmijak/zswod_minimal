import { FC } from 'react';
import LoadingScreen from 'src/components/LoadingScreen';
import { useArticlesContext } from '../hooks/useArticlesContext';

const Loadable: FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoading } = useArticlesContext();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export { Loadable };
