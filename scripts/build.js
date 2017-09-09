const webpack = require('webpack');

const clientConfig = require('../config/webpack.client.prod');
const serverConfig = require('../config/webpack.server.prod');

webpack([clientConfig, serverConfig], (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stats);
  }
});
