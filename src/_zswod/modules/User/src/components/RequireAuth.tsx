import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useJwt } from 'src/_zswod/modules/User';
import { PATH_ACCOUNT } from 'src/_zswod/routes/src/menu.paths';

type RequireAuthProps = {
  children: ReactNode;
};

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { token } = useJwt();

  if (!Boolean(token)) return <Navigate to={PATH_ACCOUNT} replace />;

  return <>{children}</>;
};

export { RequireAuth };
