const join = requrie('path').join;
const readdirSync = require('fs-extra').readdirSync;

const common = require('./webpack.server.common');

const externals = {};

readdirSync('node_modules')
  .filter(moduleName => moduleName !== '.bin')
  .forEach(moduleName => externals[moduleName] = `commonjs ${moduleName}`);

const config = Object.assign({}, common, {
  externals,
});

export default config;
