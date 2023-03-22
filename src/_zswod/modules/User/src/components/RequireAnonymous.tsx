import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useJwt } from 'src/_zswod/modules/User';
import { PATH_DASHBOARD } from 'src/_zswod/routes';

type RequireAnonymousProps = {
  children: ReactNode;
};

const RequireAnonymous: FC<RequireAnonymousProps> = ({ children }) => {
  const { token } = useJwt();

  if (Boolean(token)) return <Navigate to={PATH_DASHBOARD.root} replace />;

  return <>{children}</>;
};

export { RequireAnonymous };
