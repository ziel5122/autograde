import { join } from 'path';
import UglifyJSPlugin  from 'uglifyjs-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import common from './webpack.common.babel';

const SERVER_DIR = join(__dirname, 'src');

const config = {
  ...common,
  plugins: [
    new UglifyJSPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};

export default config;
