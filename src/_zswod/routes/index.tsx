import { useRoutes } from 'react-router';
import { DashboardRoutes, PATH_DASHBOARD_ROOT } from './src/dashboard.routes';
import { LandingRoutes } from './src/landing.routes';
import { PATH_DASHBOARD } from './src/menu.paths';

function Router() {
  return useRoutes([DashboardRoutes, LandingRoutes]);
}

export { Router, PATH_DASHBOARD_ROOT, PATH_DASHBOARD, DashboardRoutes };
