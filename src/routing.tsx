import React from 'react';
import { type RouteObject } from 'react-router-dom';

import App from './app';
import {
  HomePage,
  ErrorPage,
  SettingsPage,
  settingsPageLoader
} from './pages';

console.log('process.env.REACT_APP_PUBLIC_URL', process.env.REACT_APP_PUBLIC_URL);

const PageRouting: RouteObject[] = [
  {
    path: `${process.env.REACT_APP_PUBLIC_URL ?? '/'}`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${process.env.REACT_APP_PUBLIC_URL ?? '/'}home`,
        element: <HomePage />,
      },
      {
        path: `${process.env.REACT_APP_PUBLIC_URL ?? '/'}settings`,
        element: <SettingsPage />,
        loader: settingsPageLoader,
      },
    ]
  },
];

export default PageRouting;
