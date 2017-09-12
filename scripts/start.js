require('dotenv').config();
const devMiddleware = require('webpack-dev-middleware');
const express = require('express');
const hotMiddleware = require('webpack-hot-middleware');
const join = require('path').join;
const json = require('body-parser').json;
const webpack = require('webpack');

const config = require('../config/webpack.client.dev');
const docker = require('../server/src/api/docker');
const login = require('../server/src/api/login')

const INDEX_PATH = join(__dirname, '../public/dev.html');
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

app.use(json());

app.use('/docker', docker);

app.use('/login', login);

app.get('*', (req, res) => {
  res.sendFile(INDEX_PATH)
});

app.listen(PORT);
