const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.join(__dirname, '../client/src');

const config = {
  context: APP_DIR,
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
      {
        include: path.join(APP_DIR, 'images'),
        test: /\.png$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: ({ resource }) => /node_modules/.test(resource),
      name: 'vendor',
    }),
  ]
};

module.exports = config;
