import React from 'react';
import { type RouteObject } from 'react-router-dom';

import App from './app';
import config from './config';
import {
  HomePage,
  ErrorPage,
  SettingsPage,
  settingsPageLoader
} from './pages';

console.log('publicUrl', config.publicUrl);

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
