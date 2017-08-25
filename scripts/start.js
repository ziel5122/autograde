var express = require('express');
var webpack = require('webpack');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');

var config = require('../webpack.config');

var PORT = process.env.PORT || 3000;

var app = express();

var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(hotMiddleware(compiler));

app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
