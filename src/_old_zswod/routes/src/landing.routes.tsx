
import { Suspense } from 'react';
import { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import HomePage from '../../pages/Home';
import MainLayout from 'src/_old_zswod/layouts/main';
import { Editor } from 'src/_old_zswod/pages/News/Editor';

const LandingRoutes: RouteObject = {
  path: '/',
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
    {
      path: 'edytor',
      element: <Editor />,
    },
    {
      path: 'edytor/:articleId',
      element: <Editor />,
    },
  ],
};

export { LandingRoutes };
