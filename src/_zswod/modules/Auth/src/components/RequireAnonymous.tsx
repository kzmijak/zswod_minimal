import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';
import { PATH_DASHBOARD_ROOT } from 'src/_zswod/routes';
import { useJwt } from '../utils/useJwt';

type RequireAnonymousProps = {
  children: ReactNode;
};

const RequireAnonymous: FC<RequireAnonymousProps> = ({ children }) => {
  const { token } = useJwt();

  if (Boolean(token)) return <Navigate to={PATH_DASHBOARD_ROOT} replace />;

  return <>{children}</>;
};

export { RequireAnonymous };
