import { Navigate, RouteObject } from 'react-router';
import { AuthLayout } from 'src/_zswod/layouts/auth';
import { RequireAnonymous } from 'src/_zswod/modules/User';
import {
  LoginView,
  RegisterView,
  ResetPasswordView,
  SetNewPasswordView,
} from 'src/_zswod/pages/Authentication';
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
    {
      path: 'resetowanie-hasla',
      element: <ResetPasswordView />,
    },
    {
      path: 'nadawanie-hasla',
      element: <SetNewPasswordView />,
    },
  ],
};

export { AuthRoutes };
