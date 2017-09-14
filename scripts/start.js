require('dotenv').config();

const devMiddleware = require('webpack-dev-middleware');
const express = require('express');
const hotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const config = require('../config/webpack.client.dev');
const middleware = require('../server/src/api/middleware');

const PORT = process.env.PORT || 3000;

const compiler = webpack(config);

const app = express();

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: '/',
  stats: {
    colors: true,
  },
}));

app.use(hotMiddleware(compiler));

middleware.applyMiddleware(app);

app.listen(PORT);
