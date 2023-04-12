import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';

import HttpContext from './httpContext';
import Routes from '../src/Routes';

export default (req, store, context) => {
  const staticContext = { staticContext: context };
  const content = renderToString(
    <HttpContext.Provider value={staticContext}>
      <StaticRouter location={req.path}>
        <Routes />
      </StaticRouter>
    </HttpContext.Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="icon" href="images/favicon.ico"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store?.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
};
