import { RouteObject } from 'react-router';
import { PATHS_ABOUT, PATH_DASHBOARD_ROOT } from './menu.paths';
import DashboardLayout from 'src/_zswod/layouts/dashboard';
import Maintenance from 'src/_zswod/pages/Maintenance';
import { Gallery, GalleryMobile } from 'src/_zswod/pages/Gallery';
import { News, NewsArticle } from 'src/_zswod/pages/News';

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD_ROOT,
  element: <DashboardLayout />,
  children: [
    {
      path: PATHS_ABOUT.Galeria,
      element: <Gallery />,
    },
    {
      path: `${PATHS_ABOUT.Galeria}/:articleId`,
      element: <GalleryMobile />,
    },
    {
      path: `${PATHS_ABOUT.Nowości}`,
      element: <News />,
    },
    {
      path: `${PATHS_ABOUT.Nowości}/:articleId`,
      element: <NewsArticle />,
    },
    {
      path: '*',
      element: <Maintenance />,
    },
    {
      path: '',
      element: <Maintenance />,
    },
  ],
};

export { PATH_DASHBOARD_ROOT, DashboardRoutes };
