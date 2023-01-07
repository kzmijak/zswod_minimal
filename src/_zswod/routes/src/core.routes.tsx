import { Outlet, RouteObject } from 'react-router';
import { ArticleCreatorView } from 'src/_zswod/modules/ArticleCreator';
import { RequireAuth } from 'src/_zswod/modules/Auth';
import { Maintenance } from 'src/_zswod/views/Maintenance';

const CoreRoutes: RouteObject = {
  element: <Outlet />,
  children: [
    {
      path: 'edytor',
      element: (
        <RequireAuth>
          <ArticleCreatorView />
        </RequireAuth>
      ),
    },
    {
      path: 'edytor/:articleTitle',
      element: (
        <RequireAuth>
          <ArticleCreatorView />
        </RequireAuth>
      ),
    },
    {
      path: '*',
      element: <Maintenance />,
    },
  ],
};

export { CoreRoutes };
