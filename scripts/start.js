var devMiddleware = require('webpack-dev-middleware');
var express = require('express');
var hotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var webpack = require('webpack');

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

// app.use(express.static('../build'));

app.get('*', (req, res) => {
  console.log('hit');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
