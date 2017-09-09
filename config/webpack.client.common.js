const join = require('path').join;
const webpack = require('webpack');

const APP_DIR = join(__dirname, '../src');

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
        include: join(APP_DIR, 'images'),
        test: /\.png$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
};

module.exports = config;
