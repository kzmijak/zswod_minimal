import { RouteObject } from 'react-router';
import { PATH_DASHBOARD } from './paths';
import { DashboardLayout } from 'src/_zswod/layouts/dashboard';
import { ArticlesListView } from 'src/_zswod/pages/ArticlesList';
import { ArticleView } from 'src/_zswod/pages/Article';
import { CommonView } from 'src/_zswod/pages/Common';

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD.root,
  element: <DashboardLayout />,
  children: [
    {
      path: PATH_DASHBOARD.galleries,
      element: <CommonView />,
    },
    {
      path: `${PATH_DASHBOARD.galleries}/:galleryTitle`,
      element: <CommonView />,
    },
    {
      path: `${PATH_DASHBOARD.articles}`,
      element: <ArticlesListView />,
    },
    {
      path: `${PATH_DASHBOARD.articles}/:articleTitle`,
      element: <ArticleView />,
    },
    {
      path: `${PATH_DASHBOARD.root}/:customPageSection/:customPageTitle`,
      element: <CommonView />,
    },
    {
      path: '*',
      element: <CommonView />,
    },
    {
      path: '',
      element: <CommonView />,
    },
  ],
};

export { DashboardRoutes };
