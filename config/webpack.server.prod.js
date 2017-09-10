const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const join = require('path').join;
const readdirSync = require('fs-extra').readdirSync;
const webpack = require('webpack');

const DefinePlugin = webpack.DefinePlugin;

const common = require('./webpack.server.common');

const externals = {};

readdirSync('node_modules')
  .filter(moduleName => moduleName === '@google-cloud/datastore')
  .forEach(moduleName => externals[moduleName] = `commonjs ${moduleName}`);

const config = Object.assign({}, common, {
  externals,
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/server-report.html',
      openAnalyzer: false,
    }),
  ],
});

module.exports = config;
