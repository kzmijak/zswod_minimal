import { useRoutes } from 'react-router';
import { DashboardRoutes } from './src/dashboard.routes';
import { LandingRoutes } from './src/landing.routes';

function Router() {
  return useRoutes([DashboardRoutes, LandingRoutes]);
}

export { Router };
