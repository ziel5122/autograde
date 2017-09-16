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
    new webpack.DefinePlugin({
      'process.env': {
        AWS_ACCESS_KEY_ID: JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
        AWS_SECRET_ACCESS_KEY: JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
        JWT_SECRET: JSON.stringify(process.env.JWT_SECRET),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]),
});

module.exports = config;
