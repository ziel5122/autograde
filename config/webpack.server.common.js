const join = require('path').join;

const APP_DIR = join(__dirname, '../src');

const config = {
  context: APP_DIR,
  entry: {
    server: './server.js',
  },
  module: {
    rules: [
      {
        include: APP_DIR,
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
    path: join(__dirname, '../dist'),
  },
  target: 'node',
};

export default config;
