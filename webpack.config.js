const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: [
          "babel-loader",
          "eslint-loader"
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style!css?importLoaders=1!postcss'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
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
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "url" loader exclusion list.
    ]
  }
};
