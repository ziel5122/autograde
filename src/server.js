import App from './app/App';
import chokidar from 'chokidar';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import test from './endpoints/test';

const app = express();
const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 3000;

// Include server routes as a middleware
app.use(function(req, res, next) {
  test(req, res, next);
});

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'public'));

// define the folder that will be used for static assets
// app.use(express.static(path.join(__dirname, 'public')));

// universal routing and rendering
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;

  if (process.env.UNIVERSAL) {
    const context = {};
    markup = renderToString(
      <App />,
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.is404) {
      status = 404;
    }
  }

  return res.status(status).render('index', { markup });
});

app.listen(port, (err) => {
  if (err) return console.error(err);

  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `
  );
});
