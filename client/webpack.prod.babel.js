import { join } from 'path';
import UglifyJSPlugin  from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

import common from './webpack.common.babel';

const config = {
  ...common,
  entry: {
    app: [
      './index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'heroku/static'),
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
};

export default config;
