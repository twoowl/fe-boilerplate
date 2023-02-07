import React from 'react';
import { type RouteObject } from 'react-router-dom';

import App from './app';
import {
  HomePage,
  ErrorPage,
  SettingsPage,
  settingsPageLoader
} from './pages';
import config from './utils/config';
import { logger } from './utils/logger';

logger.log(config);

const PageRouting: RouteObject[] = [
  {
    path: `${config.publicUrl}`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${config.publicUrl}home`,
        element: <HomePage />,
      },
      {
        path: `${config.publicUrl}settings`,
        element: <SettingsPage />,
        loader: settingsPageLoader,
      },
    ]
  },
];

export default PageRouting;
