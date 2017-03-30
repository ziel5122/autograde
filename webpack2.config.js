import autoprefixer from 'autoprefixer';
import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';

process.traceDeprecation = true;

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/app.js',
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ]
                  }),
                ];
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    contentBase: './public'
  },

  devtool: "cheap-module-source-map",

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  watch: true,

  target: 'node'
};

module.exports = config;
