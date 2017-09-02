var join = require('path').join;
var webpack = require('webpack');

var APP_DIR = join(__dirname, './src/client');

var config = {
  context: APP_DIR,
  entry: {
    app: [
      './index.js',
      'webpack-hot-middleware/client',
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
      {
        include: join(__dirname, 'public'),
        test: /\.png$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'build'),
    //publicPath: '/',
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

module.exports = config;
