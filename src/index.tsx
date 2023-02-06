import { Global, css } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
