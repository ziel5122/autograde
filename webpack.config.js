var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'static');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: APP_DIR + '/index',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  }
};

module.exports = config;
