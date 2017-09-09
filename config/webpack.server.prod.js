const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const join = require('path').join;
const webpack = require('webpack');

const DefinePlugin = webpack.DefinePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const common = require('./webpack.server.common');

const config = Object.assign({}, common, {
  plugins: [
    new UglifyJsPlugin(),
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
