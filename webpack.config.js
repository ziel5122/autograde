import webpack from 'webpack';
import path from 'path';
import qs from 'querystring';

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    loaders: [
      // Javascript
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.join(__dirname, 'src', 'client'),
        query: {
          "env": {
            "development": {
              "presets": ["react-hmre"],
              "plugins": [
                ["react-transform", {
                  "transforms": [{
                    "transform": "react-transform-hmr",
                    "imports": ["react"],
                    "locals": ["module"]
                  }]
                }]
              ]
            }
          },
        }
      },

      // CSS
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src', 'client'),
        loader: 'style-loader!css-loader?' + qs.stringify({
          modules: true,
          importLoaders: 1,
          localIdentName: '[path][name]-[local]'
        })
      }

    ]
  }
};
