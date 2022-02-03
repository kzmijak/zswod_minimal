import { Suspense } from 'react';
import { RouteObject } from 'react-router';
import LoadingScreen from 'src/components/LoadingScreen';
import HomePage from '../../pages/Home';
import MainLayout from 'src/_zswod/layouts/main';
import { Editor } from 'src/_zswod/pages/News/Editor';
import { Loadable } from 'src/_zswod/components/Loadable';

const LandingRoutes: RouteObject = {
  path: '/',
  element: (
    <Loadable>
      <MainLayout />
    </Loadable>
  ),
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
