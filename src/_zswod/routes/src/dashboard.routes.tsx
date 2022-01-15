import { RouteObject } from 'react-router';
import DashboardLayout from 'src/layouts/dashboard';

const PATH_DASHBOARD_ROOT = '/etablica';
const PATH_DASHBOARD = {
  about: `${PATH_DASHBOARD_ROOT}/oszkole`,
  parents: `${PATH_DASHBOARD_ROOT}/dlarodzicow`,
  students: `${PATH_DASHBOARD_ROOT}/dlaucznia`,
};

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD_ROOT,
  element: <DashboardLayout />,
  children: [],
};

export { PATH_DASHBOARD_ROOT, PATH_DASHBOARD, DashboardRoutes };
