import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Routing from './routing';

const GlobalCSS = css`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const router = createBrowserRouter(Routing);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Global styles={GlobalCSS} />
  </React.StrictMode>
);
