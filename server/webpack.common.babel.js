import { join } from 'path';

const SERVER_DIR = join(__dirname, 'src');

const config = {
  context: SERVER_DIR,
  entry: {
    server: './server.js',
  },
  module: {
    rules: [
      {
        include: SERVER_DIR,
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  node: {
    __dirname: false,
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'dist'),
  },
  target: 'node',
};

export default config;
