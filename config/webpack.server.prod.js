const BungleAnalyzerPlygin = require('webpack-bundle-analyzer');
const join = require('path').join;

const common = require('./webpack.server.common');

const config = Object.assign({}, common, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
});

export default config;
