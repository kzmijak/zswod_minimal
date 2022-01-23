import { Suspense } from 'react';
import { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import HomePage from '../../pages/Home';
import MainLayout from 'src/_zswod/layouts/main';

const PATH_LANDING_ROOT = '/zswod_minimal';

const LandingRoutes: RouteObject = {
  path: PATH_LANDING_ROOT,
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: (
        <Suspense fallback={LoadingScreen}>
          <HomePage />
        </Suspense>
      ),
    },
  ],
};

export { LandingRoutes, PATH_LANDING_ROOT };
