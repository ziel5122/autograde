const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const join = require('path').join;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const common = require('./webpack.client.common');

const DefinePlugin = webpack.DefinePlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const config = Object.assign({}, common, {
  entry: {
    app: [
      './index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, '../dist/static'),
  },
  plugins: [
    new UglifyJSPlugin(),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../../reports/client-report.html',
      openAnalyzer: false,
    }),
    new CommonsChunkPlugin({
      filename: 'node-static.js',
      minChunks({ context }, count) {
        return context && context.indexOf('node_modules') >= 0;
      },
      name: 'node-static',
    }),
  ]
});

module.exports = config;
