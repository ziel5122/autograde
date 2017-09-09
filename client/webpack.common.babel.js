import { join } from 'path';
import webpack from 'webpack';

const APP_DIR = join(__dirname, './src');

const config = {
  context: APP_DIR,
  module: {
    rules: [
      {
        include: APP_DIR,
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      {
        include: join(__dirname, 'img'),
        test: /\.png$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
};

export default config;
