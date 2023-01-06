import { Navigate, RouteObject } from 'react-router';
import { AuthLayout } from 'src/_zswod/layouts/auth';
import { LoginView, RegisterView, RequireAnonymous } from 'src/_zswod/modules/Auth';
import { PATH_ACCOUNT } from './menu.paths';

const AuthRoutes: RouteObject = {
  path: PATH_ACCOUNT,
  element: (
    <RequireAnonymous>
      <AuthLayout />
    </RequireAnonymous>
  ),
  children: [
    {
      path: '',
      element: <Navigate to="logowanie" replace />,
    },
    {
      path: 'rejestracja',
      element: <RegisterView />,
    },
    {
      path: 'logowanie',
      element: <LoginView />,
    },
  ],
};

export { AuthRoutes };
