import { RouteObject } from 'react-router';
import { PATHS_ABOUT, PATH_DASHBOARD_ROOT } from './menu.paths';
import DashboardLayout from 'src/_zswod/layouts/dashboard';
import Maintenance from 'src/_zswod/pages/Maintenance';
import { Gallery, GalleryMobile } from 'src/_zswod/pages/Gallery';
import { News, NewsArticle } from 'src/_zswod/pages/News';
import { LoadNews } from 'src/_zswod/pages/News/LoadNews';
import { LoadGallery } from 'src/_zswod/pages/Gallery/LoadGallery';

const DashboardRoutes: RouteObject = {
  path: PATH_DASHBOARD_ROOT,
  element: <DashboardLayout />,
  children: [
    {
      path: PATHS_ABOUT.Galeria,
      element: (
        <LoadGallery>
          <Gallery />,
        </LoadGallery>
      ),
    },
    {
      path: `${PATHS_ABOUT.Galeria}/:articleId`,
      element: (
        <LoadGallery>
          <GalleryMobile />,
        </LoadGallery>
      ),
    },
    {
      path: `${PATHS_ABOUT.Nowości}`,
      element: (
        <LoadNews>
          <News />
        </LoadNews>
      ),
    },
    {
      path: `${PATHS_ABOUT.Nowości}/:articleId`,
      element: (
        <LoadNews>
          <NewsArticle />,
        </LoadNews>
      ),
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
