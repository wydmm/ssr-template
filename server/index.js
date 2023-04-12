import express from 'express';
import { matchRoutes } from 'react-router-dom';
import { routesArray } from '../src/Routes';
import render from './render';
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const promises = matchRoutes(routesArray, req.path)
    .map(({ route }) => {
      return route?.loadData ? route?.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });
  Promise.all(promises).then(() => {
    const context = {};
    const content = render(req, null, context);
    if (context.url) {
      res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(8080, () => {
  console.log('Listening on PORT 8080');
});
