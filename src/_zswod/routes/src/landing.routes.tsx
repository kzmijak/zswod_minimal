import { RouteObject } from 'react-router';
import { MainLayout } from 'src/_zswod/layouts/main';
import { LandingView } from 'src/_zswod/pages/Landing';

const LandingRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <LandingView />,
    },
  ],
};

export { LandingRoutes };
