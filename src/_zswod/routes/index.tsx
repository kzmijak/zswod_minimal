import { useRoutes } from 'react-router';
import { PATH_APP, PATH_HOME } from './paths';
import { DashboardRoutes } from './src/dashboard.routes';
import { LandingRoutes } from './src/landing.routes';

function Router() {
  return useRoutes([DashboardRoutes, LandingRoutes]);
}

export { Router, PATH_APP, PATH_HOME };
