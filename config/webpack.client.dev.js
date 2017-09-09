const join = require('path').join;
const HotModuleReplacementPlugin = require('webpack')
  .HotModuleReplacementPlugin;

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
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});

module.exports = config;
