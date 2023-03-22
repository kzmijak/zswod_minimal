import { useRoutes } from 'react-router';
import { AuthRoutes } from './src/auth.routes';
import { CoreRoutes } from './src/core.routes';
import { DashboardRoutes } from './src/dashboard.routes';
import { LandingRoutes } from './src/landing.routes';
import { PATH_DASHBOARD } from './src/paths';

function Router() {
  return useRoutes([CoreRoutes, DashboardRoutes, LandingRoutes, AuthRoutes]);
}

export { Router, PATH_DASHBOARD, DashboardRoutes };
