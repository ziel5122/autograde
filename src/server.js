import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router';

import Main from './app/Main';

process.env.NODE_ENV = 'development';


const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// ejs templates
app.set('view engine', 'ejs');
app.set('views', publicPath);

// define the folder that will be used for static assets
app.use(express.static(publicPath));

// universal routing and rendering
app.get('*', (req, res) => {
  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  let markup = '';
  let status = 200;

  if (process.env.UNIVERSAL) {
    const context = {};
    markup = renderToString(
      <Router context={context} location={req.url}>
        <Main />
      </Router>
    );

    if (context.is404) status = 404;
  }

  return res.status(status).render('index', { markup });
});

// start the server
const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) return console.error(err);

  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `
  );
});
