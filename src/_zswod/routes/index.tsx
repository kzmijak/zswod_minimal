import { useRoutes } from 'react-router';
import { CoreRoutes } from './src/core.routes';
import { DashboardRoutes, PATH_DASHBOARD_ROOT } from './src/dashboard.routes';
import { LandingRoutes } from './src/landing.routes';
import { PATH_DASHBOARD } from './src/menu.paths';

function Router() {
  return useRoutes([CoreRoutes, DashboardRoutes, LandingRoutes]);
}

export { Router, PATH_DASHBOARD_ROOT, PATH_DASHBOARD, DashboardRoutes };
