import { RouteObject } from 'react-router';
import { PATHS_ABOUT, PATH_DASHBOARD_ROOT } from './menu.paths';
import { DashboardLayout } from 'src/_zswod/layouts/dashboard';
import { ArticlesListView } from 'src/_zswod/pages/ArticlesList';
import { ArticleView } from 'src/_zswod/pages/Article';
import { GalleriesListView, GalleryView } from 'src/_zswod/pages/Gallery';

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD_ROOT,
  element: <DashboardLayout />,
  children: [
    {
      path: PATHS_ABOUT.galeria.link,
      element: <GalleriesListView />,
    },
    {
      path: `${PATHS_ABOUT.galeria.link}/:articleTitle`,
      element: <GalleryView />,
    },
    {
      path: `${PATHS_ABOUT.nowosci.link}`,
      element: <ArticlesListView />,
    },
    {
      path: `${PATHS_ABOUT.nowosci.link}/:title`,
      element: <ArticleView />,
    },
  ],
};

export { PATH_DASHBOARD_ROOT, DashboardRoutes };
