const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

const common = require('./webpack.client.common');

const config = Object.assign({}, common, {
  entry: {
    app: [
      './index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist/src/static'),
  },
  plugins: common.plugins.concat([
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../../../reports/client-report.html',
      openAnalyzer: false,
    }),
  ]),
});

module.exports = config;
