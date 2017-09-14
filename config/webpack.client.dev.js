const webpack = require('webpack');

const common = require('./webpack.client.common');

const config = Object.assign({}, common, {
  entry: {
    app: [
      './index.js',
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname,
    publicPath: '/',
  },
  plugins: common.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]),
});

module.exports = config;
