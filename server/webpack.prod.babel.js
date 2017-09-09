import { readdirSync } from 'fs';
import { join } from 'path';
import UglifyJSPlugin  from 'uglifyjs-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import common from './webpack.common.babel';

const SERVER_DIR = join(__dirname, 'src');

const externals = {};

const exclude = ['redis'];

readdirSync('node_modules')
  .filter(moduleName => exclude.includes(moduleName))
  .forEach(moduleName => externals[moduleName] = `commonjs ${moduleName}`);

const config = {
  ...common,
  externals,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};

export default config;
