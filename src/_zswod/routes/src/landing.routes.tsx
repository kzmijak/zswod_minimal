import { RouteObject } from 'react-router';
import { MainLayout } from 'src/_zswod/layouts/main';
import { CommonView } from 'src/_zswod/pages/Common';
import { LandingView } from 'src/_zswod/pages/Landing';
import { PATH_DASHBOARD } from './paths';
import Page404 from 'src/pages/Page404';

const LandingRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <LandingView />,
    },
    {
      path: PATH_DASHBOARD.menu,
      element: <CommonView />,
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ],
};

export { LandingRoutes };
