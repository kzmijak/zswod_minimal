import { RouteObject } from 'react-router';
import { MainLayout } from 'src/_zswod/layouts/main';
import { LandingView } from 'src/_zswod/modules/Landing';
import { Maintenance } from 'src/_zswod/views/Maintenance';

const LandingRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <LandingView />,
    },
    {
      path: 'edytor',
      element: <Maintenance />,
    },
    {
      path: 'edytor/:articleId',
      element: <Maintenance />,
    },
  ],
};

export { LandingRoutes };
