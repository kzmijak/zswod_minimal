import { RouteObject } from 'react-router';
import DashboardLayout from 'src/layouts/dashboard';
import { PATH_APP } from '..';

const DashboardRoutes: RouteObject = {
  path: PATH_APP.root,
  element: <DashboardLayout />,
  children: [],
};

export { DashboardRoutes };
