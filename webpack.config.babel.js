import { join } from 'path';
import { optimize } from 'webpack';

const APP_DIR = join(__dirname, './src');

const config = {
  context: APP_DIR,
  entry: {
    client: [
      './index.js',
    ],
  },
  module: {
    rules: [
      {
        include: APP_DIR,
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'build'),
  },
  plugins: [
    new optimize.CommonsChunkPlugin({
      filename: 'node-static.js',
      minChunks({ context }, count) {
        return context && context.indexOf('node_modules') >= 0;
      },
      name: 'node-static',
    }),
  ],
};

export default config;
