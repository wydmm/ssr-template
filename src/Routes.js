import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';

const at404 = (
  <div>
    <h1> 404 !</h1>
  </div>
);

export const routesArray = [
  {
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
      { path: '*', element: <at404 /> },
    ],
  },
];

const Routes = () => {
  const routes = useRoutes(routesArray);
  return routes;
};
export default Routes;
