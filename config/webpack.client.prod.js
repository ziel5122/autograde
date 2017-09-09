const join = require('path').join;
const webpack = require('webpack');

const common = require('./webpack.client.common');

const config = Object.assign({}, common, {
  entry: {
    app: [
      './index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, '../dist'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'node-static.js',
      minChunks({ context }, count) {
        return context && context.indexOf('node_modules') >= 0;
      },
      name: 'node-static',
    }),
  ]
});

module.exports = config;
