import { lazy } from 'react';
import { BasePaths } from './paths';

const BaseRoutes = [
  {
    path: '/*',
    exact: true,
    component: lazy(() => import('modules/authentication/routes')),
    Layout: null,
    useAuth: false,
  },

  {
    path: `${BasePaths.ADMIN}/*`,
    exact: true,
    component: lazy(() => import('modules/admin/routes')),
    Layout: null,
    useAuth: false,
  },
];

export default BaseRoutes;
