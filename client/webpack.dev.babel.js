import { join } from 'path';

import common from './webpack.common.babel';

const config = {
  ...common,
  entry: {
    app: [
      './index.js',
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'node-static.js',
      minChunks({ context }, count) {
        return context && context.indexOf('node_modules') >= 0;
      },
      name: 'node-static',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
