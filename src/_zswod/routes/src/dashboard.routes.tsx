import { RouteObject } from 'react-router';
import { PATHS_ABOUT, PATH_DASHBOARD_ROOT } from './menu.paths';
import { DashboardLayout } from 'src/_zswod/layouts/dashboard';
import { Maintenance } from 'src/_zswod/views/Maintenance';

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD_ROOT,
  element: <DashboardLayout />,
  children: [
    {
      path: PATHS_ABOUT.galeria.link,
      element: <Maintenance />,
    },
    {
      path: `${PATHS_ABOUT.galeria.link}/:articleId`,
      element: <Maintenance />,
    },
    {
      path: `${PATHS_ABOUT.nowosci.link}`,
      element: <Maintenance />,
    },
    {
      path: `${PATHS_ABOUT.nowosci.link}/:articleId`,
      element: <Maintenance />,
    },
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

export { PATH_DASHBOARD_ROOT, DashboardRoutes };
