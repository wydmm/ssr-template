import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const domNode = document.getElementById('root');

const reactNode = (
  <BrowserRouter>
    <Routes />
    {/* <div>{renderRoutes(Routes)}</div> */}
    {/* <Routes /> */}
  </BrowserRouter>
);
const root = hydrateRoot(domNode, reactNode);
