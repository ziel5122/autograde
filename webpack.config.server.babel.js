import { join } from 'path';
import { readdirSync } from 'fs';

const externals = {};

readdirSync('node_modules')
  .filter(moduleName => moduleName !== '.bin')
  .forEach(moduleName => externals[moduleName] = `commonjs ${moduleName}`);

const SERVER_DIR = join(__dirname, 'src/server');

const config = {
  context: SERVER_DIR,
  entry: {
    server: './server.js',
  },
  externals,
  module: {
    rules: [
      {
        include: SERVER_DIR,
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'build/server'),
  },
};

export default config;
