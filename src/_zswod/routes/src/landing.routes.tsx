import { Suspense } from 'react';
import { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import MainLayout from 'src/layouts/main';
import HomePage from 'src/pages/Home';

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
