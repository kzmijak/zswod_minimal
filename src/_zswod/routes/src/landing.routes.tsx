import { Suspense } from 'react';
import { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import HomePage from 'src/pages/Home';
import MainLayout from 'src/_zswod/layouts/main';

const LandingRoutes: RouteObject = {
  path: '',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: (
        <Suspense fallback={LoadingScreen}>
          <HomePage />
        </Suspense>
      ),
    },
  ],
};

export { LandingRoutes };
