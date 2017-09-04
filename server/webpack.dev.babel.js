import { join } from 'path';
import { readdirSync } from 'fs';

import common from './webpack.common.babel';

const SERVER_DIR = join(__dirname, 'src');

const externals = {};

readdirSync('node_modules')
  .filter(moduleName => moduleName !== '.bin')
  .forEach(moduleName => externals[moduleName] = `commonjs ${moduleName}`);

const config = {
  ...common,
  externals,
};

export default config;
