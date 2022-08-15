import { Outlet, RouteObject } from 'react-router';
import { ArticleCreatorView } from 'src/_zswod/modules/ArticleCreator';
import { Maintenance } from 'src/_zswod/views/Maintenance';

const CoreRoutes: RouteObject = {
  element: <Outlet />,
  children: [
    {
      path: 'edytor',
      element: <ArticleCreatorView />,
    },
    {
      path: 'edytor/:articleId',
      element: <Maintenance />,
    },
    {
      path: '*',
      element: <Maintenance />,
    },
  ],
};

export { CoreRoutes };
