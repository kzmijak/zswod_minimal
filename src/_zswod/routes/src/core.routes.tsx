import { Outlet, RouteObject } from 'react-router';
import { ArticleCreatorView } from 'src/_zswod/pages/ArticleCreator';
import { RequireAuth, RequireRole } from 'src/_zswod/modules/User';
import { Maintenance } from 'src/_zswod/views/Maintenance';

const CoreRoutes: RouteObject = {
  element: <Outlet />,
  children: [
    {
      path: 'edytor',
      element: (
        <RequireAuth>
          <RequireRole role="Teacher">
            <ArticleCreatorView />
          </RequireRole>
        </RequireAuth>
      ),
    },
    {
      path: 'edytor/:titleNormalized',
      element: (
        <RequireAuth>
          <RequireRole role="Teacher">
            <ArticleCreatorView />
          </RequireRole>
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
