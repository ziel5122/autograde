const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    js: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        enforce: 'pre'
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "url" loader exclusion list.
    ]
  }
};
