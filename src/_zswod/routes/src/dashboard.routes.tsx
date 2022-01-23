import { RouteObject } from 'react-router';
import DashboardLayout from 'src/_zswod/layouts/dashboard';
import Maintenance from 'src/_zswod/pages/Maintenance';

const PATH_DASHBOARD_ROOT = `/zswod_minimal/etablica`;
const PATH_DASHBOARD = {
  about: `${PATH_DASHBOARD_ROOT}/oszkole`,
  parents: `${PATH_DASHBOARD_ROOT}/dlarodzicow`,
  students: `${PATH_DASHBOARD_ROOT}/dlaucznia`,
};

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD_ROOT,
  element: <DashboardLayout />,
  children: [
    {
      path: '*',
      element: <Maintenance />,
    },
    {
      path: '',
      element: <Maintenance />,
    },
  ],
};

export { PATH_DASHBOARD_ROOT, PATH_DASHBOARD, DashboardRoutes };
