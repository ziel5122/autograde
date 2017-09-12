const fs = require('fs-extra');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

const APP_DIR = path.join(__dirname, '../server/src');

const externals = {};

fs.readdirSync('node_modules')
  .filter(moduleName => moduleName !== '.bin')
  .forEach(moduleName => externals[moduleName] = `commonjs ${moduleName}`);

const config = {
  context: APP_DIR,
  entry: {
    server: './server.js',
  },
  externals,
  module: {
    rules: [
      {
        include: APP_DIR,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  node: {
    __dirname: false,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new UglifyJsPlugin(),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/server-report.html',
      openAnalyzer: false,
    }),
  ],
  target: 'node',
};

module.exports = config;
